interface IPokeSentence {
  sentence?: string;
}

const Explanation = ({ sentence }: IPokeSentence) => {
  return <p className="leading-relaxed text-base">{sentence}</p>;
};

export default Explanation;
