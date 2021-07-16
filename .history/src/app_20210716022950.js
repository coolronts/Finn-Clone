import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ModalProvider } from "./Context/ModalContext";
import ProductPage from "./pages/ProductPage.jsx";
const App = () => {
  return (
    <ModalProvider>
      <Home/>
    </ModalProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
