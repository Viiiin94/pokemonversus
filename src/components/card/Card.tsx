import React from "react";
import { IPokemonDetail } from "../../types/pokemonType";
import Input from "../input/Input";

interface CardProps {
  pokemon?: IPokemonDetail;
}

const Card = ({ pokemon }: CardProps) => {
  return (
    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src={pokemon?.image}
        />
      </div>
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        {pokemon?.koreanName}
      </h2>
      <p className="leading-relaxed text-base">{pokemon?.flavor_text_entry}</p>
      <form>
        <Input />
        <button
          type="submit"
          className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
        >
          Button
        </button>
      </form>
    </div>
  );
};

export default Card;
