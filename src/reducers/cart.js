const inicialState = {
  cart: [],
  restaurantId: "",
  shipping: 0,
};

const cart = (state = inicialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          { quantity: action.payload.quantity, product: action.payload.product },
        ],
        restaurantId: action.payload.restaurantId,
        shipping: action.payload.shipping
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.product.id !== action.payload.productId
        ),
      };

    default:
      return state;
  }
};

export default cart;
