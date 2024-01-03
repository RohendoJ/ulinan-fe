import { useState } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

export const LimitSelect = ({ onChange, options }) => {
  const [rotate, isRotate] = useState(false);

  return (
    <div className="relative flex w-[12rem] items-center justify-between border-2 border-[#2284DF]">
      <h1 className="flex items-center text-xl w-[50%] text-white font-bold bg-[#1A69B2] h-12 pl-3">
        ROWS
      </h1>
      <select
        onClick={() => isRotate(!rotate)}
        className="h-12 w-[50%] pl-5 appearance-none text-xl font-bold focus:outline-none"
        name="limit"
        id="limit"
        onChange={onChange}>
        {options?.map((option) => (
          <option
            key={option?.value}
            value={option?.value}
            className="text-black flex items-center">
            {option?.name}
          </option>
        ))}
      </select>
      <IoChevronForwardSharp
        className={`absolute duration-75 transition-all right-4 text-2xl pointer-events-none ${
          rotate ? "rotate-[270deg]" : "rotate-90"
        }`}
      />
    </div>
  );
};
