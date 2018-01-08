import {
  EMPLOYEE_UPDATE,
  FORM_VAL_ERROR,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_UPDATED,
  SET_INITIAL
} from "./types";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { exceptionGuard } from "@firebase/database/dist/esm/src/core/util/util";

export const empUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const empCreate = ({ name, phone, shift }) => {
  console.log(name, phone, shift);
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees/`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.empList();
      });
  };
};

export const throwError = () => {
  return {
    type: FORM_VAL_ERROR,
    payload: "Name or phone no missing."
  };
};

export const fetchEmp = () => {
  const { currentUser } = firebase.auth();
  return dispatch =>
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees/`)
      .on("value", snapshot => {
        dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
      });
};

export const updateEmp = ({ name, phone, shift, uid }) => {
  console.log(uid);
  const { currentUser } = firebase.auth();
  return dispatch =>
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        console.log("employee update");
        dispatch({ type: SET_INITIAL });
        Actions.empList();
      });
};

export const deleteEmp = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => Actions.main({ type: "reset" }));
  };
};
