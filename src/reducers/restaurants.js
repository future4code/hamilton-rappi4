const initialState = {
  restaurants: [],
  restaurantDetails: null,
};

const restaurants = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_RESTAURANTS":
      return { ...state, restaurants: action.payload.restaurants };

    case "SET_RESTAURANT_DETAILS":

            let sortedProducts = {}

            action.payload.detail.forEach(product => {

                if(!sortedProducts.hasOwnProperty(product.category)) {
                    sortedProducts[product.category] = []
                }

                sortedProducts[product.category].push(product)

            })
            sortedProducts = Object.entries(sortedProducts)

            return {...state, restaurantDetails: sortedProducts}
        
        default:
            return state

    }      
}

export default restaurants
