import { Fragment } from "react";
import { pokemonType } from "../../../utils/pokemonTypeName";

interface IPokeTypes {
  types?: string[];
}

const PokeTypes = ({ types }: IPokeTypes) => {
  return (
    <p className="leading-relaxed text-base flex pl-3">
      {types?.map((type, idx: number) => (
        <Fragment key={idx}>
          <img
            className="w-8 pr-2"
            src={`${pokemonType[type].icon}`}
            alt="해당 포켓몬 타입"
          />
        </Fragment>
      ))}
    </p>
  );
};

export default PokeTypes;
