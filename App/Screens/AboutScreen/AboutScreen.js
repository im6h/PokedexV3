import React from "react";
import { View, Text, Image } from "react-native";
import style from "./AboutScreenStyles";
import TopIcon from "../../Components/TopIcon/TopIcon";
class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <TopIcon />
        <View style={style.content}>
          <View style={style.contentTitle}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>POKEDEX</Text>
          </View>
          <View style={style.contentBody}>
            <View style={style.contentBodyAbout}>
              <Text style={{ fontSize: 72, color: "white" }}>about</Text>
            </View>
            <View style={style.contentBodyInfo}>
              <Text style={{ color: "white" }}>
                Welcome to the Pokedex app. I am very pleased to present to you
                the third edition of the pokedex app using React-native
                platform.
              </Text>
              <Text>Api used to:</Text>
            </View>
            <View style={style.contentBodyFooter}>
              <Text style={{ color: "white" }}>Github</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default AboutScreen;
