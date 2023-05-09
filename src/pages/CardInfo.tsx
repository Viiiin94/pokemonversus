import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { filterKoreanNameState } from "../store/inputStore";
import InfoSkeleton from "../components/skeleton/InfoSkeleton";
import SearchCardInfo from "../components/card/SearchCardInfo";

const Image = lazy(() => import("../components/common/cardimage/Image"));

const CardInfo = () => {
  // const { name } = useParams<{ name: string }>();

  let pokemon = null;
  try {
    pokemon = useRecoilValue(filterKoreanNameState);
  } catch (error) {
    console.error(error);
  }

  if (pokemon === null) {
    <InfoSkeleton />;
  }

  return (
    <Suspense fallback={<div>Loading</div>}>
      {pokemon === null ? (
        <InfoSkeleton />
      ) : (
        <SearchCardInfo pokemon={pokemon} />
      )}
    </Suspense>
  );
};

export default CardInfo;
