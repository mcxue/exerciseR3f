import CommonMenu from '../commonMenu';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import React, { Suspense, useCallback, useMemo } from 'react';
import style from './index.module.scss';
import Loading from '../loading';
import { Menu } from 'mcxue-ui';

const MENU_ITEMS = [
  {
    label: 'cube-demo',
    key: '/examples/cube-demo',
  },
  {
    label: 'sphere-cube-plane',
    key: '/examples/sphere-cube-plane',
  },
  {
    label: 'first-scene',
    key: '/examples/first-scene',
  },
  {
    label: 'play-with-drei',
    key: '/examples/play-with-drei',
  },
  {
    label: 'how-to-debug',
    key: '/examples/how-to-debug',
  },
  {
    label: 'environment-and-staging',
    key: '/examples/environment-and-staging',
  },
  {
    label: 'load-models',
    key: '/examples/load-models',
  },
  {
    label: 'load-3d-text',
    key: '/examples/load-3d-text',
  },
];

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getSelectedKeys = useCallback((s: string): string | string[] => {
    return s;
  }, []);
  const selectedKeys = useMemo(() => getSelectedKeys(pathname), [pathname]);
  return (
    <>
      <Menu items={MENU_ITEMS} selectedKeys={selectedKeys} onClick={(e => {
        if (!e.isGroup) {
          navigate(e.keys[e.keys.length - 1]);
        }
      })} />
    </>
  );
};

export default React.memo(function RootLayout() {
  return (
    <div className={style.rootLayout}>
      <CommonMenu />
      <div className={style.docLayout}>
        <div style={{ height: '100%', overflow: 'scroll' }}>
          <Nav />
        </div>
        <div style={{
          border: '2px solid var(--mcxueColorGrey40pct)',
          borderRadius: '5px',
        }}>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
});
