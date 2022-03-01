import { combineReducers } from "redux";
import { UserReducer } from "./userworklogReducer";
import { ManagerReducer } from "./ManagerReducer";
import { AdminReducer } from "./AdminReducer";


const rootReducers = combineReducers({
userworkdata:UserReducer,
managerdata:ManagerReducer,
admindata:AdminReducer,
});

export default rootReducers;
