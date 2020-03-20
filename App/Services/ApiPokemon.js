import axios from "axios";

class ApiPokemon {
  async getListPokemons() {
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
  }
  async getListPokemonNext(offset) {
    return axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`
    );
  }
  async getPokemon(slug) {
    return axios.get(`https://pokeapi.glitch.me/v1/pokemon/${slug}`);
  }
  async getListTypePokemon() {
    return axios.get("https://pokeapi.co/api/v2/type");
  }
  async getListAbilityPokemon() {
    return axios.get("https://pokeapi.co/api/v2/ability/");
  }
  async getListAbilityPokemonNext(offset) {
    return axios.get(
      `https://pokeapi.co/api/v2/ability/?offset=${offset}limit=10`
    );
  }
}
const apiPokemon = new ApiPokemon();
export default apiPokemon;
