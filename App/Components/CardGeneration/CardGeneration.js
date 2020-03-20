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
            source={{
              uri:
                "https://www.thefactsite.com/wp-content/uploads/2012/09/4th-generation-pokemon-starters.jpg"
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
export default CardGeneration;
