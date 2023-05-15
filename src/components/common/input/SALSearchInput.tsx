import { ChangeEvent, FormEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { inputState } from "../../../store/inputStore";
import { useRecoilState } from "recoil";

// StartAndLegendPokemonSearchInput
const SALSearchInput = () => {
  const [value, setValue] = useRecoilState(inputState);
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      navigate(`/pokemoninfo/name=${value}`);
    },
    [value, navigate]
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [value, navigate]
  );

  return (
    <form className="flex lg:w-1/6 ml-5 lg:ml-0" onSubmit={onSubmit}>
      <input
        className="border-spacing-1 border-2 rounded-md dark:text-black"
        type="text"
        placeholder="스타팅 & 전설의 포켓몬"
        value={value}
        onChange={onChange}
      />
      <button className="hidden" type="submit"></button>
    </form>
  );
};

export default SALSearchInput;
