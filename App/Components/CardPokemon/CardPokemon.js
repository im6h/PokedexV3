import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import style from "./CardPokemonStyles";
import apiPokemon from "../../Services/ApiPokemon";
import colors from "../../Themes/Colors";
import { FlatList } from "react-native-gesture-handler";
import { formatNumberPokemon } from "../../Utils/format";
import { Actions } from "react-native-router-flux";
class CardPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      types: []
    };
  }
  async componentDidMount() {
    const response = await apiPokemon.getPokemon(`${this.props.pokemon.name}`);
    this.setState({
      pokemon: response.data,
      types: response.data.types
    });
  }
  render() {
    return (
      <TouchableOpacity
        style={style.item}
        onPress={() => {
          Actions.pokemon_detail({ pokemon: this.state.pokemon });
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
            <Text style={style.item__text}>
              {formatNumberPokemon(this.state.pokemon.id)}
            </Text>
            <FlatList
              data={this.state.types}
              listKey={({ item }, index) => index.toString()}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      borderWidth: 0.2,
                      borderColor: "transparent",
                      backgroundColor: colors[item.type.name],
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 7,
                      padding: 3,
                      margin: 4
                    }}
                  >
                    <Text style={{ color: "white" }}>{item.type.name}</Text>
                  </View>
                );
              }}
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
              style={{ height: 60, width: 80 }}
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.pokemon.id}.png`
              }}
            />
            <Text style={style.item__text}>
              {String(this.state.pokemon.name).toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default CardPokemon;
