import { useSetRecoilState } from "recoil";
import { pokemonState } from "../store/recoilStore";
import { useQuery } from "react-query";
import { pokemonAPI } from "../apis/api";

const Main = () => {
  const setPokemons = useSetRecoilState(pokemonState);

  useQuery(["pokemons"], () => pokemonAPI(""), {
    onSuccess: (data) => {
      setPokemons(data);
    },
  });
  return (
    <div>
      <p>Hi</p>
    </div>
  );
};

export default Main;
