import Home from '../pages/home';
import ErrorPage from '../pages/errorPage';
import { RouteObject } from 'react-router';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
];
export default routes;

