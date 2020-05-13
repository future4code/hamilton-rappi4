import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const baseUrl = `https://us-central1-missao-newton.cloudfunctions.net/rappi4`;

export const login = (email, password) => async (dispatch) => {
  const body = {
    email,
    password,
  };
  try {
    const response = await axios.post(`${baseUrl}/login`, body);
    localStorage.setItem("token", response.data.token);
    response.data.user.hasAddress ? dispatch(push(routes.home)) : dispatch(push(routes.address))
  } catch (err) {
    console.error(err);
  }
};

export const signUp = (name, email, cpf, password) => async (dispatch) => {
  const body = {
    name,
    email,
    cpf,
    password,
  };

  try {
    const response = await axios.post(`${baseUrl}/signup`, body);
    localStorage.setItem("token", response.data.token);
  } catch (err) {
    console.error(err);
  }
};

export const addAddress = (body) => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.put(`${baseUrl}/address`, body, {
      headers: {
        auth: token,
      },
    });
    localStorage.setItem("token", response.data.token);
    dispatch(push(routes.home))
  } catch (err) {
    console.error(err);
  }
};
