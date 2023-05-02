import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dark, setDark] = useState<string>("");

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

  useEffect(() => {
    // 처음에 다크모드인지 판단해서 뿌려주기 !! ( 나중에는 상태관리를 해도 괜찮습니다 ! )
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <header className="text-gray-600 body-font border-b-2 dark:bg-gray-800 dark:border-b-gray-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center dark:text-gray-300">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link to="/pokemonlist" className="mr-5 hover:text-gray-900">
            Pokemon List
          </Link>
        </nav>
        <a
          href="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 dark:text-gray-300"
        >
          <span className="ml-3 text-xl">Home</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 dark:bg-slate-700 dark:hover:bg-slate-600"
            onClick={toggleDarkMode}
          >
            {dark !== "dark" ? <>다크</> : <>태양</>}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
