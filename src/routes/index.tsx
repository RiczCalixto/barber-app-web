import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignInPage } from '../modules/pages/sign-in/sign-in.page.';
import { SignUpPage } from '../modules/pages/sign-up/sign-up.page';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignInPage} />
    <Route path="/signup" component={SignUpPage} />
  </Switch>
);
