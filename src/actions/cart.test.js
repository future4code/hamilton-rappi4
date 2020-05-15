import {addToCart, removeProduct} from "./cart"

describe("Actions", () => {
    test("addToCart", () => {
      // Preparação
      const mockQuantity = 9;
      const mockProduct = {id: "124", price: 3.50};
  
      // Execução
      const action = addToCart(mockQuantity, mockProduct);
  
      // Verificação
      expect(action.type).toBe("ADD_TO_CART");
      expect(action.payload.quantity).toBe(mockQuantity);
    });

    test("removeProduct", () => {
      // Preparação
      const mockId = 9;
  
      // Execução
      const action = removeProduct(mockId);
  
      // Verificação
      expect(action.type).toBe("REMOVE_PRODUCT");
      expect(action.payload.productId).toBe(mockId);
    });
})
