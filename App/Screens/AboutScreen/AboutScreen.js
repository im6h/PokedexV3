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
                - Easily spin up a new React Native app with best practices
                built-in - No runtime! This is a developer tool only, not a
                library you have to depend on and figure out how to upgrade -
                Anever-expanding list of boilerplates and plugins to jump-start
                your app - An amazing community of other Ignite / React Native
                developers when you need help - Battle tested and used every day
                by the developers at Infinite Red and thousands of developers
                around the world - Works on macOS, Windows, and Linux because
                not all React Native developers are on one platform Saves an
                average of two weeks on your React Native development
              </Text>
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
