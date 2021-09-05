import React, { useCallback } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuthContext } from "../Contexts/Auth";
import { routePaths } from '../Constants';

const AuthenticatedRoutes = ({ children: Children, ...props }) => {
  const { isLoggedIn } = useAuthContext();

  const redirectToLogin = useCallback(referer => (
    <Redirect
      to={{
        pathname: routePaths.LOGIN,
        state: { referer }
      }}
    />
  ), []);

  const renderRoute = useCallback(({ location }) => (
    isLoggedIn ? (Children) : redirectToLogin(location)
  ), [isLoggedIn, redirectToLogin, Children])

  return <Route {...props} render={renderRoute} />
};

export default AuthenticatedRoutes;
