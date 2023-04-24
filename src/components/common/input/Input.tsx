import React, { ChangeEvent } from "react";
import {} from "../../../store/zustand";

interface IInput {
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

const Input = (inputProps: IInput) => {
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
      >
        포켓몬 이름작성
      </label>
      <input
        type={inputProps.type}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="포켓몬"
        value={inputProps.value}
        onChange={inputProps.onChange}
        required
      />
    </div>
  );
};

export default Input;
