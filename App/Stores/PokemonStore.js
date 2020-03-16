import { observable, action, toJS } from "mobx";
import apiPokemon from "../Services/ApiPokemon";

class PokemonStore {
  @observable listPokemon = [];
  @action async getListPokemon() {
    try {
      const respone = await apiPokemon.getListPokemons();
      if (respone.status === 200 && respone.data) {
        this.listPokemon = respone.data.pokemon;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
const pokemon = new PokemonStore();
export default pokemon;
