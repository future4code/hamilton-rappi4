import axios from "axios";

const baseUrl = `https://us-central1-missao-newton.cloudfunctions.net/rappi4`;

export const setUserInfo = (info) => {
  return {
    type: "SET_USER_INFO",
    payload: {
      info,
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
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const updateInfo = (body) => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.put(`${baseUrl}/profile`, body, {
      headers: {
        auth: token,
      },
    });
    console.log("Atualizou!");
  } catch (err) {
    console.log(err);
  }
};

export const updateAddress = (body) => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.put(`${baseUrl}/address`, body, {
      headers: {
        auth: token,
      },
    });
    localStorage.setItem("token", response.data.token);
  } catch (err) {
    console.error(err);
  }
};
