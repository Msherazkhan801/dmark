import { combineReducers } from "redux";
import { UserReducer } from "./userworklogReducer";

const rootReducers = combineReducers({
userworkdata:UserReducer,
});

export default rootReducers;
