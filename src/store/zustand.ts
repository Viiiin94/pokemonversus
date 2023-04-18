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

// 포켓몬 디테일
type PokeState1 = {
  pokemons1: IPokemonDetail;
  setPokeSpec: (pokemons1: IPokemonDetail) => void;
};

type PokeState2 = {
  pokemons2: IPokemonDetail;
  setPokeSpec: (pokemons2: IPokemonDetail) => void;
};

const usePokeStore1 = create<PokeState1>((set) => ({
  pokemons1: initailValue,
  setPokeSpec: (pokemons1) => set({ pokemons1 }),
}));

const usePokeStore2 = create<PokeState2>((set) => ({
  pokemons2: initailValue,
  setPokeSpec: (pokemons2) => set({ pokemons2 }),
}));

// 인풋밸류

export { usePokeStore1, usePokeStore2 };
