import { combineReducers } from "redux";
import RegionReduce from "./RegionReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
    regionState: RegionReduce,
    userState: UserReducer
})

export default rootReducer