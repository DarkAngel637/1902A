import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 引入路由模式
import {HashRouter, BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  // 把路由模式包裹到跟组件外部
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);