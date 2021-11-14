import { combineReducers } from "redux";
import { inspirationalQuotesReducer } from "./inspirationalQuotesReducer";


export const rootReducer = combineReducers({
    inspirational_quotes: inspirationalQuotesReducer
})

