import { RouteObject } from 'react-router';
import Textures from './textures';
import FirstScene from './first-scene';
import PlayWithDrei from './play-with-drei';
import { setDocumentTitle } from '../../utils';

// 这里想写一种 TS 类型，能够扩展 RouteObject，新增 title: string，目前还没有想到一个好办法
const routes: RouteObject[] = [
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
    path: 'textures',
    element: <Textures />,
    loader: async () => {
      setDocumentTitle('textures');
      return null;
    },
  },
];

export default routes;
