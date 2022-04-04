import React from 'react';
import ReactDOM from 'react-dom';
import ProductsProvider from "./context/products-context";
import configureStore from './hooks-store/product-store';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

configureStore();

ReactDOM.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>,
  document.getElementById('root')
);
