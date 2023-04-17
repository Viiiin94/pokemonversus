import { create } from "zustand";
import { IPokemon, IPokemonSpec } from "../types/pokemonType";

type PokeState = {
  pokemons: IPokemon[];
  setPokemon: (pokemons: IPokemon[]) => void;
};

type PokeSpecState = {
  pokeSpecs: IPokemonSpec[];
  setPokeSpec: (pokeSpecs: IPokemonSpec[]) => void;
};

const usePokemonStore = create<PokeState>((set) => ({
  pokemons: [],
  setPokemon: (pokemons) => set({ pokemons }),
}));

const usePokeSpecStore = create<PokeSpecState>((set) => ({
  pokeSpecs: [],
  setPokeSpec: (pokeSpecs) => set({ pokeSpecs }),
}));

export { usePokemonStore, usePokeSpecStore };
