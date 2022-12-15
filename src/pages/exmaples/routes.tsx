import { RouteObject } from 'react-router';
import Textures from './textures';
import FirstScene from './first-scene';
import PlayWithDrei from './play-with-drei';
import { setDocumentTitle } from '../../utils';
import HowToDebug from './how-to-debug';
import EnvironmentAndStaging from './environment-and-staging';
import SphereCubePlane from './sphere-cube-plane';
import LoadModels from './load-models';
import Load3DText from './load-3d-text';
import CubeDemo from './cube-demo';

// 这里想写一种 TS 类型，能够扩展 RouteObject，新增 title: string，目前还没有想到一个好办法
const routes: RouteObject[] = [
  {
    path: 'cube-demo',
    element: <CubeDemo />,
    loader: async () => {
      setDocumentTitle('cube-demo');
      return null;
    },
  },
  {
    path: 'sphere-cube-plane',
    element: <SphereCubePlane />,
    loader: async () => {
      setDocumentTitle('sphere-cube-plane');
      return null;
    },
  },
  {
    path: 'first-app',
    element: <FirstScene />,
    loader: async () => {
      setDocumentTitle('first-app');
      return null;
    },
  },
  {
    path: 'play-with-drei',
    element: <PlayWithDrei />,
    loader: async () => {
      setDocumentTitle('play-with-drei');
      return null;
    },
  },
  {
    path: 'how-to-debug',
    element: <HowToDebug />,
    loader: async () => {
      setDocumentTitle('how-to-debug');
      return null;
    },
  },
  {
    path: 'environment-and-staging',
    element: <EnvironmentAndStaging />,
    loader: async () => {
      setDocumentTitle('environment-and-staging');
      return null;
    },
  },
  {
    path: 'load-models',
    element: <LoadModels />,
    loader: async () => {
      setDocumentTitle('load-models');
      return null;
    },
  },
  {
    path: 'textures',
    element: <Textures />,
    loader: async () => {
      setDocumentTitle('textures');
      return null;
    },
  },
  {
    path: 'load-3d-text',
    element: <Load3DText />,
    loader: async () => {
      setDocumentTitle('textures');
      return null;
    },
  },
];

export default routes;
