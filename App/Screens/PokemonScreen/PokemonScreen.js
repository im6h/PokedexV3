import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import style from "./PokemonScreenStyles";
import { inject, observer } from "mobx-react";
import TopIcon from "../../Components/TopIcon/TopIcon";
import colors from "../../Themes/Colors";
import { Actions } from "react-native-router-flux";
import { formatNumberPokemon } from "../../Utils/format";
const Item = ({ pokemon, index }) => {
  return (
    <TouchableOpacity
      style={style.item}
      onPress={() => {
        Actions.pokemon_detail({ pokemon: pokemon });
      }}
    >
      <Image
        style={{
          height: 70,
          width: 70,
          tintColor: "black",
          position: "absolute",
          bottom: 7.5,
          right: 9,
          tintColor: "#E5E5E5",
          transform: [{ rotate: "119deg" }]
        }}
        source={require("../../Images/Icons/pokeball.png")}
      />
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View style={style.item__display}>
          <Text style={style.item__text}>{formatNumberPokemon(index)}</Text>
          <Text style={style.item__text}>{pokemon.name.toUpperCase()}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{ height: 80, width: 80 }}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const renderSeparator = () => {
  return (
    <View
      style={{
        height: 2,
        width: "100%",
        backgroundColor: "#CED0CE"
      }}
    />
  );
};

@inject("pokemon")
@observer
class PokemonScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      loading: true,
      data: []
    };
  }
  async componentWillMount() {
    await this.props.pokemon.getListPokemon();
    this.setState({
      data: this.props.pokemon.listPokemon,
      offset: 0
    });
  }
  loadMoreData = async () => {
    this.setState({
      loading: true
    });
    this.state.offset += 10;
    await this.props.pokemon.getListPokemonNext(this.state.offset);
    this.setState({
      data: this.state.data.concat(this.props.pokemon.listPokemonNext),
      loading: false
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
        <View style={{ flex: 9 }}>
          <Text style={style.pokedexText}>Total pokemon: 964</Text>
          <View style={{ flex: 1 }}>
            <FlatList
              data={this.state.data}
              ListFooterComponent={this.renderFooter.bind(this)}
              numColumns={2}
              onEndReachedThreshold={0.4}
              onEndReached={this.loadMoreData.bind(this)}
              keyExtractor={({ item }, index) => index.toString()}
              renderItem={({ item, index }) => {
                return <Item pokemon={item} index={index + 1} />;
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default PokemonScreen;
