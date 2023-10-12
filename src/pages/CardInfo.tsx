import { Suspense, lazy } from "react";
import { useRecoilValue } from "recoil";

import { filterKoreanNameState } from "../store/inputStore";
import InfoSkeleton from "../components/skeleton/InfoSkeleton";
import SearchCardInfo from "../components/card/SearchCardInfo";

const Image = lazy(() => import("../components/common/image/Image"));

const CardInfo = () => {
  let pokemon = null;
  try {
    pokemon = useRecoilValue(filterKoreanNameState);
  } catch (error) {
    console.error(error);
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
