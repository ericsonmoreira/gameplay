import React, { createContext, useContext } from 'react';
import { useState } from 'react';

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
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<User>({} as User);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
