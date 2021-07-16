import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
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
