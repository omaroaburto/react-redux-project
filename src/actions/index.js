import { getPokemonDetails } from "../api";
import { SET_POKEMONS } from "./types";

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => { 
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsDetailed));
  };

export { setPokemons, getPokemonsWithDetails };
