import React from 'react';
import { Switch } from 'react-router-dom';
import { CustomRoute } from './custom-route';
import { SignInPage } from '../modules/pages/sign-in/sign-in.page.';
import { SignUpPage } from '../modules/pages/sign-up/sign-up.page';
import { DashboardPage } from '../modules/pages/dashboard/dashboard.page';

export const Routes: React.FC = () => (
  <Switch>
    <CustomRoute path="/" exact component={SignInPage} />
    <CustomRoute path="/signup" component={SignUpPage} />
    <CustomRoute path="/dashboard" component={DashboardPage} isPrivate />
  </Switch>
);
