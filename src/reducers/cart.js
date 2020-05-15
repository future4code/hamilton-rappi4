const inicialState = {
    cart: []
}

const cart = (state = inicialState, action) => {
    switch (action.type) {
    case "ADD_TO_CART": 
        return {cart: [...state.cart, action.payload]} 

    case "REMOVE_PRODUCT":
        return {cart: state.cart.filter(product => 
            product.product.id !== action.payload.productId 
        )}

    default: 
        return state
    }
}

export default cart