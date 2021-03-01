import React from 'react';

import AuthenticatedRoutes from './AuthenticatedRoutes';

const RouteWrapper = ({ component: Component, ...props }) => (
  <AuthenticatedRoutes {...props}>
    <Component />
  </AuthenticatedRoutes>
);

export default RouteWrapper;

