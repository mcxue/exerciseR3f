import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';
import { Button } from 'mcxue-ui';

const Home = () => {
  return (
    <div className={style.homeWrapper}>
      <div className={style.homeMain}>
        <h1 className={style.title}>Exercise R3F</h1>
        <p>练习 Three.js，使用 React Three Fiber 写一些 Demo</p>
        <div className={style.buttonWrapper}>
          <Link to="/examples/cube-demo">
            <Button className={style.button} type="plain">看例子</Button>
          </Link>
          <Link target="_blank" to="https://github.com/mcxue/exercise-r3f">
            <Button className={style.button} bgType="filled">Github</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
