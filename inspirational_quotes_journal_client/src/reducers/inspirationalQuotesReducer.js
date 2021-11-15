export const inspirationalQuotesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_INSPIRATIONAL_QUOTES':
            return action.payload
        default:
            return state
    }
}

