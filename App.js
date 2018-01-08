import React from "react";
import { View, Text } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import firebase from "firebase";
import LoginForm from "./common/loginForm";
import RouterComponent from "./Routes/Routes";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    this.setState({ loading: false });
    const config = {
      apiKey: "AIzaSyBiH0_gNYp6F6Gc75OVhGMQWgD72OyJ2o0",
      authDomain: "manager-3470c.firebaseapp.com",
      databaseURL: "https://manager-3470c.firebaseio.com",
      projectId: "manager-3470c",
      storageBucket: "manager-3470c.appspot.com",
      messagingSenderId: "254877660305"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <RouterComponent />
      </Provider>
    );
  }
}
