import React from "react";
import { Image, View, Text, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Color from "../../Themes/Colors";
import style from "./LaunchScreenStyles";
import { Actions } from "react-native-router-flux";
import CardGeneration from "../../Components/CardGeneration/CardGeneration";
class LauchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          item: "I"
        },
        {
          item: "II"
        },
        {
          item: "III"
        },
        {
          item: "IV"
        },
        {
          item: "V"
        },
        {
          item: "VI"
        },
        {
          item: "VII"
        },
        {
          item: "VIII"
        }
      ]
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#DDDDDD" }}>
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
          </View>
          <View style={{ flex: 3 }}>
            <View style={style.action}>
              <TouchableOpacity
                style={{
                  backgroundColor: Color.Grass,
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "transparent",
                  borderTopStartRadius: 50,
                  borderBottomStartRadius: 50
                }}
                onPress={() => {
                  Actions.pokemon({});
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    style={{ flex: 4, marginLeft: 20 }}
                    name="pokeball"
                    size={30}
                    color="#FFF"
                  />
                  <Text style={{ flex: 6, color: "white" }}>Pokemon</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: Color.Poison,
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "transparent",
                  borderTopStartRadius: 50,
                  borderBottomStartRadius: 50
                }}
                onPress={() => {
                  Actions.type({});
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    style={{ flex: 4, marginLeft: 20 }}
                    name="notification-clear-all"
                    size={30}
                    color="#FFF"
                  />
                  <Text style={{ flex: 6, color: "white" }}>Type</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: Color.Fire,
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "transparent",
                  borderTopStartRadius: 50,
                  borderBottomStartRadius: 50
                }}
                onPress={() => {
                  Actions.ability({});
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    style={{ flex: 4, marginLeft: 20 }}
                    name="webhook"
                    size={30}
                    color="#FFF"
                  />
                  <Text style={{ flex: 6, color: "white" }}>Ability</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: Color.Water,
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "transparent",
                  borderTopStartRadius: 50,
                  borderBottomStartRadius: 50
                }}
                onPress={() => {
                  Actions.about({});
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    style={{ flex: 4, marginLeft: 20 }}
                    name="information-outline"
                    size={30}
                    color="#FFF"
                  />
                  <Text style={{ flex: 6, color: "white" }}>About</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={style.info}>
          <FlatList
            data={this.state.data}
            numColumns={2}
            listKey={({ item, index }) => index.toString()}
            renderItem={({ item }) => {
              return <CardGeneration item={item} />;
            }}
          />
        </View>
      </View>
    );
  }
}
export default LauchScreen;
