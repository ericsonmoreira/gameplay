import React, { createContext, useContext } from 'react';
import { useState } from 'react';

import * as AuthSession from 'expo-auth-session';

import {
  REDIRECT_URI,
  SCOPE,
  RESPONSE_TYPE,
  CLIENTE_ID,
  CDN_IMAGE,
} from '../configs';

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
        params: { access_token, token_type, error },
      } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === 'success' && !error) {
        api.defaults.headers.authorization = `${token_type} ${access_token}`;

        // URL da documentação do Discord
        const userInfo = await api.get('/users/@me');

        const firstname = userInfo.data.username.split(' ')[0] as string;
        userInfo.data.avatar =
          `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png` as string;

        setUser({
          ...userInfo.data,
          firstname,
          token: access_token,
        });
      }
    } catch {
      throw new Error('Não foi possível autenticar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
