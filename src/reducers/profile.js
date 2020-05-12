const profiles = (state = [], action) => {
    switch(action.type){
        case "SET_USER_INFO": {
            return {
                ...state, 
                userInfo: action.payload.info
            }
        }

        default:
            return state
    }
}

export default profiles