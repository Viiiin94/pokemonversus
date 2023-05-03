import React, { lazy, useState } from "react";
import { useQuery } from "react-query";
import { pokemonDetailAPI } from "../../apis/api";
import { pokemonDetailState } from "../../store/pokemonStore";
import { useRecoilState } from "recoil";
import { IPokemonDetail } from "../../types/pokemonType";
import Skeleton from "../skeleton/Skeleton";
import KoreanName from "./cardKoreanName/KoreanName";
import PokeTypes from "./cardPokeTypes/PokeTypes";
import Sentence from "./cardSentence/Sentence";

const Image = lazy(() => import("./cardimage/Image"));

interface CardProps {
  name: string;
}

const Card = (props: CardProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [pokemon, setPokemon] = useRecoilState(pokemonDetailState);

  useQuery(["pokemonDetail", props.name], () => pokemonDetailAPI(props.name), {
    onSuccess: (data) => {
      if (!!data) {
        setPokemon((prevPokemon) => ({
          ...prevPokemon,
          [props.name]: data ? data : undefined,
        }));
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const pokemonData: IPokemonDetail = pokemon[props.name];

  if (!pokemonData && pokemon) {
    return <Skeleton />;
  }
  return (
    <div className="sm:w-1/2 mb-10 px-4 dark:border-b-2 dark:border-b-slate-600">
      <Image props={pokemonData.image} />
      <KoreanName numb={pokemonData.id} korean={pokemonData.koreanName} />
      <PokeTypes types={pokemonData.types} />
      <Sentence sentence={pokemonData.flavor_text_entry} />
    </div>
  );
};

export default React.memo(Card);
