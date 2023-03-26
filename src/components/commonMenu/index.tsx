import React, { useCallback, useMemo } from 'react';
import style from './index.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Menu, Icon } from 'mcxue-ui';

const MENU_ITEMS = [
  {
    label: '首页',
    key: '/',
  },
  {
    label: '组件',
    key: '/start/components/button',
  },
  {
    label: '更新日志',
    key: '/start/changeLog',
  },
];

export default function CommonMenu() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getSelectedKeys = useCallback((s: string) => {
    if (s === '/') {
      return '/';
    } else if (s === '/start/changeLog') {
      return '/start/changeLog';
    } else {
      return '/start/components/button';
    }
  }, []);
  const selectedKeys = useMemo(() => getSelectedKeys(pathname), [pathname]);
  return (
    <menu className={style.menu}>
      <div className={style.logoWrapper}>
        <Link to="/">
          <Icon className={style.logo} name="logo" />
        </Link>
        <span className={style.text}>Exercise R3F</span>
      </div>
    </menu>
  );
}
