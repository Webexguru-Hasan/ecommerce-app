import { createStore } from "redux";
import rootReducer from "./combind";


const store = createStore(rootReducer)

export default store