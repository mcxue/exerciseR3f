import { RouteObject } from 'react-router';
import Textures from './textures';
import FirstScene from './first-scene';

const routes: RouteObject[] = [
  {
    path: 'textures',
    element: <Textures />,
  },
  {
    path: 'first-app',
    element: <FirstScene />,
  },
];

export default routes;
