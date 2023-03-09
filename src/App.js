import { useEffect } from "react";
import { Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./static/logo.svg";
import { getPokemon, getPokemonDetails } from "./api";
import { setPokemons } from "./actions";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonDetailed = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonDetailed));
    };

    fetchPokemons();
  }, [dispatch]);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="logo web" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
