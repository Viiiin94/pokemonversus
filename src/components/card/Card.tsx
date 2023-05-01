import React, { Fragment, lazy, useState } from "react";
import { useQuery } from "react-query";
import { pokemonDetailAPI } from "../../apis/api";
import { pokemonDetailState } from "../../store/pokemonStore";
import { useRecoilState } from "recoil";
import { IPokemonDetail } from "../../types/pokemonType";
import Modal from "../common/modal/Modal";
import { Link } from "react-router-dom";
import Skeleton from "../skeleton/Skeleton";
import Button from "../common/button/Button";

const Image = lazy(() => import("../common/image/Image"));

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
          [props.name]: data,
        }));
      }
    },
  });

  const pokemonData: IPokemonDetail = pokemon[props.name];

  if (!pokemonData) {
    return <Skeleton />;
  }
  return (
    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <Image props={pokemonData.image} />
      </div>
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        {pokemonData.id}. {pokemonData.koreanName}
      </h2>
      <p className="leading-relaxed text-base">
        {pokemonData.types.map((type, idx: number) => (
          <Fragment key={`${idx}`}>{type} </Fragment>
        ))}
      </p>
      <p className="leading-relaxed text-base">
        {pokemonData.flavor_text_entry}
      </p>
      {openModal && <Modal />}
    </div>
  );
};

export default React.memo(Card);
