import Normal from "../assets/icons/normal.svg";
import Fire from "../assets/icons/fire.svg";
import Water from "../assets/icons/water.svg";
import Electric from "../assets/icons/electric.svg";
import Grass from "../assets/icons/grass.svg";
import Ice from "../assets/icons/ice.svg";
import Fighting from "../assets/icons/fighting.svg";
import Ground from "../assets/icons/ground.svg";
import Flying from "../assets/icons/flying.svg";
import Poison from "../assets/icons/poison.svg";
import Psychic from "../assets/icons/psychic.svg";
import Bug from "../assets/icons/bug.svg";
import Dark from "../assets/icons/dark.svg";
import Rock from "../assets/icons/rock.svg";
import Ghost from "../assets/icons/ghost.svg";
import Dragon from "../assets/icons/dragon.svg";
import Steel from "../assets/icons/steel.svg";
import Fairy from "../assets/icons/fairy.svg";

type PokemonType = {
  [key: string]: {
    name: string;
    color: string;
    icon: string;
  };
};

export const pokemonType: PokemonType = {
  normal: {
    name: "노말",
    color: "#A8A878",
    icon: Normal,
  },
  fire: {
    name: "불꽃",
    color: "#F08030",
    icon: Fire,
  },
  water: {
    name: "물",
    color: "#6890F0",
    icon: Water,
  },
  electric: {
    name: "전기",
    color: "#F8D030",
    icon: Electric,
  },
  grass: {
    name: "풀",
    color: "#78C850",
    icon: Grass,
  },
  ice: {
    name: "얼음",
    color: "#98D8D8",
    icon: Ice,
  },
  fighting: {
    name: "격투",
    color: "#C03028",
    icon: Fighting,
  },
  poison: {
    name: "독",
    color: "#A040A0",
    icon: Poison,
  },
  ground: {
    name: "땅",
    color: "#E0C068",
    icon: Ground,
  },
  flying: {
    name: "비행",
    color: "#A890F0",
    icon: Flying,
  },
  psychic: {
    name: "에스퍼",
    color: "#F85888",
    icon: Psychic,
  },
  bug: {
    name: "벌레",
    color: "#A8B820",
    icon: Bug,
  },
  dark: {
    name: "악",
    color: "#705848",
    icon: Dark,
  },
  rock: {
    name: "바위",
    color: "#B8A038",
    icon: Rock,
  },
  ghost: {
    name: "고스트",
    color: "#705898",
    icon: Ghost,
  },
  dragon: {
    name: "드래곤",
    color: "#7038F8",
    icon: Dragon,
  },
  steel: {
    name: "강철",
    color: "#B8B8D0",
    icon: Steel,
  },
  fairy: {
    name: "페어리",
    color: "#EE99AC",
    icon: Fairy,
  },
};
