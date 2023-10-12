import React, { lazy, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";

import { pokemonDetailAPI } from "../../apis/api";
import { pokemonDetailState } from "../../store/pokemonStore";
import { selectedState } from "../../store/selectedStore";
import { IPokemonDetail } from "../../types/pokemonType";
import KoreanName from "../common/koreanName/KoreanName";
import PokeTypes from "../common/types/PokeTypes";
import Modal from "../modal/Modal";

const Image = lazy(() => import("../common/image/Image"));

interface CardProps {
  name: string;
}

const Card = ({ name }: CardProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [pokemon, setPokemon] = useRecoilState(pokemonDetailState);
  const selectedType = useRecoilValue(selectedState);

  useQuery(["pokemonDetail", name], () => pokemonDetailAPI(name), {
    onSuccess: (data) => {
      if (!!data) {
        setPokemon((prevPokemon) => ({
          ...prevPokemon,
          [name]: data ? data : undefined,
        }));
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const pokemonData: IPokemonDetail = pokemon[name];
  // const pokemonColor = pokemonData.types[0];

  const onToggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  if (!pokemonData || !pokemonData.id) {
    return null; // 초기 상태 또는 API 응답 데이터가 없는 경우 카드를 렌더링하지 않음
  }

  if (selectedType && !pokemonData.types.includes(selectedType)) {
    return null; // 필터링 조건에 맞지 않는 경우 카드를 렌더링하지 않음
  }

  return (
    <div className="mb-10 px-4 mx-1.5 pb-3 border border-gray-300 dark:border-gray-100 xs:w-full xs:px-1 transition">
      <button onClick={onToggleModal}>
        <Image img={pokemonData.image} />
        <p className="flex flex-1 pl-4">No. {pokemonData.id}</p>
        <KoreanName korean={pokemonData.koreanName} />
        <PokeTypes types={pokemonData.types} />
      </button>
      {openModal && <Modal props={pokemonData} onToggleModal={onToggleModal} />}
    </div>
  );
};

export default React.memo(Card);
