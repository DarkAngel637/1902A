import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';

function RenderUI(){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )  
}
RenderUI();

//3. 订阅store改变的方法
let unSubscibe = store.subscribe(()=>{
  RenderUI();
  let state = store.getState();
  if (state.num > 105){
    //4. 取消订阅store改变的方法
    unSubscibe();
  }
})
