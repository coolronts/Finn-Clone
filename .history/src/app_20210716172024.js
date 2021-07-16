import React from "react";
import ReactDOM from "react-dom";
require("dotenv").config();
import "./index.css";
import { ModalProvider } from "./Context/ModalContext";
import ProductPage from "./pages/ProductPage.jsx";
const App = () => {
  console.log(process.env.DB_HOST)
  return (
    <ModalProvider>
      <ProductPage />
    </ModalProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));