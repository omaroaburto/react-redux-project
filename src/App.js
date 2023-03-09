import { useEffect } from "react";
import { Col, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./static/logo.svg";
import { getPokemon } from "./api";
import "./App.css";
import { getPokemonsWithDetails, setLoading } from "./actions";

function App() {
  const pokemons = useSelector((state) => state.get('pokemons').toJS());
  const loading = useSelector((state) => state.get('loading')); 
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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
      {loading ? (
        <Col style={{ marginTop: "3rem" }} offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
