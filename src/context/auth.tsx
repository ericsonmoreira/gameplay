import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';
import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  CDN_IMAGE,
  CLIENTE_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from '../configs';
import { COLLECTION_USERS } from '../configs/database';
import api from '../services/api';

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    expires_in: string;
    scope: string;
    token_type: string;
    error?: string;
  };
};

interface User {
  id: string;
  username: string;
  firstname: string;
  avatar: string;
  email: string;
  token: string;
}

export interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<User>({} as User);

  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENTE_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    try {
      setLoading(true);

      const {
        type,
        params: { access_token, error },
      } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === 'success' && !error) {
        api.defaults.headers.authorization = `Bearer ${access_token}`;

        // URL da documentação do Discord
        const userInfo = await api.get('/users/@me');

        const firstname = userInfo.data.username.split(' ')[0] as string;
        userInfo.data.avatar =
          `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png` as string;

        const userData = {
          ...userInfo.data,
          firstname,
          token: access_token,
        };

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));

        setUser(userData);
      }
    } catch {
      throw new Error('Não foi possível autenticar');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setUser({} as User);

    await AsyncStorage.removeItem(COLLECTION_USERS);
  };

  const loadUserStorageData = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);
    if (storage) {
      const userLogged = JSON.parse(storage) as User;

      api.defaults.headers.authorization = `Bearer ${user.token}`;

      setUser(userLogged);
    }
  };

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
