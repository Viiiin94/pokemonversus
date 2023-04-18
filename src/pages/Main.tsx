import React, { Suspense } from "react";
import Card from "../components/card/Card";
import { pokemonSpecAPI } from "../apis/api";
import { useQuery } from "react-query";
import { usePokeStore1, usePokeStore2 } from "../store/zustand";

import Skeleton from "../components/skeleton/Skeleton";

const Main = () => {
  const { data: pokemons1 } = useQuery("pokemonSpec1", () => pokemonSpecAPI(3));

  const { data: pokemons2 } = useQuery("pokemonSpec2", () => pokemonSpecAPI(8));

  usePokeStore1.setState({ pokemons1 });
  usePokeStore2.setState({ pokemons2 });

  console.log(pokemons2);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <Suspense fallback={<Skeleton />}>
            <Card pokemon={pokemons1} />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <Card pokemon={pokemons2} />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Main;
