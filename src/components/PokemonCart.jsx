import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useDispatch } from "react-redux"; 
import { setFavorite } from "../slices/dataSlice";
import { StarButton } from "./StarButton";

const PokemonCart = ({ id, name, image, abilities, types, favorite }) => {
  const dispatch = useDispatch();
  const typeString = types.map((element) => element.type.name).join(", ");
  const pokemonAbilities = abilities.map((abilityPokemon) => {
    return (
      <li key={abilityPokemon.ability.name}>{abilityPokemon.ability.name}</li>
    );
  });

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <Card
      style={{ textTransform: "capitalize" }}
      title={name}
      cover={
        <img
          style={{
            width: "14rem",
            height: "14rem",
            margin: "0 auto",
            padding: "1rem",
          }}
          src={image}
          alt={name}
        />
      }
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta
        description={
          <>
            <h5>Types</h5>
            <p>{typeString}</p>
            <h5>Abilities</h5>
            <ul style={{ textTransform: "capitalize" }}>{pokemonAbilities}</ul>
          </>
        }
      />
    </Card>
  );
};

export { PokemonCart };
