import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import AppNavigation from "../Navigation/AppNavigation";
// Styles
import styles from "./RootContainerStyles";
import { Metrics } from "../Themes";
import { appInit } from "../Config/MobxPersist";
import SplashScreen from "../Screens/SplashScreen/SplashScreen";
class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000);
    appInit(); // run rehyrate after all screen loaded
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1 }}>
          <SplashScreen />
        </View>
      );
    } else {
      return (
        <View style={styles.applicationView}>
          <StatusBar
            backgroundColor={Metrics.statusBarColor}
            barStyle={Metrics.statusBarStyle}
          />
          <AppNavigation />
        </View>
      );
    }
  }
}

export default RootContainer;
