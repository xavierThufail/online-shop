import {
  Dashboard,
  Product,
  Cart
} from '../Containers';
import { routePaths } from '../Constants';

export const routeConfig = [
  {
    path: routePaths.DASHBOARD,
    component: Dashboard,
    exact: true
  },
  {
    path: routePaths.PRODUCT,
    component: Product,
    exact: true
  },
  {
    path: routePaths.CART,
    component: Cart,
    exact: true
  }
];