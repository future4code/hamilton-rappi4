import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import profiles from "./profile";
import restaurants from "./restaurants";

export const generateReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    profiles,
    restaurants,
  });
