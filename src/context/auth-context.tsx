import * as React from 'react';
import { api } from '../services/api';
import {
  AuthContextInterface,
  StorageKey,
  AuthProviderState,
  SignInData,
} from '../model/auth-context.model';

const AuthContext = React.createContext({} as AuthContextInterface);

const initialState = () => {
  const token = localStorage.getItem(StorageKey.Token);
  const user = localStorage.getItem(StorageKey.User);

  if (token && user) {
    return { token, user: JSON.parse(user) };
  }

  return {} as AuthProviderState;
};

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = React.useState<AuthProviderState>(initialState);

  const signIn = async ({ email, password }: SignInData) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem(StorageKey.Token, token);
    localStorage.setItem(StorageKey.User, JSON.stringify(user));
    setData({ token, user });
  };

  const signOut = () => {
    console.log('deslogado');
  };

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextInterface => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
