import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from '../Login';

const routes = {
  login: '/'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.login} component={Login} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
