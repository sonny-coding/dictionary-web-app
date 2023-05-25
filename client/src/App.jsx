import { useState } from "react";
import { Logo, Moon, MoonDark } from "./assets/images";
import ToggleSwitch from "./components/ToggleSwitch";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import { useToggle } from "./hooks/useToggle";
import DisplayWord from "./components/DisplayWord";
export default function App() {
  const [word, setWord] = useState("keyboard");
  const [font, setFont] = useState("font-inter");
  const [isDark, toggleDark] = useToggle();
  // const [isValidated, toggleValidated] = useToggle();
  // const [data, setData] = useState(null);
  // const [isError, setIsError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // const fetchWord = (word) => {
  //   const { data, error, isLoading } = useSWR(
  //     `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  //     fetcher
  //   );
  //   console.log(data[0]);
  //   setData(data[0]);
  //   setIsError(error);
  //   setIsLoading(isLoading);
  // };
  // if (isError) return <div>failed to load</div>;
  // if (isLoading) return <div>is loading...</div>;

  return (
    <div
      className={`${font} w-full flex flex-col justify-center items-center gap-5 p-2`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="logo">
          <Logo />
        </div>
        <div className="flex items-center justify-center gap-5">
          <Dropdown setFont={setFont} />
          <ToggleSwitch isDark={isDark} toggleDark={toggleDark} />
          {isDark ? <MoonDark /> : <Moon />}
        </div>
      </div>
      <div className="w-full">
        <Search
          word={word}
          setWord={setWord}
          // toggleValidated={toggleValidated}
        />
      </div>
      <div className="w-full"></div>
      {<DisplayWord word={word} />}
    </div>
  );
}
