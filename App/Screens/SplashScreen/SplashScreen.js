import React from "react";
import { View, Text, Image } from "react-native";
import style from "./SplashScreenStyles";
class SplashScreen extends React.Component {
  render() {
    return (
      <View style={style.splashScreen}>
        <View>
          <Image
            style={style.imageTop}
            source={require("../../Images/Pokemon.jpg")}
          />
        </View>
        <View>
          <Image
            style={style.imageBot}
            source={require("../../Images/splash.jpg")}
          />
        </View>
      </View>
    );
  }
}
export default SplashScreen;
