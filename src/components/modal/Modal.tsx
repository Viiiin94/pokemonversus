import { lazy } from "react";
import { IPokemonDetail } from "../../types/pokemonType";
import Compatibility from "../compatibility/Compatibility";
import PokeTypes from "../common/types/PokeTypes";
import Stats from "../common/stats/Stats";

const GameImage = lazy(() => import("../common/image/GameImage"));

interface Ipokemon {
  props: IPokemonDetail;
  onToggleModal: () => void;
}

const Modal = ({ props, onToggleModal }: Ipokemon) => {
  console.log(props);
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center ">
      <div className="text-gray-800 fixed w-7/12 h-4/5 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 dark:bg-slate-500">
        <div className="flex flex-row">
          <GameImage img={props.game_image} />

          <div className="relative overflow-x-auto w-[100px]">
            <table className="w-full h-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-1 py-4 items-center">{props.id}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-1 py-4 items-center">{props.koreanName}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-1 py-4 items-center">
                    <PokeTypes types={props.types} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex right-0">
            <Stats stat_name={props.stat_name} stat_value={props.stat_value} />
          </div>
        </div>
        <Compatibility types={props.types} />
        <button
          className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white"
          onClick={onToggleModal}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
