import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import style from "./CardGenerationStyles";
class CardGeneration extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={style.cardGeneration}
        onPress={() => {
          alert(`Generation ${this.props.item.item}`);
        }}
      >
        <View>
          <Text>Generation {this.props.item.item}</Text>
          <Image
            style={style.imageThumbnail}
            source={require("../../Images/pikachu.png")}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
export default CardGeneration;
