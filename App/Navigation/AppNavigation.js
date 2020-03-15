import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { Scene, Router } from "react-native-router-flux";
import AboutScreen from "../Screens/AboutScreen/AboutScreen";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import SplashScreen from "../Screens/SplashScreen/SplashScreen";
class AppNavigation extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene component={AboutScreen} key="about" navTransparent initial />
        </Scene>
      </Router>
    );
  }
}

export default AppNavigation;
