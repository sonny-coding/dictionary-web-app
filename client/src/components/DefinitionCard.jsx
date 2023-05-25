/* eslint-disable react/prop-types */
// import React from "react";
const DefinitionCard = ({ partOfSpeech, definitions }) => {
  // const items = ;
  return (
    <div className="flex flex-col items-start justify-start mt-5">
      <div className="flex items-center w-full justify-normal after:w-full after:h-[1px] after:bg-gray2 after:ml-3">
        <span className="text-[18px] leading-[22px] font-bold italic">
          {partOfSpeech}
        </span>
        {/* <div className="w-full border-top-[1px] border-black2"></div> */}
      </div>

      <span className="text-[16px] leading-[19px] font-normal text-gray1 mt-8">
        meaning
      </span>
      <ul className="text-[15px] leading-[24px] font-normal text-purple list-inside list-disc">
        {definitions.map((item, index) => (
          <li className=" first:mt-[17px] mt-[13px]" key={index}>
            <span className="text-black2">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DefinitionCard;
