import { Suspense } from "react";
import Card from "../components/card/Card";
import Skeleton from "../components/skeleton/Skeleton";
import { useQuery, useInfiniteQuery } from "react-query";
import { pokemonAPI } from "../apis/api";
import { pokemonState } from "../store/recoilStore";
import { useRecoilState } from "recoil";

const CardList = () => {
  const [pokemons, setPokemons] = useRecoilState(pokemonState);

  console.log(pokemons);

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["pokemonInfinite"],
    ({ pageParam = 0 }) => pokemonAPI(pokemons.next),
    {
      getNextPageParam: (lastPage, allPages) => {},
    }
  );

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {pokemons?.results.map((item, idx: number) => {
              return (
                <Suspense fallback={<Skeleton />} key={`${item.name}_${idx}`}>
                  <Card name={item.name} />
                </Suspense>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardList;
