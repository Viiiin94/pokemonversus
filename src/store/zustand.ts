import { create } from "zustand";
import { IPokemonDetail } from "../types/pokemonType";

const initailValue = {
  id: 0,
  name: "",
  koreanName: "",
  color: "",
  image: "",
  flavor_text_entry: "",
  types: [],
};

type PokeState = {
  pokemons: IPokemonDetail;
  setPokeSpec: (pokemons: IPokemonDetail) => void;
};

const usePokeStore1 = create<PokeState>((set) => ({
  pokemons: initailValue,
  setPokeSpec: (pokemons) => set({ pokemons }),
}));

const usePokeStore2 = create<PokeState>((set) => ({
  pokemons: initailValue,
  setPokeSpec: (pokemons) => set({ pokemons }),
}));

export { usePokeStore1, usePokeStore2 };
