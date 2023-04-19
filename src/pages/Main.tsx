import React, { Suspense } from "react";
import Card from "../components/card/Card";
import { pokemonSpecAPI } from "../apis/api";
import { useQuery } from "react-query";
import {
  useInputStore,
  usePokeStore1,
  useAllPokeStore,
} from "../store/zustand";

import Skeleton from "../components/skeleton/Skeleton";
import { pokemonAPI } from "../apis/api";

const Main = () => {
  const { value } = useInputStore();

  const { data: allPokes } = useQuery("allPoke", pokemonAPI);
  useAllPokeStore.setState({ allPokes });

  const { data: pokemons1 } = useQuery(
    ["pokemonSpec1", value],
    () => pokemonSpecAPI(value),
    {
      enabled: !!value,
    }
  );

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <Suspense fallback={<Skeleton />}>
            <Card pokemon={pokemons1} />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Main;
