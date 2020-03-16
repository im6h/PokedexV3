import React from "react";
import { View, Text } from "react-native";
import style from "./CardTypeStyles";
class CardType extends React.Component {
  render() {
    return (
      <View style={style.cardType}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.2,
            borderColor: "transparent",
            borderRadius: 7,
            backgroundColor: `${this.props.obj.color}`
          }}
        >
          <Text>{this.props.obj.msg}</Text>
        </View>
      </View>
    );
  }
}
export default CardType;
