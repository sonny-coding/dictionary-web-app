import { useState } from "react";
import { ArrowDown } from "../assets/images";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center gap-4 pr-5 border-r-2 border-gray2"
      >
        Sans Serif
        <ArrowDown />
      </button>
      {isOpen && (
        <div className="absolute w-[150px] h-[152px] right-0 top-7 flex flex-col justify-around items-start [&>*]:hover:cursor-pointer text-[18px] leading-[24px] font-bold p-1 rounded-md">
          <span className="font-inter">San Serif</span>
          <span className="font-lora">Serif</span>
          <span className="font-inconsolata">Mono</span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
