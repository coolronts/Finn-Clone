import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ModalProvider } from "context/ModalContext";
import ProductPage from "pages/ProductPage/ProductPage";
import Home from "pages/Home/Home";
import ScrollToTop from "utils/ScrollToTop";
import "./index.css";

const App = () => {
  return (
    <ModalProvider>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/product/:id" component={ProductPage} />
            <Route exact path="/" component={Home} />
          </Switch>
        </ScrollToTop>
      </Router>
    </ModalProvider>
  );
};
export default App;
