import {
  Dashboard
} from '../Containers';
import { routePaths } from '../Constants';

export const routeConfig = [
  {
    path: routePaths.DASHBOARD,
    component: Dashboard,
    exact: true
  }
];