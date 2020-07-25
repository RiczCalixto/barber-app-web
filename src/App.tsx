import React from 'react';
import { GlobalStyle } from './component/global.styled-component';
import { SignupPage } from './pages/signup/signup.page.';

export const App = () => (
  <>
    <SignupPage />
    <GlobalStyle />
  </>
);
