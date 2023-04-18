import React, { Suspense } from "react";
import Card from "../components/card/Card";

import Skeleton from "../components/skeleton/Skeleton";

const Main = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <Suspense fallback={<Skeleton />}>
            <Card />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <Card />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Main;
