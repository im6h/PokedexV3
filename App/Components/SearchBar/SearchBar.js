import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import style from "./SearchBarStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
class SearchBar extends React.Component {
  render() {
    return (
      <View style={style.searchBar}>
        <View style={style.wrapper}>
          <TextInput style={style.inputSearch} placeholder="Search" />
          <Icon
            style={style.iconSearch}
            name="search"
            size={30}
            color="#DDDDDD"
          />
        </View>
      </View>
    );
  }
}
export default SearchBar;
