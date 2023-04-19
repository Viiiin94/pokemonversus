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

type AllPokeState = {
  allPokes: {
    count: number;
    results: {
      name: string;
    }[];
  };
  setAllPokes: (allPokes: {
    count: number;
    results: {
      name: string;
    }[];
  }) => void;
};

const useAllPokeStore = create<AllPokeState>((set) => ({
  allPokes: {
    count: 0,
    results: [
      {
        name: "",
      },
    ],
  },
  setAllPokes: (allPokes) => set({ allPokes }),
}));

// 포켓몬 디테일
type PokeState = {
  pokemons: IPokemonDetail;
  setPokeSpec: (pokemons: IPokemonDetail) => void;
};

const usePokeStore1 = create<PokeState>((set) => ({
  pokemons: initailValue,
  setPokeSpec: (pokemons) => set({ pokemons }),
}));

// 인풋밸류
type InputState = {
  value: number;
  setValue: (value: number) => void;
};

const useInputStore = create<InputState>((set) => ({
  value: 0,
  setValue: (value) => set({ value }),
}));

export { usePokeStore1, useInputStore, useAllPokeStore };
