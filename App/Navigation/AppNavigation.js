import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { Scene, Router } from "react-native-router-flux";
import LauchScreen from "../Screens/LaunchScreen/LaunchScreen";
import AboutScreen from "../Screens/AboutScreen/AboutScreen";
import PokemonScreen from "../Screens/PokemonScreen/PokemonScreen";
import PokemonDetail from "../Screens/DetailScreen/Pokemon/Pokemon";
import TypeScreen from "../Screens/TypeScreen/TypeScreen";
class AppNavigation extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene component={LauchScreen} key="lauch" navTransparent initial />
          <Scene component={PokemonScreen} key="pokemon" navTransparent />
          <Scene
            component={PokemonDetail}
            key="pokemon_detail"
            navTransparent
          />
          <Scene component={AboutScreen} key="about" navTransparent />
          <Scene component={TypeScreen} key="typePokemon" navTransparent />
        </Scene>
      </Router>
    );
  }
}

export default AppNavigation;
