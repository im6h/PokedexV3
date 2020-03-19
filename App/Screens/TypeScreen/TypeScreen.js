import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import colors from "../../Themes/Colors";
import TopIcon from "../../Components/TopIcon/TopIcon";
import { inject, observer } from "mobx-react";
import style from "./TypeScreenStyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SearchBar from "../../Components/SearchBar/SearchBar";
const Item = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        margin: 5,
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: 10,
        backgroundColor: colors[`${item.name}`],
        width: 100,
        height: 60,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Icon style={{}} name="pokeball" size={40} color="#FFF" />
      <Text style={style.name}>{item.name.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};
@inject("pokemon")
@observer
class TypeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    await this.props.pokemon.getListTypePokemon();
  }
  render() {
    return (
      <View style={style.typeScreen}>
        <View style={{ flex: 1.5 }}>
          <TopIcon />
        </View>
        <SearchBar />
        <View style={{ flex: 8 }}>
          <Text style={style.totalType}>Total Types: 20</Text>
          <FlatList
            data={this.props.pokemon.listTypePokemon}
            numColumns={2}
            listKey={({ item }, index) => index.toString()}
            renderItem={({ item }) => {
              return <Item item={item} />;
            }}
          />
        </View>
      </View>
    );
  }
}

export default TypeScreen;
