export const inspirationalQuotesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_GRADS':
            return action.payload
        default:
            return state
    }
}

