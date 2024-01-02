import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import {thunk} from "redux-thunk"
// const myMiddleware=(store)=>(dispatch)=>(action)=>{
//     if(typeof action === "function"){
//         return action(dispatch)
//     }
    
//     return dispatch(action)
// }

export const store = legacy_createStore(reducer,applyMiddleware(thunk))