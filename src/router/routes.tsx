import Home from '../pages/home';
import ErrorPage from '../pages/errorPage';
import ExamplesRoot from '../pages/exmaples/root';
import exampleRoutes from '../pages/exmaples/routes';
import { RouteObject } from 'react-router';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/examples',
    element: <ExamplesRoot />,
    children: exampleRoutes,
  },
];
export default routes;

