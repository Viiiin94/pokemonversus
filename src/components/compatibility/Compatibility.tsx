import { pokemonType } from "../../utils/pokemonTypeName";
import { pokemonCompatibility } from "../../utils/compatibility";
import GoodEffect from "./GoodEffect";
import BadEffect from "./BadEffect";
import NonEffect from "./NonEffect";

interface ICompatibility {
  types?: string[];
}

const Compatibility = ({ types }: ICompatibility) => {
  return (
    <table className="w-full text-sm text-left bg-slate-50 text-gray-500 dark:text-gray-400 right-0">
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
        <GoodEffect types={types} />
        <BadEffect types={types} />
        <NonEffect types={types} />
      </tbody>
    </table>
  );
};

export default Compatibility;
