import { atom } from "recoil";
import { IAllPokes, IPokemonDetail } from "../types/pokemonType";

export const pokemonState = atom<IAllPokes>({
  key: "pokemons",
  default: {
    count: 0,
    next: "",
    results: [
      {
        name: "",
      },
    ],
  },
});

export const pokemonDetailState = atom<IPokemonDetail>({
  key: "pokemonDetail",
  default: {
    id: 0,
    name: "",
    koreanName: "",
    color: "",
    image: "",
    flavor_text_entry: "",
    types: [],
  },
});
