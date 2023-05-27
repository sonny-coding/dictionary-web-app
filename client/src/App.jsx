import { useState, useEffect } from "react";
import { Logo, Moon, MoonDark } from "./assets/images";
import ToggleSwitch from "./components/ToggleSwitch";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import { useToggle } from "./hooks/useToggle";
import DisplayWord from "./components/DisplayWord";
export default function App() {
  const [word, setWord] = useState("keyboard");
  const [font, setFont] = useState(
    localStorage.getItem("current-font") || "font-inter"
  );
  const [isDark, toggleDark] = useToggle(
    localStorage.getItem("current-theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("current-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("current-font", font);
  }, [font]);
  return (
    <div className={`${font} ${isDark ? "dark bg-black" : ""}`}>
      <div
        className={`w-full max-w-[736px] mx-auto min-h-screen h-auto flex flex-col justify-start items-center gap-3 p-6 md:px-10 dark:bg-black1 dark:text-white`}
      >
        <div className="flex items-center justify-between w-full ">
          <div className="logo">
            <Logo className="hover:cursor-pointer" />
          </div>
          <div className="flex items-center justify-center gap-5">
            <Dropdown setFont={setFont} font={font} />
            <ToggleSwitch isDark={isDark} toggleDark={toggleDark} />
            <div className="hover:cursor-pointer">
              {isDark ? <MoonDark /> : <Moon />}
            </div>
          </div>
        </div>
        <div className="w-full">
          <Search word={word} setWord={setWord} />
        </div>
        <div className="w-full"></div>
        {<DisplayWord word={word} />}
      </div>
    </div>
  );
}
