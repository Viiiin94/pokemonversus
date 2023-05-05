import { ChangeEvent, FormEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { inputState } from "../../../store/inputStore";
import { useRecoilState } from "recoil";

const Input = () => {
  const [value, setValue] = useRecoilState(inputState);
  const navigate = useNavigate();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const onSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    navigate(`/cardlist/${value}`);
  }, []);

  return (
    <form className="flex lg:w-1/6 ml-5 lg:ml-0">
      <input type="text" onChange={onChange} />
    </form>
  );
};

export default Input;
