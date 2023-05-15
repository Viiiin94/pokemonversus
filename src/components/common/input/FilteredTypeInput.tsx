import React from "react";
import { pokemonType } from "../../../utils/pokemonTypeName";

interface IType {
  type: string;
}

const FilteredTypeInput = () => {
  return (
    <>
      <input type="radio" name="type" id="fire" />
      <label htmlFor="fire">불꽃</label>;
    </>
  );
};

export default React.memo(FilteredTypeInput);
