import { pokemonType } from "../../utils/pokemonTypeName";
import { pokemonCompatibility } from "../../utils/compatibility";

interface IStrengthTypes {
  types?: string[];
}

const GoodEffect = ({ types }: IStrengthTypes) => {
  const allStrength = types?.reduce<string[]>((strength, type) => {
    const typeStrength = pokemonCompatibility[type].goodEffect;
    return [...strength, ...typeStrength];
  }, []);

  const uniqueStrength = Array.from(new Set(allStrength));

  const goodEffect = uniqueStrength.map((type) => (
    <td className="px-1 py-2 items-center w-10" key={type}>
      <img
        className="object-fill object-center w-10"
        src={pokemonType[type].icon}
      />
    </td>
  ));

  return (
    <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r-[1px]"
      >
        효과는 뛰어났다!
      </th>
      {goodEffect}
    </tr>
  );
};

export default GoodEffect;
