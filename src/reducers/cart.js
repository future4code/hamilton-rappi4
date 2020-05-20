const inicialState = {
  cart: [],
  restaurantId: "",
  shipping: 0,
  order: null
};

const cart = (state = inicialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (action.payload.restaurantId !== state.restaurantId) {
        return {
          ...state,
          cart: [
            {
              quantity: action.payload.quantity,
              product: action.payload.product,
            },
          ],
          restaurantId: action.payload.restaurantId,
          shipping: action.payload.shipping,
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            quantity: action.payload.quantity,
            product: action.payload.product,
          },
        ],
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.product.id !== action.payload.productId
        ),
        shipping: state.cart.length > 1 ? state.shipping : 0
      };
    
    case "ACTIVE_ORDER":
      return {
        ...state,
        order: action.payload.order
      }

    default:
      return state;
  }
};

export default cart;
