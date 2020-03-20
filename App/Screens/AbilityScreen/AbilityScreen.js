import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import style from "./AbilityScreenStyles";
import { inject, observer } from "mobx-react";
import TopIcon from "../../Components/TopIcon/TopIcon";
import { Actions } from "react-native-router-flux";
import colors from "../../Themes/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SearchBar from "../../Components/SearchBar/SearchBar";
const Item = ({ item, index }) => {
  return (
    <TouchableOpacity
      style={{
        margin: 5,
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: 10,
        backgroundColor: colors.water,
        width: 100,
        height: 60,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Icon style={{}} name="pokeball" size={40} color="#FFF" />
      <View>
        <Text style={style.name}>{item.name.toUpperCase()}</Text>
        <Text>{index}</Text>
      </View>
    </TouchableOpacity>
  );
};

@inject("pokemon")
@observer
class AbilityScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      loading: true,
      data: []
    };
  }
  async componentWillMount() {
    await this.props.pokemon.getListAbilityPokemon();
    this.setState({
      data: this.props.pokemon.listAbilityPokemon,
      offset: 0
    });
  }
  loadMoreData = async () => {
    this.setState({
      loading: true
    });
    this.state.offset += 10;
    this.props.pokemon.getListAbilityPokemonNext(this.state.offset).then(() => {
      this.setState({
        data: this.state.data.concat(this.props.pokemon.listAbilityPokemonNext),
        loading: false
      });
    });
  };
  renderFooter = () => {
    if (this.state.loading) return null;
    return <ActivityIndicator style={{ color: "#000" }} />;
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <TopIcon />
        </View>
        <SearchBar />
        <View style={{ flex: 9 }}>
          <Text style={style.pokedexText}>Total pokemon: 200</Text>
          <View style={{ flex: 1 }}>
            <FlatList
              data={this.state.data}
              ListFooterComponent={this.renderFooter}
              numColumns={2}
              onEndReachedThreshold={0.4}
              onEndReached={this.loadMoreData}
              keyExtractor={({ item }, index) => index.toString()}
              renderItem={({ item, index }) => {
                return <Item item={item} index={index + 1} />;
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default AbilityScreen;
