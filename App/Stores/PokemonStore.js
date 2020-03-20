import { observable, action, toJS } from "mobx";
import apiPokemon from "../Services/ApiPokemon";

class PokemonStore {
  @observable listPokemon = [];
  @observable listPoKemonNext = [];
  @observable listTypePokemon = [];
  @observable listAbilityPokemon = [];
  @observable listAbilityPokemonNext = [];
  @observable pokemon = {};
  @action async getListPokemon() {
    try {
      const respone = await apiPokemon.getListPokemons();
      if (respone.status === 200 && respone.data) {
        this.listPokemon = respone.data.results;
      }
    } catch (error) {
      console.log(error);
    }
  }
  @action async getListPokemonNext(offset) {
    try {
      const respone = await apiPokemon.getListPokemonNext(offset);
      if (respone.status === 200 && respone.data) {
        this.listPokemonNext = respone.data.results;
      }
    } catch (error) {
      console.log(error);
    }
  }
  @action async getPokemon(slug) {
    try {
      const respone = await apiPokemon.getPokemon(slug);
      if (respone.status === 200 && respone.data) {
        this.pokemon = respone.data[0];
      }
    } catch (error) {
      console.log(error);
    }
  }
  @action async getListTypePokemon() {
    try {
      const respone = await apiPokemon.getListTypePokemon();
      if (respone.status === 200 && respone.data) {
        this.listTypePokemon = respone.data.results;
      }
    } catch (error) {
      console.log(error);
    }
  }
  @action async getListAbilityPokemon() {
    try {
      const respone = await apiPokemon.getListAbilityPokemon();
      if (respone.status === 200 && respone.data) {
        this.listAbilityPokemon = respone.data.results;
      }
    } catch (error) {
      console.log(error);
    }
  }
  @action async getListAbilityPokemonNext(offset) {
    try {
      const respone = await apiPokemon.getListAbilityPokemonNext(offset);
      if (respone.status === 200 && respone.data) {
        this.listAbilityPokemonNext = respone.data.results;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
const pokemon = new PokemonStore();
export default pokemon;
