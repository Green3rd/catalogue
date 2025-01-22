import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { routeConstants } from "./config/routeConfig";
import { CatalogPage } from "CatalogPage/CatalogPage";

function App() {
  const route = routeConstants.map((constant) => {
    const Component = constant.component;
    return (
      <Route key={constant.url} path={constant.url} exact={true}>
        <Component />
      </Route>
    );
  });

  route.push(
  <Route path="*" key="defaultPage">
    <CatalogPage />
  </Route>
  )

  return (
    <div className="App">
      <Router>
        <Switch>{route}</Switch>
      </Router>
    </div>
  );
}

export default App;
