import React, { ChangeEvent, FormEvent, lazy } from "react";
import { IPokemonDetail } from "../../types/pokemonType";
import Input from "../common/input/Input";
import Button from "../common/button/Button";
import {
  useInputStore,
  usePokeStore1,
  usePokeStore2,
} from "../../store/zustand";
const Image = lazy(() => import("../common/image/Image"));
interface CardProps {
  pokemon?: IPokemonDetail;
}

const Card = ({ pokemon }: CardProps) => {
  const { pokemons1 } = usePokeStore1();
  const { pokemons2 } = usePokeStore2();
  const { value, setValue } = useInputStore();

  const firstId = pokemons1?.id;
  const firstKoreanName = pokemons1?.koreanName;

  const secId = pokemons2?.id;
  const secKoreanName = pokemons2?.koreanName;

  const onChange = (
    event: ChangeEvent<HTMLInputElement & { value: string }>
  ) => {
    const { target } = event;
    if (pokemons1 && target.value === firstKoreanName) {
      setValue(firstId);
      console.log(value);
      usePokeStore1.setState({ pokemons1 });
    } else if (pokemons2 && target.value === secKoreanName) {
      setValue(secId);
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
