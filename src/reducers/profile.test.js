import profiles from "./profile"
import { setUserInfo, setOrdersHistory } from "../actions/profile"
import { setLoading } from "../actions/global"

describe("Cases do reducer", () => {
    test("case 'SET_USER_INFO'", () => {
        const mockInfo = [{ name: "Luan", email: "luan@gmail.com", cpf: "111.111.111.11"}]
        const mockAction = setUserInfo(mockInfo)
        const mockState = { userInfo: []}

        const newState = profiles(mockState, mockAction)

        expect(newState.userInfo).toHaveLength(1)
        expect(newState.userInfo[0].name).toBe(mockInfo[0].name)
        expect(newState.userInfo[0].email).toBe(mockInfo[0].email)
        expect(newState.userInfo[0].cpf).toBe(mockInfo[0].cpf)
    })

    test("case 'SET_ORDERS_HISTORY'", () => {
        const mockOrderHistory = [{ restaurant: "Habibs", totalPrice: 66.60 }]
        const mockAction = setOrdersHistory(mockOrderHistory)
        const mockState = { orderHistory: []}

        const newState = profiles(mockState, mockAction)

        expect(newState.orderHistory).toHaveLength(1)
        expect(newState.orderHistory[0].restaurant).toBe(mockOrderHistory[0].restaurant)
        expect(newState.orderHistory[0].totalPrice).toBe(mockOrderHistory[0].totalPrice)
    })

    test("case 'SET_LOADING'", () => {
        const mockLoading = true
        const mockAction = setLoading(mockLoading)
        const mockState = { isLoading: false}

        const newState = profiles(mockState, mockAction)

        expect(newState.isLoading).toBeTruthy()
    })
})