type PokemonType = {
  [key: string]: {
    name: string;
    color: string;
    emoticon: string;
  };
};

export const pokemonType: PokemonType = {
  normal: {
    name: "노말",
    color: "#A8A878",
    emoticon: "",
  },
  fire: {
    name: "불꽃",
    color: "#F08030",
    emoticon: "",
  },
  water: {
    name: "물",
    color: "#6890F0",
    emoticon: "",
  },
  electric: {
    name: "전기",
    color: "#F8D030",
    emoticon: "",
  },
  grass: {
    name: "풀",
    color: "#78C850",
    emoticon: "",
  },
  ice: {
    name: "얼음",
    color: "#98D8D8",
    emoticon: "",
  },
  fighting: {
    name: "격투",
    color: "#C03028",
    emoticon: "",
  },
  poison: {
    name: "독",
    color: "#A040A0",
    emoticon: "",
  },
  ground: {
    name: "땅",
    color: "#E0C068",
    emoticon: "",
  },
  flying: {
    name: "비행",
    color: "#A890F0",
    emoticon: "",
  },
  psychic: {
    name: "에스퍼",
    color: "#F85888",
    emoticon: "",
  },
  bug: {
    name: "벌레",
    color: "#A8B820",
    emoticon: "",
  },
  dark: {
    name: "악",
    color: "#705848",
    emoticon: "",
  },
  rock: {
    name: "바위",
    color: "#B8A038",
    emoticon: "",
  },
  ghost: {
    name: "고스트",
    color: "#705898",
    emoticon: "",
  },
  dragon: {
    name: "드래곤",
    color: "#7038F8",
    emoticon: "",
  },
  steel: {
    name: "강철",
    color: "#B8B8D0",
    emoticon: "",
  },
  fairy: {
    name: "페어리",
    color: "#EE99AC",
    emoticon: "",
  },
};

type CompatibilityType = {
  [key in keyof typeof pokemonType]: {
    goodEffect: Array<keyof typeof pokemonType>;
    badEffect: Array<keyof typeof pokemonType>;
    nonEffect: Array<keyof typeof pokemonType>;
  };
};

export const pokemonCompatibility: CompatibilityType = {
  normal: {
    goodEffect: [],
    badEffect: ["rock", "steel"],
    nonEffect: ["ghost"],
  },
  fire: {
    goodEffect: ["grass", "ice", "bug", "steel"],
    badEffect: ["fire", "water", "rock", "dragon"],
    nonEffect: [],
  },
  water: {
    goodEffect: ["fire", "ground", "rock"],
    badEffect: ["water", "grass", "dragon"],
    nonEffect: [],
  },
  electric: {
    goodEffect: ["water", "flying"],
    badEffect: ["electric", "grass", "dragon"],
    nonEffect: ["ground"],
  },
  grass: {
    goodEffect: ["water", "ground", "rock"],
    badEffect: ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"],
    nonEffect: [],
  },
  ice: {
    goodEffect: ["grass", "ground", "flying", "dragon"],
    badEffect: ["fire", "water", "ice", "steel"],
    nonEffect: [],
  },
  fighting: {
    goodEffect: ["normal", "ice", "rock", "dark", "steel"],
    badEffect: ["poison", "flying", "psychic", "bug", "fairy"],
    nonEffect: ["ghost"],
  },
  poison: {
    goodEffect: ["grass", "fairy"],
    badEffect: ["poison", "ground", "rock", "ghost"],
    nonEffect: ["steel"],
  },
  ground: {
    goodEffect: ["fire", "electric", "poison", "rock", "steel"],
    badEffect: ["grass", "bug"],
    nonEffect: ["flying"],
  },
  flying: {
    goodEffect: ["grass", "fighting", "bug"],
    badEffect: ["electric", "rock", "steel"],
    nonEffect: [],
  },
  psychic: {
    goodEffect: ["fighting", "poison"],
    badEffect: ["psychic", "steel"],
    nonEffect: ["dark"],
  },
  bug: {
    goodEffect: ["grass", "psychic"],
    badEffect: [
      "fire",
      "fighting",
      "poison",
      "flying",
      "ghost",
      "steel",
      "fairy",
    ],
    nonEffect: ["ground"],
  },
  dark: {
    goodEffect: ["psychic", "ghost"],
    badEffect: ["fighting", "dark", "fairy"],
    nonEffect: [],
  },
  rock: {
    goodEffect: ["fire", "ice", "flying", "bug"],
    badEffect: ["fighting", "ground", "steel"],
    nonEffect: [],
  },
  ghost: {
    goodEffect: ["psychic", "ghost"],
    badEffect: ["dark"],
    nonEffect: ["normal"],
  },
  dragon: {
    goodEffect: ["dragon"],
    badEffect: ["steel"],
    nonEffect: ["fairy"],
  },
  steel: {
    goodEffect: ["ice", "rock", "fairy"],
    badEffect: ["fire", "water", "electric", "steel"],
    nonEffect: [],
  },
  fairy: {
    goodEffect: ["fighting", "dragon", "dark"],
    badEffect: ["fire", "poison", "steel"],
    nonEffect: [],
  },
};
