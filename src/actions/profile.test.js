import {
  setUserInfo,
  setOrdersHistory,
  getUserInfo,
  getOrdersHistory,
} from "./profile";
import axios from "axios";

describe("Actions", () => {
  test("setUserInfo", () => {
    // Preparação
    const mockUserInfo = [
      { name: "Luan", cpf: "123.456.768.32", hasAddress: true },
    ];

    // Execução
    const action = setUserInfo(mockUserInfo);

    // Verificação
    expect(action.type).toBe("SET_USER_INFO");
    expect(action.payload.info).toBe(mockUserInfo);
  });

  test("setOrdersHistory", async () => {
    // Preparação
    const mockUserHistory = [{ restaurant: "Habibs", totalPrice: 59 }];

    // Execução
    const action = setOrdersHistory(mockUserHistory);

    // Verificação
    expect(action.type).toBe("SET_ORDERS_HISTORY");
    expect(action.payload.order).toBe(mockUserHistory);
  });

  test("getUserInfo", async () => {
    const mockToken = "token";
    const mockInfo = [{ name: "Luan C.", email: "luan@gmail.com" }];

    axios.get = jest.fn(async () => {
      return { data: { user: mockInfo } };
    });
    const dispatch = jest.fn();

    await getUserInfo(mockToken)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: "SET_USER_INFO",
      payload: { info: mockInfo },
    });
  });

  test("getOrderHistory", async () => {
    const mockOrders = [{ restaurant: "Habibs", totalPrice: 66 }];

    axios.get = jest.fn(async () => {
      return { data: { orders: mockOrders } };
    });
    const dispatch = jest.fn();

    await getOrdersHistory()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: "SET_ORDERS_HISTORY",
      payload: { order: mockOrders },
    });
  });

//   test("updateInfo", async () => {
//     const name = "Luan C.";
//     const email = "luan@gmail.com";
//     const cpf = "032.234.444.99";

//     const mockBody = { name, email, cpf };

//     axios.put = jest.fn()
//   });
});
