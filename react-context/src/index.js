import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 2.在祖先通过provider注入context
import ListContext from './context/listContext'
const list = [1,2,3,4,5,6,7,8,9,10];

ReactDOM.render(
  <ListContext.Provider value={{
    list
  }}>
    <App />
  </ListContext.Provider>,
  document.getElementById('root')
);
