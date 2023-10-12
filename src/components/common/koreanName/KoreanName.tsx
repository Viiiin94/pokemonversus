interface IKoreanName {
  korean?: string;
}

const KoreanName = ({ korean }: IKoreanName) => {
  return (
    <h2 className="title-font text-2xl font-medium text-gray-900 mt-1 mb-3 dark:text-slate-100">
      {korean}
    </h2>
  );
};

export default KoreanName;
