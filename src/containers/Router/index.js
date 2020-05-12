import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";
import Address from "../Address";
import Profile from "../User/userInfo";
import updateUserAddress from "../User/updateUserAddress";
import updateUserInfo from '../User/updateUserInfo';
import Home from "../Home";
import Restaurant from "../Restaurant";

export const routes = {
  login: '/',
  signup: '/signup',
  address: '/signup/address',
  profile: '/profile',
  updateAddress: '/profile/updateAddress',
  updateInfo: '/profile/updateInfo',
  home: "/home",
  restaurant: "/restaurant/:id",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signup} component={SignUp} />
        <Route exact path={routes.address} component={Address} />
        <Route exact path={routes.profile} component={Profile} />
        <Route exact path={routes.updateAddress} component={updateUserAddress} />
        <Route exact path={routes.updateInfo} component={updateUserInfo} />
        <Route path={routes.home} component={Home} />
        <Route path={routes.restaurant} component={Restaurant} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
