import React from "react";
import { View, Image } from "react-native";
import style from "./TopIconStyles";
class TopIcon extends React.Component {
  render() {
    return (
      <View style={style.imageIcon}>
        <Image
          style={style.image}
          source={require("../../Images/Icons/pokeball.png")}
        />
      </View>
    );
  }
}
export default TopIcon;
