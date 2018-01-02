const INITIAL = { email: "", password: "", error: "", loading: false };
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_START,
  LOGIN_END
} from "../actions/types";
export default (state = INITIAL, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      //console.log({ ...state, email: action.payload });
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      //console.log({ ...state, password: action.payload });
      return { ...state, password: action.payload };
    case LOGIN_USER:
      console.log("login_user_success");
      //console.log({ ...state, ...INITIAL, user: action.payload });
      return { ...state, user: action.payload.user, error: "", loading: false };
    case LOGIN_START:
      console.log("starting login process", {
        ...state,
        loading: true,
        error: ""
      });
      return { ...state, loading: true, error: "" };
    // case LOGIN_END:
    //   //console.log("ending login process", {
    //   //  ...state,
    //   //  loading: false,
    //   //  error: ""
    //   //});
    //   return { ...state, loading: false };
    case LOGIN_USER_FAIL:
      console.log("login_user_fail");
      return {
        ...state,
        error: "Authentication Failed!",
        password: "",
        loading: false
      };
    default:
      return state;
  }
};
