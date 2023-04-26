const Skeleton = () => {
  return (
    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-fill object-center h-full w-full"
          src=""
        />
      </div>
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        포켓몬 이름
      </h2>
      <p className="leading-relaxed text-base">포켓몬 타입</p>
      <p className="leading-relaxed text-base">포켓몬 특징</p>
    </div>
  );
};

export default Skeleton;
