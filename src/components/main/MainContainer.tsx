import MainImage from "../../assets/pokemon_1200_500.webp";
import ReactQuery from "../../assets/react-query.svg";
import React from "../../assets/react.svg";
import TypeScript from "../../assets/typescript.svg";
import TailwindCSS from "../../assets/tailwindcss.svg";

const MainContainer = () => {
  return (
    <section className="text-gray-600 body-font dark:text-gray-300 dark:bg-gray-700">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={MainImage}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg dark:text-slate-300">
                  Yoo Youngbin
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">포켓몬스터</p>
              </div>
            </div>
            <div className="flex flex-col sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:mt-0 sm:text-left">
              <div className="flex flex-row">
                <img
                  src={React}
                  alt="reactquery-icons"
                  className="w-10 h-10 object-center mx-1"
                />
                <img
                  src={TypeScript}
                  alt="reactquery-icons"
                  className="w-10 h-10 object-center mx-1"
                />
                <img
                  src={TailwindCSS}
                  alt="reactquery-icons"
                  className="w-10 h-10 object-center mx-1"
                />
                <img
                  src={ReactQuery}
                  alt="reactquery-icons"
                  className="w-10 h-10 object-center mx-1"
                />
              </div>
              <div className="mt-4">
                <p className="text-base">
                  포켓몬스터 useInfiniteQuery와 Recoil을 이용한 인피니티스크롤
                  카드리스트
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
