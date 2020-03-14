import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { Scene, Router } from "react-native-router-flux";
import AboutScreen from "../Screens/AboutScreen/AboutScreen";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
const getSceneStyle = () => ({});
class AppNavigation extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene component={LoginScreen} key="login" title="Login" initial />
          <Scene component={AboutScreen} key="about" navTransparent />
        </Scene>
      </Router>
    );
  }
}

export default AppNavigation;
