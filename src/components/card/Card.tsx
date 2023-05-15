import React, { lazy, useState } from "react";
import { useQuery } from "react-query";
import { pokemonDetailAPI } from "../../apis/api";
import { pokemonDetailState } from "../../store/pokemonStore";
import { useRecoilState } from "recoil";
import { IPokemonDetail } from "../../types/pokemonType";
import Skeleton from "../skeleton/Skeleton";
import KoreanName from "../common/cardKoreanName/KoreanName";
import PokeTypes from "../common/cardPokeTypes/PokeTypes";
import Sentence from "../common/cardSentence/Sentence";
import Modal from "../modal/Modal";

const Image = lazy(() => import("../common/cardimage/Image"));

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

  const onToggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  if (!pokemonData && pokemon) {
    return <Skeleton />;
  }

  return (
    <div className="lg:w-1/4 mb-10 px-4 dark:border-b-2 pb-5 xs:w-1/2 xs:px-1 dark:border-b-slate-600">
      <button onClick={onToggleModal}>
        <Image img={pokemonData.image} />
      </button>
      <KoreanName numb={pokemonData.id} korean={pokemonData.koreanName} />
      <PokeTypes types={pokemonData.types} />
      <Sentence sentence={pokemonData.flavor_text_entry} />
      {openModal && <Modal props={pokemonData} onToggleModal={onToggleModal} />}
    </div>
  );
};

export default React.memo(Card);
