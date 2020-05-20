import axios from 'axios'
import {setLoading} from "../actions/global"
import { replace } from "connected-react-router";
import { routes } from "../containers/Router";

const baseURL = ("https://us-central1-missao-newton.cloudfunctions.net/rappi4")

export const setAllRestaurants =(restaurants)=>{
    return {
        type:"SET_ALL_RESTAURANTS",
        payload:{
            restaurants
        }
    }
} 

export const setRestaurantDetails =(detail)=> {
    return {
        type:"SET_RESTAURANT_DETAILS",
        payload :{
            detail
        }
    }
}

export const getRestaurants=()=> async (dispatch)=> {

    const token = localStorage.getItem("token")

    try {
        dispatch(setLoading(true))
        const response = await axios.get(
            `${baseURL}/restaurants`, 
            {
                headers: {
                    auth:token
                }

            })
            dispatch(setAllRestaurants(response.data.restaurants))
            dispatch(setLoading(false))
    }catch (error){
        console.error(error)
        localStorage.removeItem("token") 
        dispatch(setLoading(false))
        dispatch(replace(routes.login))
    }
}


export const getRestaurantsDetails =(restaurantId)=> async(dispatch)=>{

    const token = localStorage.getItem("token") 
    
    try {
        dispatch(setLoading(true))
        const response = await axios.get(
            `${baseURL}/restaurants/${restaurantId}`, 
            {
                headers: {
                    auth:token
                }
            })

            dispatch(setRestaurantDetails(response.data.restaurant.products))
            dispatch(setLoading(false))
    }catch (error){
        console.error(error)
        localStorage.removeItem("token") 
        dispatch(setLoading(false))
        dispatch(replace(routes.login))
    }
}
