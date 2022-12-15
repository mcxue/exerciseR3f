import Home from '../pages/home';
import ErrorPage from '../pages/errorPage';
import ExamplesRoot from '../pages/exmaples/root';
import exampleRoutes from '../pages/exmaples/routes';
import { RouteObject } from 'react-router';
import { setDocumentTitle } from '../utils';

const routes: RouteObject[] = [
  {
    path: '/exercise-r3f',
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: async () => {
      setDocumentTitle();
      return null;
    },
  },
  {
    path: '/exercise-r3f/examples',
    element: <ExamplesRoot />,
    children: exampleRoutes,
  },
];
export default routes;

