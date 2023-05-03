import React from "react";

interface IPokeSentence {
  sentence?: string;
}

const Sentence = ({ sentence }: IPokeSentence) => {
  return <p className="leading-relaxed text-base">{sentence}</p>;
};

export default Sentence;
