import React from "react";
import { View, Text } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import firebase from "firebase";
import LoginForm from "./common/loginForm";
import Expo from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
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
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={createStore(() => [])}>
        <LoginForm />
      </Provider>
    );
  }
}
