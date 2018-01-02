import React from "react";
import { Scene, Router, Stack } from "react-native-router-flux";
import LoginForm from "../common/loginForm";

const RouterComponent = () => {
  return (
    <Router>
      <Stack>
        <Scene key="login" component={LoginForm} hideNavBar initial />
      </Stack>
    </Router>
  );
};
export default RouterComponent;
