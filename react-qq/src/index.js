import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
// 引入reduxjs
import store from './store'
import { Provider } from 'react-redux'
// 引入antd-mobile样式
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

