import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const DarkModeButton = () => {
  const [dark, setDark] = useState("");

  const toggleDarkMode = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
      setDark("");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark("dark");
    }
  };
  return (
    <div className="lg:w-1/6 flex lg:justify-end ml-5 lg:ml-0">
      <button
        className="flex items-center justify-center rounded py-1 px-4 focus:outline-none"
        onClick={toggleDarkMode}
      >
        {dark !== "dark" ? (
          <BsFillMoonStarsFill size={25} />
        ) : (
          <BsFillSunFill size={25} />
        )}
      </button>
    </div>
  );
};

export default DarkModeButton;
