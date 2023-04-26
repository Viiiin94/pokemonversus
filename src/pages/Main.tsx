import { useRecoilState } from "recoil";
import { pokemonState } from "../store/recoilStore";
import { useQuery } from "react-query";
import { pokemonAPI } from "../apis/api";

const Main = () => {
  const [pokemons, setPokemons] = useRecoilState(pokemonState);

  useQuery(["pokemons"], () => pokemonAPI(""), {
    onSuccess: (data) => {
      setPokemons(data);
    },
  });

  console.log(pokemons);

  return (
    <div>
      <p>Hi</p>
    </div>
  );
};

export default Main;
