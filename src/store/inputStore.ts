import { atom, selector } from "recoil";
import { pokemonDetailAPI } from "../apis/api";
import {
  startingPokemon,
  legendPokemon,
} from "../utils/startingAndLegendPokemon";

export const inputState = atom<string>({
  key: "inputPokemon",
  default: "",
});

export const filterKoreanNameState = selector({
  key: "filterKoreanNameState",
  get: async ({ get }) => {
    const koName = get(inputState).trim();
    if (koName.length === 0) return null;

    const pokemonList = { ...startingPokemon, ...legendPokemon };
    const pokemon = pokemonList[koName];

    if (!pokemon) {
      throw new Error(
        `해당 ${pokemon}은/는 스타팅, 전설 및 환상의 포켓몬이 아닙니다.`
      );
    }

    const { id, name, koreanName, flavor_text_entry, color, image, types } =
      await pokemonDetailAPI(pokemon.english_name);

    return {
      id,
      name,
      koreanName,
      flavor_text_entry,
      color,
      image,
      types,
    };
  },
});
