import React from "react";
import { Image, View, Text, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Color from "../../Themes/Colors";
import style from "./LaunchScreenStyles";
import { Actions } from "react-native-router-flux";

class LauchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={style.lauchScreen}>
        <View
          style={{
            flex: 5,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <Image
            style={style.image}
            source={require("../../Images/pikachu.png")}
          />
          <Text>What do you want?</Text>
        </View>
        <View style={{ flex: 5 }}>
          <View style={style.action}>
            <TouchableOpacity
              style={{
                backgroundColor: Color.grassColor,
                width: 120,
                height: 120,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "transparent",
                margin: 5,
                borderRadius: 15
              }}
              onPress={() => {
                Actions.pokemon({});
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon name="pokeball" size={30} color="#FFF" />
                <Text style={{ color: "white" }}>Pokemon</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Color.poisonColor,
                width: 120,
                height: 120,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "transparent",
                margin: 5,
                borderRadius: 15
              }}
              onPress={() => {
                Actions.type({});
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon name="notification-clear-all" size={30} color="#FFF" />
                <Text style={{ color: "white" }}>Type</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Color.fireColor,
                width: 120,
                height: 120,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "transparent",
                margin: 5,
                borderRadius: 15
              }}
              onPress={() => {
                Actions.ability({});
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon name="webhook" size={30} color="#FFF" />
                <Text style={{ color: "white" }}>Ability</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Color.waterColor,
                width: 120,
                height: 120,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "transparent",
                margin: 5,
                borderRadius: 15
              }}
              onPress={() => {
                Actions.about({});
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon name="information-outline" size={30} color="#FFF" />
                <Text style={{ color: "white" }}>About</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default LauchScreen;
