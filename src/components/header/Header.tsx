import { Link } from "react-router-dom";
import DarkModeButton from "../common/button/DarkModeButton";
import SALSearchInput from "../common/input/SALSearchInput";
import FilteredPokemonType from "./FilteredPokemonType";

const Header = () => {
  return (
    <header className="text-gray-600 body-font dark:bg-gray-800 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center dark:text-gray-300 border-b-2 dark:border-b-gray-600">
        <nav className="flex lg:w-1/6 lg:justify-start flex-wrap items-center text-base lg:mr-auto md:ml-auto sm:my-2 xs:my-2 xs:justify-center">
          <Link
            to="/pokemonlist"
            className="mr-5 hover:text-gray-900 dark:hover:text-gray-50"
          >
            Pokemon List
          </Link>
        </nav>
        <a
          href="/"
          className="flex order-first lg:order-none lg:w-2/6 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-0 md:mb-0 dark:text-gray-300"
        >
          <span className="ml-3 text-xl">Home</span>
        </a>
        <SALSearchInput />
        <DarkModeButton />
      </div>

      <FilteredPokemonType />
    </header>
  );
};

export default Header;
