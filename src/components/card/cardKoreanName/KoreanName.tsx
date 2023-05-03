import React from "react";

interface IKoreanName {
  numb?: number;
  korean?: string;
}

const KoreanName = ({ numb, korean }: IKoreanName) => {
  return (
    <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 dark:text-slate-100">
      {numb}. {korean}
    </h2>
  );
};

export default KoreanName;
