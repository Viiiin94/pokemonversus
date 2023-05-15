import { Fragment } from "react";
import { pokemonType } from "../../../utils/compatibility";

interface IPokeTypes {
  types?: string[];
}

const PokeTypes = ({ types }: IPokeTypes) => {
  return (
    <p className="leading-relaxed text-base">
      {types?.map((type, idx: number) => (
        <Fragment key={idx}>{pokemonType[type].name ?? type} </Fragment>
      ))}
    </p>
  );
};

export default PokeTypes;
