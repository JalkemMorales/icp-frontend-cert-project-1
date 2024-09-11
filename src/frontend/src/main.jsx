import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import { AuthProvider } from "./context/AuthContext";

// npm install react-router-dom

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AuthProvider>
    <App/>
  </AuthProvider>
  </BrowserRouter>
);
