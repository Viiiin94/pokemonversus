import { Fragment } from "react";
import { pokemonType } from "../../../utils/pokemonTypeName";

interface IPokeTypes {
  types?: string[];
}

const PokeTypes = ({ types }: IPokeTypes) => {
  return (
    <p className="leading-relaxed space-x-1 flex flex-row justify-center">
      {types?.map((type, idx: number) => (
        <Fragment key={idx}>
          <img
            className="w-8"
            src={`${pokemonType[type].icon}`}
            alt="해당 포켓몬 타입"
          />
        </Fragment>
      ))}
    </p>
  );
};

export default PokeTypes;
