interface ImageProps {
  img?: string;
}

const Image = ({ img }: ImageProps) => {
  return (
    <div className="rounded-lg h-auto overflow-hidden">
      <img
        alt="포켓몬스터이미지"
        className="object-fill object-center h-full w-full"
        src={img}
      />
    </div>
  );
};

export default Image;
