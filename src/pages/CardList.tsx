import { Suspense, useEffect } from "react";
import Card from "../components/card/Card";
import Skeleton from "../components/skeleton/Skeleton";
import { useInfiniteQuery } from "react-query";
import { pokemonAPI } from "../apis/api";
import { pokemonState } from "../store/recoilStore";
import { useRecoilState } from "recoil";
import InfiniteScroll from "react-infinite-scroll-component";

const CardList = () => {
  const [pokemons, setPokemons] = useRecoilState(pokemonState);

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      ["pokemonInfinite"],
      ({ pageParam = pokemons.next }) => pokemonAPI(pageParam),
      {
        getNextPageParam: (lastPage, pages) => {
          lastPage.next = pages[pages.length - 1].next;
          return lastPage.next;
        },
        onSuccess: (result) => {},
      }
    );

  useEffect(() => {
    if (data) {
      setPokemons((prev) => ({
        ...prev,
        results: [
          ...prev.results,
          ...data.pages.flatMap((page) => page.results),
        ],
        next: data.pages[data.pages.length - 1].next,
      }));
    }
  }, [data]);

  console.log(pokemons?.results);

  return (
    <>
      <section className="text-gray-600 body-font">
        <InfiniteScroll
          dataLength={pokemons?.results.length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<div>Loading ...</div>}
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              {pokemons?.results.map((item, idx: number) => {
                return (
                  <Suspense fallback={<Skeleton />} key={`${item.name}_${idx}`}>
                    <Card name={item.name} />
                  </Suspense>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </section>
    </>
  );
};

export default CardList;
