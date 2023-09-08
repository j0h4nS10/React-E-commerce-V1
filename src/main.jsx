import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthContext.jsx';
import ProductProvider from './context/ProductContext.jsx';
import CartProvider from './context/CartContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <App />          
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
  ,
)
