import React from "react";

interface ImageProps {
  props?: string;
}

const Image = ({ props }: ImageProps) => {
  return (
    <div className="rounded-lg h-64 overflow-hidden">
      <img
        alt="포켓몬스터이미지"
        className="object-fill object-center h-full w-full"
        src={props}
      />
    </div>
  );
};

export default Image;
