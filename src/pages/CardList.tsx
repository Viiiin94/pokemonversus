import { Suspense, Fragment } from "react";
import Card from "../components/card/Card";
import Skeleton from "../components/skeleton/Skeleton";
import { useQuery } from "react-query";
import { pokemonAPI } from "../apis/api";

const CardList = () => {
  const { data: pokemons } = useQuery("pokemons", pokemonAPI);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {pokemons?.results.map((item, idx: number) => {
              console.log(item.name);
              return (
                <Suspense fallback={<Skeleton />} key={idx}>
                  <Card pokeName={item.name} />
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
