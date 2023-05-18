import { Suspense, useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { pokemonAPI } from "../apis/api";
import { pokemonState } from "../store/pokemonStore";
import { useRecoilState } from "recoil";
import Card from "../components/card/Card";
import Skeleton from "../components/skeleton/Skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import TopScrollButton from "../components/common/button/TopScrollButton";

const CardList = () => {
  const [pokemons, setPokemons] = useRecoilState(pokemonState);

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
        next={fetchNextPage ?? false}
        hasMore={hasNextPage ?? false}
        loader={<div>Loading ...</div>}
        endMessage={<div>끝!!</div>}
        scrollThreshold={0.99}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {pokemons
              ? pokemons?.results.map((item, idx: number) => {
                  return (
                    <Suspense
                      fallback={<Skeleton />}
                      key={`${item.name}_${idx}`}
                    >
                      <Card name={item.name} />
                    </Suspense>
                  );
                })
              : null}
          </div>
        </div>
      </InfiniteScroll>

      <TopScrollButton onClick={onTopScroll} />
    </section>
  );
};

export default CardList;
