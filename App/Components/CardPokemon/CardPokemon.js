import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import style from "./CardPokemonStyles";
import { Actions } from "react-native-router-flux";
import CardType from "../CardType/CardType";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
@inject("pokemon")
@observer
class CardPokemon extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    await this.props.pokemon.getPokemon(this.props.item.name);
  }
  render() {
    return (
      <TouchableOpacity
        style={style.item}
        // onPress={() => {
        //   Actions.pokemon_detail({ pokemon: pokemon });
        // }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={style.item__display}>
            <Text style={style.item__text}>
              {this.props.pokemon.pokemon.name}
            </Text>
            {/* <FlatList
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
            /> */}
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
              source={{ uri: this.props.pokemon.pokemon.sprite }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default CardPokemon;
