const initialState = {
  restaurants: [],
  restaurantDetails: null,
};

const restaurants = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_RESTAURANTS":
      return { ...state, restaurants: action.payload.restaurants };

    case "SET_RESTAURANT_DETAILS":
      return { ...state, restaurantDetails: action.payload.detail };

    default:
      return state;
  }
};
export default restaurants;
