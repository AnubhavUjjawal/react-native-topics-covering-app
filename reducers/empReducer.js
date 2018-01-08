const INITIAL_STATE = { employees: {} };
import { EMPLOYEE_FETCH_SUCCESS } from "../actions/types";
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_SUCCESS:
      console.log(action.payload);
      return { ...state, employees: action.payload };
    default:
      return state;
  }
};
