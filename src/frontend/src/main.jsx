import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from "react-router-dom";
import App from "./App";
import Navbar from "./components/navbar";
import "./index.scss";
import Carrito from "./components/carrito";

// npm install react-router-dom

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
        <App/>
  </BrowserRouter>
);
