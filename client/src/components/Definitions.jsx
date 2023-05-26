/* eslint-disable react/prop-types */
// import React from "react";
const Definitions = ({ partOfSpeech, definitions, synonyms }) => {
  // const items = ;
  return (
    <div className="flex flex-col items-start justify-start mt-5">
      <div className="flex items-center w-full justify-normal after:w-full after:h-[1px] after:bg-gray2 dark:after:bg-black4  after:ml-3">
        <span className="text-[18px] leading-[19px] md:text-[24px] md:leading-[25px] font-bold italic">
          {partOfSpeech}
        </span>
        {/* <div className="w-full border-top-[1px] border-black2"></div> */}
      </div>

      <span className="text-[16px] leading-[17px] md:text-[20px] md:leading-[21px] font-normal text-gray1 mt-8">
        Meaning
      </span>
      <ul className="text-[15px] leading-[24px] md:text-[15px] md:leading-[24px] font-normal text-purple list-inside list-disc">
        {definitions.map((item, index) => (
          <li className=" first:mt-[17px] mt-[13px]" key={index}>
            <span className="text-black2 dark:text-white">{item}</span>
          </li>
        ))}
      </ul>
      <div className="w-full flex items-start justify-start text-[16px] leading-[20px] md:text-[20px] md:leading-[21px] lg:leading-[26px] flex-wrap mt-6">
        <span className="mr-10 font-normal text-gray1">Synonyms</span>
        {synonyms.map((each, index) => (
          <span className="inline font-bold text-purple" key={index}>
            {each}
            {index + 1 < synonyms.length && ","}&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Definitions;
