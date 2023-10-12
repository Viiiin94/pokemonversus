import { useSetRecoilState } from "recoil";
import { useQuery } from "react-query";

import { pokemonState } from "../store/pokemonStore";
import { pokemonAPI } from "../apis/api";
import MainContainer from "../components/main/MainContainer";

const Main = () => {
  const setPokemons = useSetRecoilState(pokemonState);

  useQuery(["pokemons"], () => pokemonAPI(""), {
    onSuccess: (data) => {
      setPokemons(data);
    },
  });
  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default Main;
