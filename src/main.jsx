import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthContext.jsx';
import ProductProvider from './context/ProductContext.jsx';
import CartProvider from './context/CartContext.jsx';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
        <PayPalScriptProvider options={{ 
          clientId: import.meta.env.VITE_CLIENT_ID,
          //components: 'buttons',
          //currency: 'USD' 
        }}>
          <App />
        </PayPalScriptProvider>
          

            
          
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
  ,
)
