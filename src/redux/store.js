import { createStore } from "redux";
import { reducerroot } from "./reducer";

export const store = createStore(reducerroot,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)