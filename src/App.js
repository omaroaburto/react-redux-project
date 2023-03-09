import { useEffect } from "react";
import { Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./static/logo.svg";
import { getPokemon } from "./api"; 
import "./App.css";
import { getPokemonsWithDetails } from "./actions";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      console.log(pokemonsRes)
      dispatch(getPokemonsWithDetails(pokemonsRes));
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
