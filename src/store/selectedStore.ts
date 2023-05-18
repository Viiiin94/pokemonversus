import { atom } from "recoil";

export const selectedState = atom<string | null>({
  key: "selectPokemonType",
  default: null,
});
