import axios from "axios";
import { replace } from "connected-react-router";
import { routes } from "../containers/Router";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4";

export const addToCart = (quantity, product, restaurantId, shipping) => ({
  type: "ADD_TO_CART",
  payload: { quantity, product, restaurantId, shipping },
});

export const removeProduct = (productId) => ({
  type: "REMOVE_PRODUCT",
  payload: { productId },
});

export const activeOrder = (order) => ({
  type: "ACTIVE_ORDER",
  payload: { order },
});

export const placeOrder = (products, paymentMethod, restaurantId) => async (
  dispatch
) => {
  const body = { products, paymentMethod };

  const token = localStorage.getItem("token");
  try {
    axios.post(`${baseUrl}/restaurants/${restaurantId}/order`, body, {
      headers: {
        auth: token,
      },
    });
    dispatch(replace(routes.home));
  } catch (error) {
    console.error(error);
  }
};

export const getActiveOrder = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`${baseUrl}/active-order`, {
      headers: {
        auth: token,
      },
    });
    dispatch(activeOrder(response.data.order));
  } catch (err) {
    console.error(err);
  }
};
