import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ModalProvider } from "#context/ModalContext";
import ProductPage from "#pages/ProductPage";
import Home from "#pages/Home";
import "./index.css";
const App = () => {
  return (
    <ModalProvider>
      <Router>
        <Switch>
          <Route path="/product/:id" component={ProductPage} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </ModalProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
