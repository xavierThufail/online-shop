import React from 'react';

import AuthenticatedRoutes from './AuthenticatedRoutes';
import { AppLayout } from '../Components';

const RouteWrapper = ({ component: Component, ...props }) => (
  <AuthenticatedRoutes {...props}>
    {AppLayout(Component)}
  </AuthenticatedRoutes>
);

export default RouteWrapper;

