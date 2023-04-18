import React, { FormEvent, lazy } from "react";
import { IPokemonDetail } from "../../types/pokemonType";
import Input from "../common/input/Input";
import Button from "../common/button/Button";
const Image = lazy(() => import("../common/image/Image"));
interface CardProps {
  pokemon?: IPokemonDetail;
}

const onSubmit = (event: FormEvent) => {
  event.preventDefault();
};

const Card = ({ pokemon }: CardProps) => {
  return (
    <article className="sm:w-1/2 mb-10 px-4">
      <Image props={pokemon?.image} />
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        {pokemon?.koreanName}
      </h2>
      <p className="leading-relaxed text-base">{pokemon?.flavor_text_entry}</p>
      <form>
        <Input />
        <Button />
      </form>
    </article>
  );
};

export default Card;
