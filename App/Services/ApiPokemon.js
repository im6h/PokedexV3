import axios from "axios";

class ApiPokemon {
  async getListPokemons() {
    return axios.get(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );
  }
}
const apiPokemon = new ApiPokemon();
export default apiPokemon;
