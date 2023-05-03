import { Suspense, useEffect, useState } from "react";
import Card from "../components/card/Card";
import Skeleton from "../components/skeleton/Skeleton";
import { useInfiniteQuery } from "react-query";
import { pokemonAPI } from "../apis/api";
import { pokemonState } from "../store/pokemonStore";
import { useRecoilState } from "recoil";
import InfiniteScroll from "react-infinite-scroll-component";
import TopScrollButton from "../components/common/button/TopScrollButton";

const CardList = () => {
  const [pokemons, setPokemons] = useRecoilState(pokemonState);
  const [dataLength, setDataLength] = useState(0);

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["pokemonInfinite"],
    ({ pageParam = pokemons.next }) => pokemonAPI(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        lastPage.next = pages[pages.length - 1].next;
        return lastPage.next;
      },
    }
  );

  useEffect(() => {
    if (data) {
      setPokemons((prev) => ({
        ...prev,
        results: [
          ...prev.results,
          ...data.pages[data.pages.length - 1].results,
        ],
        next: data.pages[data.pages.length - 1].next,
      }));
      setDataLength(
        (prev) => prev + data.pages[data.pages.length - 1].results.length
      );
    }
  }, [data]);

  const onTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="text-gray-600 body-font dark:text-slate-100 dark:bg-gray-700">
      <InfiniteScroll
        dataLength={pokemons?.results.length}
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
        loader={<div>Loading ...</div>}
        endMessage={<div>You have seen it all</div>}
        scrollThreshold={0.99}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {pokemons &&
              pokemons?.results.map((item, idx: number) => {
                return (
                  <Suspense fallback={<Skeleton />} key={`${item.name}_${idx}`}>
                    <Card name={item.name} />
                  </Suspense>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>

      <TopScrollButton onClick={onTopScroll} />
    </section>
  );
};

export default CardList;
