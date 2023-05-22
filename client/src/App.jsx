import { useState } from "react";
import { Logo, Moon, MoonDark } from "./assets/images";
import ToggleSwitch from "./components/ToggleSwitch";

export default function App() {
  const [isDark, setDark] = useState(false);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full flex justify-between items-center">
        <div className="logo">
          <Logo />
        </div>
        <div className="flex justify-center items-center gap-2">
          <div>Sans Serif</div>

          <ToggleSwitch isDark={isDark} setDark={setDark} />

          {isDark ? <MoonDark /> : <Moon />}
        </div>
      </div>
    </div>
  );
}
