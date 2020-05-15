export const addToCart = (quantity, product) => ({
    type: "ADD_TO_CART",
    payload: {quantity, product}
})

export const removeProduct = (productId) => ({
    type: "REMOVE_PRODUCT",
    payload: {productId}
})