
const initialState = {
    restaurants: []
}

const restaurants = (state =  initialState, action) =>{
    switch(action.type) {
        
        case "SET_ALL_RESTAURANTS":
            return {...state, restaurants:action.payload.restaurants}
        
        default:
            return state
    }   
        
}
export default restaurants