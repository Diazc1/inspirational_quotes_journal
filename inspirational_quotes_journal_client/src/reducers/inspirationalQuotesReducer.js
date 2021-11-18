export const inspirationalQuotesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_INSPIRATIONAL_QUOTES':
            return action.payload
        case 'ADD_INSPIRATIONAL_QUOTE':
            return [...state, action.payload]
        default:
            return state
    }
}

