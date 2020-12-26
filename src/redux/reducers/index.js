import { combineReducers } from "redux";
import commonReducer from "./commonReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  appPosts: postReducer,
  appCommon: commonReducer,
});

export default rootReducer;
