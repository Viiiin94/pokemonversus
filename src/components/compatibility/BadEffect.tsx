import { pokemonType } from "../../utils/pokemonTypeName";
import { pokemonCompatibility } from "../../utils/compatibility";

interface IWeaknessTypes {
  types?: string[];
}

const BadEffect = ({ types }: IWeaknessTypes) => {
  const allWeakness = types?.reduce<string[]>((weaknesses, type) => {
    const typeWeaknesses = pokemonCompatibility[type].badEffect;
    return [...weaknesses, ...typeWeaknesses];
  }, []);

  const uniqueWeakness = Array.from(new Set(allWeakness));

  const badEffect = uniqueWeakness.map((type) => (
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
        효과는 조금 부족한 듯 하다
      </th>
      {badEffect}
    </tr>
  );
};

export default BadEffect;
