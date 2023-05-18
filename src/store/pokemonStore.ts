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
        url: "",
      },
    ],
  },
});

export const pokemonDetailState = atom<IPokemonDetail>({
  key: "pokemonDetail",
  default: {
    id: 1,
    name: "",
    koreanName: "",
    color: "",
    game_image: "",
    image: "",
    flavor_text_entry: "",
    types: [],
    stat_name: [],
    stat_value: [],
  },
});
