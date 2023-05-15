import React, { Fragment } from "react";
import { pokemonCompatibility, pokemonType } from "../../utils/compatibility";

interface ICompatibility {
  types?: string[];
}

const Compatibility = ({ types }: ICompatibility) => {
  const goodEffect = types?.map((type) =>
    pokemonCompatibility[type].goodEffect.map((item, idx: number) => (
      <span key={idx}>{pokemonType[item].name} </span>
    ))
  );

  const badEffect = types?.map((type) =>
    pokemonCompatibility[type].badEffect.map((item, idx: number) => (
      <span key={idx}>{pokemonType[item].name} </span>
    ))
  );

  const nonEffect = types?.map((type) =>
    pokemonCompatibility[type].nonEffect.map((item, idx: number) => (
      <span key={idx}>{pokemonType[item].name} </span>
    ))
  );

  return (
    <div>
      <h2>해당 포켓몬이 공격을 했을 때</h2>
      <div className="text-left ml-4 mt-5 pl-4">
        <p>효과가 굉장했다!! : {goodEffect}</p>
        <p>효과가 별로였다.. : {badEffect}</p>
        <p>효과가 없다..! : {nonEffect}</p>
      </div>
    </div>
  );
};

export default Compatibility;
