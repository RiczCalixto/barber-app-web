import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './modules/components/global.styled-component';
import { AppProvider } from './hooks';
import { Routes } from './routes';

export const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
  </BrowserRouter>
);
