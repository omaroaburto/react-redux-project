import { useEffect } from "react";
import { Col, Spin } from "antd";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./static/logo.svg"; 
import { fetchPokemonsWithDetails } from "./slices/dataSlice";
import "./App.css"; 

function App() {
  const pokemons = useSelector((state) =>
    //state.getIn(["data", "pokemons"], shallowEqual).toJS()
    state.data.pokemons, shallowEqual
  );
  //const loading = useSelector((state) => state.ui.loading);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
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
