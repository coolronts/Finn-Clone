import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <ModalProvider>
      <Home />
    </ModalProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
