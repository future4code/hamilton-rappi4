const profiles = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_INFO": {
      return {
        ...state,
        userInfo: action.payload.info,
      };
    }
    case "SET_LOADING": {
      return { ...state, isLoading: action.payload.loading };
    }
    case "SET_ORDERS_HISTORY": {
      return { ...state, orderHistory: action.payload.order}
    }
    default:
      return state;
  }
};

export default profiles;
