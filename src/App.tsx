import React from 'react';
import { GlobalStyle } from './modules/components/global.styled-component';
import { SignInPage } from './modules/pages/sign-in/sign-in.page.';
import { SignUpPage } from './modules/pages/sign-up/sign-up.page';
import { AuthProvider } from './context/auth-context';

export const App = () => (
  <>
    <AuthProvider>
      <SignInPage />
      <SignUpPage />
    </AuthProvider>
    <GlobalStyle />
  </>
);
