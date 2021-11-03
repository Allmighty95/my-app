import { combineReducers } from "redux";
import alertReducers from "./alertReducers";

export default combineReducers({
    alerts: alertReducers
}); 

