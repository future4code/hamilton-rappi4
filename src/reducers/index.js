import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import profiles from "./profile";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    profiles
    // Outros reducers aqui
  });
