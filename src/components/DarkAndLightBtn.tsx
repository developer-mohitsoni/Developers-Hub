"use client";

import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";
import { RiMoonClearLine } from "react-icons/ri";

type Props = {};

const DarkAndLightBtn = (props: Props) => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleDark = () => {
    if (resolvedTheme === "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm">{resolvedTheme === "light" ? "DARK" : "LIGHT"}</p>
      <button className="text-2xl" onClick={() => toggleDark()}>
        {resolvedTheme === "light" ? <RiMoonClearLine /> : <FaSun />}
      </button>
    </div>
  );
};

export default DarkAndLightBtn;
