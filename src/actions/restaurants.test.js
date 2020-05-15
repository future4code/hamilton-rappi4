import axios from "axios"
import {setAllRestaurants, setRestaurantDetails, getRestaurants, getRestaurantsDetails} from "./restaurants"

describe("Restaurants Actions", () => {
    test ("Set All Restaurants", () => {
        const mockRestaurants = {
            "restaurants": [
              {
                "id": "1",
                "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
                "shipping": 6,
                "address": "Rua das Margaridas, 110 - Jardim das Flores",
                "name": "Habibs",
                "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
                "deliveryTime": 60,
                "category": "Árabe"
              }
            ]}
        
        const action = setAllRestaurants(mockRestaurants)

        expect(action.type).toBe("SET_ALL_RESTAURANTS")
        expect(action.payload.restaurants).toBe(mockRestaurants)
    })

    test ("Set Restaurants Details", () => {
        const mockRestaurantDetail = {"restaurant": {
            "products": [
                {
                    "id": "2wvQI3i8Zf2fMvkEq4Vo",
                    "category": "Refeição",
                    "price": 24.3,
                    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201808311212_sashi.png",
                    "name": "Sashimi Shiromi",
                    "description": "A melhor pedida é japonesa!"
                }
            ]}}

        const action = setRestaurantDetails(mockRestaurantDetail)

        expect(action.type).toBe("SET_RESTAURANT_DETAILS")
        expect(action.payload.detail).toBe(mockRestaurantDetail)
    })

    test("Get Restaurants", async () => {
        axios.get = jest.fn(async () => ({
            data: {
                "restaurants": [
                  {
                    "id": "1",
                    "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
                    "shipping": 6,
                    "address": "Rua das Margaridas, 110 - Jardim das Flores",
                    "name": "Habibs",
                    "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
                    "deliveryTime": 60,
                    "category": "Árabe"
                  }
                ]}
        }))

        const dispatch = jest.fn()

        await getRestaurants()(dispatch)

        expect(dispatch).toHaveBeenCalledWith({
            type: "SET_ALL_RESTAURANTS",
            payload: {
                "restaurants": [
                  {
                    "id": "1",
                    "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
                    "shipping": 6,
                    "address": "Rua das Margaridas, 110 - Jardim das Flores",
                    "name": "Habibs",
                    "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
                    "deliveryTime": 60,
                    "category": "Árabe"
                  }
                ]}
        })
    })

    test ("Get Restaurants Error", async () => {

        const mockError = new Error("Error message")
        console.error = jest.fn()

        axios.get = jest.fn(() => {
            throw mockError
        })

        const dispatch = jest.fn()

        await getRestaurants()(dispatch)
        expect(dispatch).not.toHaveBeenCalled()
        expect(console.error).toHaveBeenCalledWith(mockError)

    })

    test ("Get Restaurant Details", async () => {
        axios.get = jest.fn(async () => ({
            data: {"restaurant": {
                "products": [
                    {
                        "id": "2wvQI3i8Zf2fMvkEq4Vo",
                        "category": "Refeição",
                        "price": 24.3,
                        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201808311212_sashi.png",
                        "name": "Sashimi Shiromi",
                        "description": "A melhor pedida é japonesa!"
                    }
                ]}}
        }))

        const dispatch = jest.fn()

        await getRestaurantsDetails()(dispatch)

        expect(dispatch).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith({
            type: "SET_RESTAURANT_DETAILS",
            payload: {
                    "detail": [
                     {
                        "category": "Refeição",
                        "description": "A melhor pedida é japonesa!",
                        "id": "2wvQI3i8Zf2fMvkEq4Vo",
                        "name": "Sashimi Shiromi",
                        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201808311212_sashi.png",
                        "price": 24.3,
                      },
                    ],
                  }
        })
    })

    test ("Get Restaurants Details Error", async () => {

        const mockError = new Error("Error message")
        console.error = jest.fn()

        axios.get = jest.fn(() => {
            throw mockError
        })

        const dispatch = jest.fn()

        await getRestaurantsDetails()(dispatch)
        expect(dispatch).not.toHaveBeenCalled()
        expect(console.error).toHaveBeenCalledWith(mockError)

    })
})