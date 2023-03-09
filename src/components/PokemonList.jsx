import React from "react";
import { PokemonCart } from "./PokemonCart";
import "../styles/PokemonList.css";
const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons?.map((pokemon, index) => {
        return (
          <PokemonCart
            key={index}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            abilities={pokemon.abilities}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};
export { PokemonList };
