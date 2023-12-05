import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {FilterProvider} from './contextapi/FilterContext'
import { AppProvider } from './contextapi/Appcontext';
import { CartProvider } from './contextapi/CartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AppProvider>
    <FilterProvider>
      <CartProvider>
        <App/>
      </CartProvider>
    </FilterProvider>
   </AppProvider>
  </React.StrictMode>
);
