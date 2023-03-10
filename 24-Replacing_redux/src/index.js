import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import productReducer from './store/reducers/products'; // redux
// import ProductsProvider from './context/products-context'; // context
import configureProductsStore from './hooks-store/products-store';

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);

configureProductsStore(); //no need for wrapping, just initializing here
//for more stores, the only thing needed would be extra imports

ReactDOM.render(
  //redux would use the <Provider> import
  //<ProductsProvider> // context alternative
    <BrowserRouter>
      <App />
    </BrowserRouter>
  //</ProductsProvider>
  ,
  document.getElementById('root')
);
