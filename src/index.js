import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import"./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div className='tittle'>
        <h1 className='h-1'>To Do <span className='span'>List</span></h1>
    </div>
    <App/>
  </div>
);

