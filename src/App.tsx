import React from 'react';
import { GlobalStyle } from './modules/components/global.styled-component';
import { SignInPage } from './modules/pages/sign-in/sign-in.page.';
import { SignUpPage } from './modules/pages/sign-up/sign-up.page';
import { AuthProvider } from './hooks/auth-context';
import { Toast } from './modules/components/Toast.component';

export const App = () => (
  <>
    <AuthProvider>
      <SignInPage />
      <SignUpPage />
    </AuthProvider>
    <Toast />
    <GlobalStyle />
  </>
);
