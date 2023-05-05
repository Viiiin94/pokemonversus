import { lazy } from "react";
import { IPokemonDetail } from "../../types/pokemonType";
import Compatibility from "../compatibility/Compatibility";
import PokeTypes from "../common/cardPokeTypes/PokeTypes";
import KoreanName from "../common/cardKoreanName/KoreanName";

const Image = lazy(() => import("../common/cardimage/Image"));

interface Ipokemon {
  props: IPokemonDetail;
  onToggleModal: () => void;
}

const Modal = ({ props, onToggleModal }: Ipokemon) => {
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center">
      <div className="text-gray-800 fixed w-[500px] h-[700px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-hidden bg-slate-50">
        <Image img={props.image} />
        <KoreanName numb={props.id} korean={props.koreanName} />
        <span className="flex justify-center items-center">
          해당 포켓몬의 타입:
          <PokeTypes types={props.types} />
        </span>
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
