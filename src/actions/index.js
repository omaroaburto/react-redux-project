import { getPokemonDetails } from "../api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

const setFavorite = (payload) => ({
  type: SET_FAVORITE,
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

export { 
  setPokemons, 
  getPokemonsWithDetails, 
  setLoading, 
  setFavorite 
};
