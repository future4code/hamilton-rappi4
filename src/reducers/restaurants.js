const initialState = {
  restaurants: [],
  restaurantDetails: null,
  isLoading: false,
};

const restaurants = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_RESTAURANTS":
      return { ...state, restaurants: action.payload.restaurants };

    case "SET_RESTAURANT_DETAILS":
      let sortedProducts = {};

      action.payload.detail.forEach((product) => {
        if (!sortedProducts.hasOwnProperty(product.category)) {
          sortedProducts[product.category] = [];
        }

        sortedProducts[product.category].push(product);
      });
      sortedProducts = Object.entries(sortedProducts);

      return { ...state, restaurantDetails: sortedProducts };

    case "SET_LOADING": {
      return { ...state, isLoading: action.payload.loading };
    }

    default:
      return state;
  }
};

export default restaurants;
