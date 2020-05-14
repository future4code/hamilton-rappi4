const inicialState = {
    cart: []
}

const cart = (state = inicialState, action) => {
    switch (action.type) {
    case "ADD_TO_CART": 
    console.log(action.payload)
     return {cart: [...state.cart, action.payload]} 

    default: 
        return state
    }
}

export default cart