import axios from "axios";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/rappi4/restaurants";

export const addToCart = (quantity, product, restaurantId, shipping) => ({
  type: "ADD_TO_CART",
  payload: { quantity, product, restaurantId, shipping },
});

export const removeProduct = (productId) => ({
  type: "REMOVE_PRODUCT",
  payload: { productId },
});

export const placeOrder = (products, paymentMethod, restaurantId) => async () => {
  const body = { products, paymentMethod, restaurantId };
  console.log(body)
  const token = localStorage.getItem("token");
  try {
    axios.post(`${baseUrl}/${restaurantId}/order`, body, {
      headers: {
        auth: token,
      },
    });
  } catch (error){
      console.error(error)
  }
};
