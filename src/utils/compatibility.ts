export const pokemonType: Record<string, string> = {
  normal: "노말",
  fire: "불꽃",
  water: "물",
  electric: "전기",
  grass: "풀",
  ice: "얼음",
  fighting: "격투",
  poison: "독",
  ground: "땅",
  flying: "비행",
  psychic: "에스퍼",
  bug: "벌레",
  dark: "악",
  rock: "바위",
  ghost: "고스트",
  dragon: "드래곤",
  steel: "강철",
  fairy: "페어리",
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
