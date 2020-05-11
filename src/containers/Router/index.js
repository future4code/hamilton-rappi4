import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";
import Address from "../Address";
import Home from "../Home";

export const routes = {
  login: "/",
  signup: "/signup",
  address: "/signup/address",
  home: "/home",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signup} component={SignUp} />
        <Route exact path={routes.address} component={Address} />
        <Route path={routes.home} component={Home} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
