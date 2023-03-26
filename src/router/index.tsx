import { createBrowserRouter } from 'react-router-dom';
import { RouteObject } from 'react-router';
import React from 'react';
import RootLayout from '../components/rootLayout';
import ErrorPage from '../pages/errorPage';
import { setDocumentTitle } from '../utils';

const Home = React.lazy(() => import('../pages/home'));

const getExampleRouteChildren = () => {
  const list: RouteObject[] = [];
  const files = import.meta.glob('../pages/examples/*/index.tsx');
  const lazyLoadWithFn = (fn: () => Promise<any>) => {
    const Module = React.lazy(fn);
    return <Module />;
  };
  for (const key in files) {
    const name = /pages\/examples\/(.*)\/index\.tsx/.exec(key)?.[1];
    list.push({
      path: name,
      element: lazyLoadWithFn(files[key]),
      loader: async () => {
        setDocumentTitle(name);
        return null;
      },
    });
  }
  return list;
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
        loader: async () => {
          setDocumentTitle();
          return null;
        },
      },
      {
        path: 'examples',
        children: getExampleRouteChildren(),
      }],
  },
];

const router = createBrowserRouter(routes);

export default router;
