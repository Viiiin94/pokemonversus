import { ChangeEvent, FormEvent, lazy, useState } from "react";
import Input from "../common/input/Input";
import Button from "../common/button/Button";
import { useQuery } from "react-query";
import { pokemonDetailAPI } from "../../apis/api";
const Image = lazy(() => import("../common/image/Image"));

const Card = () => {
  const [value, setValue] = useState<string>("");
  const [pokeName, setPokeName] = useState<string>("pikachu");

  const { data } = useQuery(["pokemonDetail", pokeName], () =>
    pokemonDetailAPI(pokeName)
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <section className="sm:w-1/2 mb-10 px-4">
      <Image props={data?.image} />
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        {data?.koreanName}
      </h2>
      {data?.types.map((item) => {
        return (
          <span key={item} className="leading-relaxed text-lg pr-2">
            {item}
          </span>
        );
      })}
      <p className="leading-relaxed text-base">{data?.flavor_text_entry}</p>
      <form onSubmit={onSubmit} className="mt-2">
        <Input type="text" onChange={onChange} value={value} />
        <Button />
      </form>
    </section>
  );
};

export default Card;
