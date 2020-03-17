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
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${slug}`);
  }
}
const apiPokemon = new ApiPokemon();
export default apiPokemon;
