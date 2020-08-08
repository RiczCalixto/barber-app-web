import * as React from 'react';
import { AuthProvider } from './auth-context';
import { ToastProvider } from './toast-context';

export const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);
