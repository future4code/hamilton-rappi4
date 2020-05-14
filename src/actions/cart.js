export const addToCart = (quantity, product) => ({
    type: "ADD_TO_CART",
    payload: {quantity, product}
})