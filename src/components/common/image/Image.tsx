interface ImageProps {
  props?: string;
}

const Image = ({ props }: ImageProps) => {
  return (
    <img
      alt="포켓몬스터이미지"
      className="object-fill object-center h-full w-full"
      src={props}
    />
  );
};

export default Image;
