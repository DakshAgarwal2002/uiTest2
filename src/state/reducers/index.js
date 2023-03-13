import { combineReducers } from "redux";
import showEvent from './showEvent'

const reducers=combineReducers({
    amount: showEvent
})


export default reducers;