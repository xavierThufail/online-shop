import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login } from '../Containers';
import RouteWrapper from './RouteWrapper';
import { routePaths } from '../Constants';
import { routeConfig } from './Routes.config';

const routeMapper = (route, index) => (
  <RouteWrapper key={index} {...route} />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact={true}
        component={Login}
        path={routePaths.LOGIN}
      />
      {routeConfig.map(routeMapper)}
    </Switch>
  </BrowserRouter>
);

export default Routes;
