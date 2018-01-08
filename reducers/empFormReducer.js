import {
  EMPLOYEE_UPDATE,
  FORM_VAL_ERROR,
  EMPLOYEE_CREATE,
  SET_INITIAL
} from "../actions/types";
INITIAL_STATE = { name: "", phone: "", shift: "Monday", err: "", uid: "" };
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value, err: "" };
    case FORM_VAL_ERROR:
      return { ...state, err: action.payload };
    case EMPLOYEE_CREATE:
      return { ...state, name: "", phone: "", shift: "Monday" };
    case SET_INITIAL:
      return INITIAL_STATE;

    default:
      return state;
  }
};
