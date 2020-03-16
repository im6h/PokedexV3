import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import style from "./PokemonScreenStyles";
import { inject, observer } from "mobx-react";
import TopIcon from "../../Components/TopIcon/TopIcon";
import colors from "../../Themes/Colors";
const Item = ({ pokemon }) => {
  return (
    <View
      style={{
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        width: 160,
        height: 105,
        backgroundColor: colors.backgroundType,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3
      }}
    >
      <TouchableOpacity
        style={{ flex: 1, flexDirection: "row" }}
        onPress={() => {}}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 10
          }}
        >
          <Text style={{ textAlign: "center", color: "black", fontSize: 12 }}>
            {pokemon.name}
          </Text>
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
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 12 }}
                >
                  {item}
                </Text>
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
      </TouchableOpacity>
    </View>
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
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
              marginLeft: 10
            }}
          >
            POKEDEX
          </Text>
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
