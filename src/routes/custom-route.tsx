import * as React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth-context';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export const CustomRoute: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  const renderComponent = ({ location }: ReactDOMRouteProps) => {
    const allowedToRender = isPrivate === !!user;
    const pathName = {
      pathname: isPrivate ? '/' : 'dashboard',
      state: { from: location },
    };

    return allowedToRender ? <Component /> : <Redirect to={pathName} />;
  };

  return <ReactDOMRoute {...rest} render={renderComponent} />;
};
