import React, { Fragment } from "react";
import { IPokemonDetail } from "../../types/pokemonType";
import { pokemonType } from "../../utils/compatibility";

interface ISerachCardInfo {
  pokemon: IPokemonDetail;
}

const SearchCardInfo = ({ pokemon }: ISerachCardInfo) => {
  return (
    <section className="text-gray-600 body-font dark:bg-gray-700 dark:text-slate-300">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* img 컴포넌트 안쓴이유 이미지 크기가 달라서*/}
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="포켓몬이미지"
          src={pokemon?.image}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-slate-300">
            {pokemon?.id}. {pokemon?.koreanName}
          </h1>
          <p className="mb-8 leading-relaxed">{pokemon?.flavor_text_entry}</p>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500 dark:text-slate-200">Color</span>
            <span className="ml-auto text-gray-900 dark:text-slate-300">
              {pokemon?.color}
            </span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500 dark:text-slate-200">Types</span>
            <span className="ml-auto text-gray-900 dark:text-slate-300">
              {pokemon?.types.map((item, idx: number) => {
                return <Fragment key={idx}>{pokemonType[item]} </Fragment>;
              })}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchCardInfo;
