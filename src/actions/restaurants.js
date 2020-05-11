import axios from 'axios'
import { routes } from '../containers/Router'

const baseURL = ("https://us-central1-missao-newton.cloudfunctions.net/rappi4")

export const setAllRestaurants =(restaurants)=>{
    return {
        type:"SET_ALL_RESTAURANTS",
        payload:{
            restaurants
        }
    }

} 

// ASSINCRONAS 

export const getRestaurants=()=> async (dispatch)=> {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InpKdUJlVnVEbDBZNExpdmhBRVp3IiwibmFtZSI6IkNhenV6YSIsImVtYWlsIjoiY2F6dXphQG1haWwuY29tIiwiY3BmIjoiMTI0LjQ1Ni43ODktMTAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNTg5MjA5Mzc0fQ.nKjwk_E8LrBYwLHd2t30gbxsuOghDD0RRcuSE8kt7FU" 
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

