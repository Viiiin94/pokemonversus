import { Suspense } from "react";

const InfoSkeleton = () => {
  return (
    <section className="text-gray-600 body-font dark:bg-gray-700 dark:text-slate-300 h-screen">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* img 컴포넌트 안쓴이유 이미지 크기가 달라서*/}
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="포켓몬이미지"
          src=""
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            ?
          </h1>
          <p className="mb-8 leading-relaxed">?</p>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Color</span>
            <span className="ml-auto text-gray-900"></span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Types</span>
            <span className="ml-auto text-gray-900"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSkeleton;
