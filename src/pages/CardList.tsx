import { Suspense } from "react";
import Card from "../components/card/Card";
import Skeleton from "../components/skeleton/Skeleton";
import { useQuery } from "react-query";
import { pokemonAPI } from "../apis/api";
import { pokemonState } from "../store/recoilStore";
import { useRecoilState } from "recoil";

const CardList = () => {
  const [pokemons, setPokemons] = useRecoilState(pokemonState);

  const { isLoading } = useQuery("pokemons", () => pokemonAPI(""), {
    onSuccess: (data) => setPokemons(data),
  });

  if (isLoading) {
    <div> Loading ... </div>;
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {pokemons?.results.map((item, idx: number) => {
              return <Card name={item.name} key={`${item.name}_${idx}`} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardList;
