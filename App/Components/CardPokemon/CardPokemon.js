import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import style from "./CardPokemonStyles";
import { Actions } from "react-native-router-flux";
import CardType from "../CardType/CardType";
class CardPokemon extends React.Component {
  render() {
    return (
      <View style={style.cardPokemon}>
        <View>
          <Text>{this.props.pokemon.name}</Text>
          <View>
            {/* <FlatList
              data={this.props.pokemon.type}
              keyExtractor={({ item }, index) => index.toString()}
              renderItem={({ item }) => {
                return <CardType obj={item} />;
              }}
            /> */}
          </View>
        </View>
        <View>
          <Image source={{ uri: `${this.props.pokemon.img}` }} />
        </View>
      </View>
    );
  }
}
export default CardPokemon;
