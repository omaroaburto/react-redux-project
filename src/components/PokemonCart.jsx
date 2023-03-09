import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCart = ({ name, image, abilities }) => {
  const pokemonAbilities = abilities.map((abilityPokemon) => {
    return (
      <li key={abilityPokemon.ability.name}>{abilityPokemon.ability.name}</li>
    );
  });
  return (
    <Card
      style={{textTransform:'capitalize'}}
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
      extra={<StarOutlined />}
    >
      <Meta
        description={
          <>
            <h5>Abilities</h5>
            <ul style={{textTransform:'capitalize'}}>{pokemonAbilities}</ul>
          </>
        }
      />
    </Card>
  );
};

export { PokemonCart };
