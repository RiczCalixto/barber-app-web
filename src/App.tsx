import React from 'react';
import { GlobalStyle } from './component/global.styled-component';
import { SignInPage } from './pages/sign-in/sign-in.page.';
import { SignUpPage } from './pages/sign-up/sign-up.page';

export const App = () => (
  <>
    <SignUpPage />
    <SignInPage />
    <GlobalStyle />
  </>
);
