import { useState } from "react";
import { Logo, Moon, MoonDark } from "./assets/images";
import ToggleSwitch from "./components/ToggleSwitch";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

export default function App() {
  const [isDark, setDark] = useState(false);
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 p-2">
      <div className="w-full flex justify-between items-center">
        <div className="logo">
          <Logo />
        </div>
        <div className="flex justify-center items-center gap-5">
          <Dropdown />
          <ToggleSwitch isDark={isDark} setDark={setDark} />
          {isDark ? <MoonDark /> : <Moon />}
        </div>
      </div>
      <div className="w-full">
        <Search />
      </div>
    </div>
  );
}
