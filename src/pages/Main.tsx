import React, { Suspense } from "react";
import Card from "../components/card/Card";
import { useQueries, useQuery } from "react-query";
import { pokemonAPI, pokemonSpecAPI } from "../apis/api";

const Main = () => {
  const pokemons = useQuery("pokemon", pokemonAPI);
  const pokemonSpec = useQuery("pokemonSpec", pokemonSpecAPI);

  const pokemonSVG = pokemons.data && pokemons.data.sprites.other.dream_world;
  console.log(pokemonSVG);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <Suspense>
            <Card />
          </Suspense>
          <Suspense>
            <Card />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Main;
