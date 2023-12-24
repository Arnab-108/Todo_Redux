import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
const initState={
    todos:[],
    isLoading:false,
    isError:false
}

export const store = legacy_createStore(reducer,initState)