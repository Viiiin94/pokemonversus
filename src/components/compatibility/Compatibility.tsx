import { pokemonType } from "../../utils/pokemonTypeName";
import { pokemonCompatibility } from "../../utils/compatibility";

interface ICompatibility {
  types?: string[];
}

const Compatibility = ({ types }: ICompatibility) => {
  const goodEffect = types?.map((type) =>
    pokemonCompatibility[type].goodEffect.map((item, idx: number) => (
      <td className="px-1 py-2 items-center w-10" key={idx}>
        <img
          className="object-fill object-center"
          src={pokemonType[item].icon}
        />
      </td>
    ))
  );

  const badEffect = types?.map((type) =>
    pokemonCompatibility[type].badEffect.map((item, idx: number) => (
      <td className="px-1 py-2 items-center w-10" key={idx}>
        <img
          className="object-fill object-center"
          src={pokemonType[item].icon}
        />
      </td>
    ))
  );

  const nonEffect = types?.map((type) =>
    pokemonCompatibility[type].nonEffect.map((item, idx: number) => (
      <td className="px-1 py-2 items-center w-10" key={idx}>
        <img
          className="object-fill object-center"
          src={pokemonType[item].icon}
        />
      </td>
    ))
  );

  return (
    <table className="w-full text-sm text-left bg-slate-50 text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-3">
            Effect
          </th>
          <th scope="col" className="px-1 py-3">
            Type
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r-[1px]"
          >
            효과는 뛰어났다!
          </th>
          {goodEffect}
        </tr>
        <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r-[1px]"
          >
            효과는 조금 부족한 듯 하다
          </th>
          {badEffect}
        </tr>
        <tr className="dark:bg-gray-800">
          <th
            scope="row"
            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r-[1px]"
          >
            효과는 없는 것 같다...
          </th>
          {nonEffect}
        </tr>
      </tbody>
    </table>
  );
};

export default Compatibility;
