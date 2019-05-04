import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, DataPage, Portfolio, Resume } from "./pages";

const routes = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/home" exact component={Home} />
    <Route path="/data" exact component={DataPage} />
    <Route path="/portfolio" exact component={Portfolio} />
    <Route path="/resume" exact component={Resume} />
    <Route path="*" component={Home} />
  </Switch>
);

export default routes;
