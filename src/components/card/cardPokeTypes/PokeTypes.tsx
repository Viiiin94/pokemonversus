import { Fragment } from "react";

interface IPokeTypes {
  types?: string[];
}

const PokeTypes = ({ types }: IPokeTypes) => {
  return (
    <p className="leading-relaxed text-base">
      {types?.map((type, idx: number) => (
        <Fragment key={`${idx}`}>{type} </Fragment>
      ))}
    </p>
  );
};

export default PokeTypes;
