import React, { ChangeEvent, FormEvent, lazy } from "react";
import { IPokemonDetail } from "../../types/pokemonType";
import Input from "../common/input/Input";
import Button from "../common/button/Button";
import {
  useInputStore,
  usePokeStore1,
  useAllPokeStore,
} from "../../store/zustand";
const Image = lazy(() => import("../common/image/Image"));
interface CardProps {
  pokemon?: IPokemonDetail;
}

// 한번에 모든 포켓몬을 불러오고 각각의 상태를 관리하는게 편해보임

const Card = ({ pokemon }: CardProps) => {
  const { pokemons } = usePokeStore1();

  const { value, setValue } = useInputStore();

  const { allPokes } = useAllPokeStore();

  console.log(allPokes.results.map((item) => item));

  const firstId = pokemons?.id;
  const firstKoreanName = pokemons?.koreanName;

  const onChange = (
    event: ChangeEvent<HTMLInputElement & { value: string }>
  ) => {
    const { target } = event;
    if (pokemons && target.value === firstKoreanName) {
      setValue(firstId);
      usePokeStore1.setState({ pokemons });
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <article className="sm:w-1/2 mb-10 px-4">
      <Image props={pokemon?.image} />
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        {pokemon?.koreanName}
      </h2>
      <p className="leading-relaxed text-base">{pokemon?.flavor_text_entry}</p>
      <form onSubmit={onSubmit}>
        <Input type="text" onChange={onChange} value={value} />
        <Button />
      </form>
    </article>
  );
};

export default Card;
