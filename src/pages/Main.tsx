import React, { Suspense } from "react";
import Card from "../components/card/Card";
import { pokemonAPI } from "../apis/api";
import { useQuery } from "react-query";
import Skeleton from "../components/skeleton/Skeleton";
import { allPokemonStore } from "../store/zustand";

const Main = () => {
  const { data: allPokemon } = useQuery("pokemons", pokemonAPI);

  const { setAllPokemon } = allPokemonStore();
  if (allPokemon) {
    setAllPokemon({ allPokemon });
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {
            <Suspense fallback={<Skeleton />}>
              <Card pokemon={allPokemon} />
            </Suspense>
          }
        </div>
      </div>
    </section>
  );
};

export default Main;
