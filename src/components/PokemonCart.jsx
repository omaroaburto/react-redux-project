import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta"; 

 
const PokemonCart = ({name, url}) => {
  let aux = [];
  aux =  url.split('/');  
  const urlPokemon =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${aux[6]}.svg` 
  return (
    <Card 
      title={name}
      cover={<img style={{width:'14rem', height:'14rem', margin:'0 auto', padding:'1rem'}} src={urlPokemon} alt={name} />}
      extra={<StarOutlined/>}
    >
      <Meta description={name} />
    </Card>
  );
};

export { PokemonCart };
