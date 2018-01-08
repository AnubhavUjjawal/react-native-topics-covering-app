import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_START
  //  LOGIN_END
} from "./types";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";
export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: LOGIN_USER, payload: { user: user, error: "" } });
        Actions.main({ type: "reset" });
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            dispatch({ type: LOGIN_USER, payload: { user: user, error: "" } });
            Actions.main({ type: "reset" });
          })
          .catch(() => {
            console.log(LOGIN_USER_FAIL);
            dispatch({ type: LOGIN_USER_FAIL });
          });
      });
    //dispatch({ type: LOGIN_END });
  };
};
