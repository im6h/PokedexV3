import React from "react";
import { View, Text, Image } from "react-native";
import style from "./CardGenerationStyles";
class CardGeneration extends React.Component {
  render() {
    return (
      <View style={style.cardGeneration}>
        <Text>Generation {this.props.item.item}</Text>
        <Image
          style={style.imageThumbnail}
          source={require("../../Images/pikachu.png")}
        />
      </View>
    );
  }
}
export default CardGeneration;
