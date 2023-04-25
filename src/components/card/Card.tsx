import React, { lazy } from "react";
import { useQuery } from "react-query";
import { pokemonDetailAPI } from "../../apis/api";
import { pokemonDetailState } from "../../store/recoilStore";
import { useRecoilState } from "recoil";
import { IPokemonDetail } from "../../types/pokemonType";

const Image = lazy(() => import("../common/image/Image"));

interface CardProps {
  name: string;
}

const Card = (props: CardProps) => {
  const [pokemon, setPokemon] = useRecoilState(pokemonDetailState);

  useQuery(["pokemonDetail", props.name], () => pokemonDetailAPI(props.name), {
    onSuccess: (data) => {
      setPokemon((prevPokemon) => ({
        ...prevPokemon,
        [props.name]: data,
      }));
    },
  });

  const pokemonData: IPokemonDetail = pokemon[props.name];

  if (!pokemonData) {
    return (
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-fill object-center h-full w-full"
            src=""
          />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
          포켓몬 이름
        </h2>
        <p className="leading-relaxed text-base">포켓몬 타입</p>
        <p className="leading-relaxed text-base">포켓몬 특징</p>
      </div>
    );
  }
  return (
    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-fill object-center h-full w-full"
          src={pokemonData.image}
        />
      </div>
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        {pokemonData.koreanName}
      </h2>
      <p className="leading-relaxed text-base">
        {pokemonData.types.map((type) => (
          <>{type} </>
        ))}
      </p>
      <p className="leading-relaxed text-base">
        {pokemonData.flavor_text_entry}
      </p>
      <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
        Button
      </button>
    </div>
  );
};

export default React.memo(Card);
