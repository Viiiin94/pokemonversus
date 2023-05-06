import { lazy } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { filterKoreanNameState } from "../store/inputStore";

const Image = lazy(() => import("../components/common/cardimage/Image"));

const CardInfo = () => {
  const { name } = useParams<{ name: string }>();
  let pokemon = null;
  try {
    pokemon = useRecoilValue(filterKoreanNameState);
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      {pokemon?.koreanName} {pokemon?.id} {pokemon?.types.map((item) => item)}
      <Image img={pokemon?.image} />
    </div>
  );
};

export default CardInfo;
