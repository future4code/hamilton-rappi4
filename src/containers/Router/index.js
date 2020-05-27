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
import Cart from "../Cart";
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux";
import { Loader } from "../../components/globalStyle"

export const routes = {
  login: '/',
  signup: '/signup',
  address: '/signup/address',
  profile: '/profile',
  updateAddress: '/profile/updateAddress',
  updateInfo: '/profile/updateInfo',
  home: "/home",
  restaurant: "/restaurant/:id",
  cart: "/cart"
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
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.restaurant} component={Restaurant} />
        <Route exact path={routes.cart} component={Cart} />
      </Switch>
      <Loader>
        {props.loading && <CircularProgress />}
      </Loader>
    </ConnectedRouter>
  );
}

const mapStateToProps = (state) => ({
  loading: state.profiles.isLoading
})

export default connect(mapStateToProps)(Router);
