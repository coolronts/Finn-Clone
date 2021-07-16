import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ModalProvider } from "./Context/ModalContext";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";

const App = () => {
  return (
    <ModalProvider>
      <ProductPage />
    </ModalProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
