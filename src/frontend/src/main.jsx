import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import * as bootstrap from 'bootstrap'

// npm install react-router-dom

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AuthProvider>
    <CartProvider>
    <App/>  
    </CartProvider>
  </AuthProvider>
  </BrowserRouter>
);
