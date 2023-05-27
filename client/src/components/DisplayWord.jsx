/* eslint-disable react/prop-types */
import { useWord } from "../hooks/useWord";
import { IconPlay } from "../assets/images";
import { v4 as uuidv4 } from "uuid";
import Definitions from "./Definitions";
import { IconNewWindow } from "../assets/images";
import Error from "./Error";

// eslint-disable-next-line react/prop-types
const DisplayWord = ({ word }) => {
  const { data, error, isLoading } = useWord(word);
  if (error) return <Error />;
  if (isLoading) return <div>loading...</div>;

  const phonetics = data[0].phonetics.find((item) => item.text && item.audio) ||
    data[0].phonetics.find((item) => item.text) || { text: "", audio: "" };

  const playAudio = () => {
    const audio = new Audio(phonetics.audio);
    audio.play();
  };
  const meanings = data[0].meanings.map((each) => {
    return {
      id: uuidv4(),
      partOfSpeech: each.partOfSpeech,
      definitions: each.definitions.map((each) => each.definition),
      synonyms: each.synonyms,
    };
  });
  const sourceUrl = data[0].sourceUrls;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-start">
          <span className="font-bold text-[32px] leading-[33px] md:text-[64px] md:leading-[67px] lg:leading-[82px]">
            {data[0].word}
          </span>
          <span className="font-normal text-[18px] leading-[24px] md:text-[24px] md:leading-[29px] text-purple mt-2 md:mt-3">
            {phonetics.text}
          </span>
        </div>
        <div className="flex items-center flex-normal">
          {phonetics.audio && (
            <button onClick={playAudio}>
              <IconPlay />
            </button>
          )}
        </div>
      </div>
      {meanings.map((each) => (
        <Definitions
          key={each.id}
          partOfSpeech={each.partOfSpeech}
          definitions={each.definitions}
          synonyms={each.synonyms}
        />
      ))}
      <div className="flex flex-col w-full text-[14px] font-normal leading-[18px] underline underline-offset-4 border-t-[1px] border-gray2 mt-8 mb-8">
        <span className="mt-6 text-gray1">Source</span>
        <div className="flex items-center mt-2 justify-normal">
          <span>{sourceUrl}</span>
          <IconNewWindow className="ml-1" />
        </div>
      </div>
    </div>
  );
};

export default DisplayWord;
