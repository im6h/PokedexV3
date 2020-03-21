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
import { Actions } from "react-native-router-flux";
import { formatNumberPokemon } from "../../Utils/format";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CardPokemon from "../../Components/CardPokemon/CardPokemon";
import { construct } from "ramda";

@inject("pokemon")
@observer
class PokemonScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      loading: false,
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
        <SearchBar />
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
                return <CardPokemon pokemon={item} />;
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default PokemonScreen;
