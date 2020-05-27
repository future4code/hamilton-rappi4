import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import profiles from "./profile";
import restaurants from "./restaurants";
import cart from "./cart"

export const generateReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    profiles,
    restaurants,
    cart
  });
