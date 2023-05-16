interface GameImageProps {
  img?: string;
}

const GameImage = ({ img }: GameImageProps) => {
  return (
    <div className="rounded-lgoverflow-hidden h-auto w-2/5">
      <img
        alt="포켓몬스터이미지"
        className="object-fill object-center w-full"
        src={img}
      />
    </div>
  );
};

export default GameImage;
