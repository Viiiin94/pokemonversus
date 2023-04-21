import {
  ChangeEvent,
  FormEvent,
  lazy,
  useCallback,
  useEffect,
  useState,
} from "react";
import Input from "../common/input/Input";
import Button from "../common/button/Button";
import { useQuery } from "react-query";
import { pokemonDetailAPI } from "../../apis/api";
const Image = lazy(() => import("../common/image/Image"));

const Card = () => {
  const [value, setValue] = useState<string>("");

  let number: number = Math.floor(Math.random() * 1000) + 1;

  const { data, isLoading } = useQuery(["pokemonDetail"], () =>
    pokemonDetailAPI(number)
  );

  const isMatching = useCallback(() => {
    value === data?.koreanName ? (number = data.id) : true;
  }, [value]);

  useEffect(() => {
    isMatching();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <article className="sm:w-1/2 mb-10 px-4">
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
    </article>
  );
};

export default Card;
