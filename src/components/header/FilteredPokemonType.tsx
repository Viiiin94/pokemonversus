import React, { ChangeEvent } from "react";
import { pokemonType, pokemonTypes } from "../../utils/pokemonTypeName";
import { useRecoilState } from "recoil";
import { selectedState } from "../../store/selectedStore";

const FilteredPokemonType = () => {
  const [selectedType, setSelectedType] = useRecoilState(selectedState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value);
  };

  console.log(selectedType);

  return (
    <div className="container mx-auto mt-2 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-6 lg:grid-cols-9 gap-3">
      {pokemonTypes.map((item) => (
        <label
          key={item}
          className="flex bg-gray-200 items-center rounded-md p-2 mx-2 cursor-pointer hover:bg-gray-100 transition duration-500"
        >
          <input
            type="radio"
            value={item}
            name="type"
            checked={selectedType === `${pokemonType[item]?.name}`}
            onChange={onChange}
            className="sr-only"
          />
          <span className="flex-1">{pokemonType[item]?.name}</span>
          <img
            className="w-6 h-6 ml-1"
            src={pokemonType[item]?.icon}
            alt={pokemonType[item]?.name}
          />
        </label>
      ))}
    </div>
  );
};

export default FilteredPokemonType;
