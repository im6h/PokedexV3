import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import style from "./PokemonScreenStyles";
import { inject, observer } from "mobx-react";
import TopIcon from "../../Components/TopIcon/TopIcon";
import colors from "../../Themes/Colors";
import { Actions } from "react-native-router-flux";
const Item = ({ pokemon }) => {
  return (
    <TouchableOpacity
      style={style.item}
      onPress={() => {
        Actions.pokemon_detail({ pokemon: pokemon });
      }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={style.item__display}>
          <Text style={style.item__text}>{pokemon.name}</Text>
          <FlatList
            data={pokemon.type}
            listKey={({ item }, i) => i.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  borderWidth: 0.2,
                  borderColor: "transparent",
                  backgroundColor: colors[item],
                  borderRadius: 11,
                  margin: 2,
                  padding: 5
                }}
              >
                <Text style={style.item__color}>{item}</Text>
              </View>
            )}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{ height: 60, width: 60 }}
            source={{ uri: pokemon.img }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
@inject("pokemon")
@observer
class PokemonScreen extends React.Component {
  async componentDidMount() {
    await this.props.pokemon.getListPokemon();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <TopIcon />
        </View>
        <View style={{ flex: 9 }}>
          <Text style={style.pokedexText}>POKEDEX</Text>
          <FlatList
            style={{ flex: 1 }}
            data={this.props.pokemon.listPokemon}
            numColumns={2}
            keyExtractor={({ item }, index) => index.toString()}
            renderItem={({ item }) => {
              return <Item pokemon={item} />;
            }}
          />
        </View>
      </View>
    );
  }
}
export default PokemonScreen;
