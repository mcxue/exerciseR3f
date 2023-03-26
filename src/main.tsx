import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './router';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import 'mcxue-ui/dist/style.css';
import addIconfont from 'mcxue-ui/dist/iconfont.js';

addIconfont();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
