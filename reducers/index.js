import { combineReducers } from "redux";
import authReducer from "./authReducer";
import empFormReducer from "./empFormReducer";
import empReducer from "./empReducer";
export default combineReducers({
  auth: authReducer,
  empForm: empFormReducer,
  employee: empReducer
});
