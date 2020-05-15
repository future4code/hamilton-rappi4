import cart from "./cart";
import { addToCart, removeProduct } from "../actions/cart";

describe("Cases do reducer", () => {
  test("case 'ADD_TO_CART'", () => {
    const mockQuantity = 9;
    const mockProduct = { id: "124", price: 3.5 };
    const mockAction = addToCart(mockQuantity, mockProduct);
    const mockState = { cart: [] };

    const newState = cart(mockState, mockAction);

    expect(newState.cart).toHaveLength(1);
    expect(newState.cart[0].quantity).toBe(mockQuantity);
    expect(newState.cart[0].product).toBe(mockProduct);
  });
});
