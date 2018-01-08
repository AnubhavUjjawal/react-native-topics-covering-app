import React from "react";
import { Scene, Router, Stack } from "react-native-router-flux";
import LoginForm from "../common/loginForm";
import EmpList from "../common/EmpList";
import CreateEmp from "../common/CreateEmp";
import UpdateEmp from "../common/EditEmp";

const RouterComponent = () => {
  return (
    <Router>
      <Stack>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} hideNavBar initial />
        </Scene>
        <Scene key="main">
          <Scene key="empList" component={EmpList} initial hideNavBar />
          <Scene key="createEmp" component={CreateEmp} hideNavBar />
          <Scene key="updateEmp" component={UpdateEmp} hideNavBar />
        </Scene>
      </Stack>
    </Router>
  );
};
export default RouterComponent;
