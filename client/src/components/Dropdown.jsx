import { ArrowDown } from "../assets/images";
import { useToggle } from "../hooks/useToggle";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Dropdown = ({ setFont }) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const [fontName, setFontName] = useState("San Serif");
  return (
    <div className="relative">
      <button
        onClick={toggleIsOpen}
        className="flex items-center justify-between gap-4 pr-5 border-r-2 border-gray2 text-[14px] font-bold leading-[24px] md:text-[18px]"
      >
        {fontName}
        <ArrowDown />
      </button>
      {isOpen && (
        <div className="absolute w-[150px] h-[152px] right-0 top-9 flex flex-col justify-around items-start [&>*]:hover:cursor-pointer text-[18px] leading-[24px] font-bold p-1 bg-white rounded-lg drop-shadow-xl dark:bg-black2 dark:text-white dark:drop-shadow-xl dark:shadow-orange-500">
          <span
            className="font-inter"
            onClick={() => {
              setFont("font-inter");
              setFontName("San Serif");
              toggleIsOpen();
            }}
          >
            San Serif
          </span>
          <span
            className="font-lora"
            onClick={() => {
              setFont("font-lora");
              setFontName("Serif");
              toggleIsOpen();
            }}
          >
            Serif
          </span>
          <span
            className="font-inconsolata"
            onClick={() => {
              setFont("font-inconsolata");
              setFontName("Mono");
              toggleIsOpen();
            }}
          >
            Mono
          </span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
