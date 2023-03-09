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
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            abilities={pokemon.abilities}
            types={pokemon.types}
            favorite={pokemon.favorite}
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
