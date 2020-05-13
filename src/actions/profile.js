import axios from "axios";
import { replace } from "connected-react-router";
import { routes } from "../containers/Router";
import { setLoading } from "./global";

const baseUrl = `https://us-central1-missao-newton.cloudfunctions.net/rappi4`;

export const setUserInfo = (info) => {
  return {
    type: "SET_USER_INFO",
    payload: {
      info,
    },
  };
};

export const setOrdersHistory = (order) => {
  return {
    type: "SET_ORDERS_HISTORY",
    payload: {
      order,
    },
  };
};

export const getUserInfo = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/profile`, {
      headers: {
        auth: token,
      },
    });
    dispatch(setUserInfo(response.data.user));
  } catch (err) {
    console.log(err);
  }
};

export const getOrdersHistory = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${baseUrl}/orders/history`, {
      headers: {
        auth: token,
      },
    });
    dispatch(setOrdersHistory(response.data.orders));
  } catch (err) {
    console.error(err);
  }
};

export const updateInfo = (body) => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    dispatch(setLoading(true));
    await axios.put(`${baseUrl}/profile`, body, {
      headers: {
        auth: token,
      },
    });
    dispatch(replace(routes.profile));
    dispatch(setLoading(false));
  } catch (err) {
    console.log(err);
  }
};

export const updateAddress = (body) => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    dispatch(setLoading(true));
    const response = await axios.put(`${baseUrl}/address`, body, {
      headers: {
        auth: token,
      },
    });
    localStorage.setItem("token", response.data.token);
    dispatch(replace(routes.profile));
    dispatch(setLoading(false));
  } catch (err) {
    console.error(err);
  }
};
