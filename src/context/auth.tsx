import React, { createContext, useContext } from 'react';

export interface AuthContextData {
  name: string;
  email: string;
  avatar: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        name: 'Ericson',
        email: 'moreira.ericson@gmail.com',
        avatar: 'ericson.png',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}
