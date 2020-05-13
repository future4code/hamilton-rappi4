import axios from 'axios'
import { routes } from '../containers/Router'
import { push } from 'connected-react-router'

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
        const response = await axios.get(
            `${baseURL}/restaurants`, 
            {
                headers: {
                    auth:token
                }

            })
            dispatch(setAllRestaurants(response.data.restaurants))
    }catch (error){
        console.error(error)

    }
}


export const getRestaurantsDetails =(restaurantId)=> async(dispatch)=>{

    const token = localStorage.getItem("token") 
    
    try {
        const response = await axios.get(
            `${baseURL}/restaurants/${restaurantId}`, 
            {
                headers: {
                    auth:token
                }
            })
            dispatch(setRestaurantDetails(response.data.restaurant.products))
    }catch (error){
        console.error(error)

    }
}
