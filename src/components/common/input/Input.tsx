import { ChangeEvent, FormEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { inputState } from "../../../store/inputStore";
import { useRecoilState } from "recoil";

const Input = () => {
  const [value, setValue] = useRecoilState(inputState);
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      navigate(`/${value}`);
    },
    [value]
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form className="flex lg:w-1/6 ml-5 lg:ml-0" onSubmit={onSubmit}>
      <input
        className="border-spacing-1 border-2 rounded-md"
        type="text"
        onChange={onChange}
      />
      <button className="hidden" type="submit"></button>
    </form>
  );
};

export default Input;
