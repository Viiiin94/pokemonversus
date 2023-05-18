import { pokemonType } from "../../utils/pokemonTypeName";
import { pokemonCompatibility } from "../../utils/compatibility";

interface INoDamageTypes {
  types?: string[];
}

const GoodEffect = ({ types }: INoDamageTypes) => {
  const allNonDamage = types?.reduce<string[]>((noDamege, type) => {
    const typeNonDamage = pokemonCompatibility[type].nonEffect;
    return [...noDamege, ...typeNonDamage];
  }, []);

  const uniqueNoDamage = Array.from(new Set(allNonDamage));

  const nonEffect = uniqueNoDamage.map((type) => (
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
        효과는 없는 듯 하다...
      </th>
      {nonEffect}
    </tr>
  );
};

export default GoodEffect;
