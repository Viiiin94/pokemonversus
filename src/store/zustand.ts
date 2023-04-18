import { create } from "zustand";
import { IPokemonSpec } from "../types/pokemonType";


type PokeSpecState = {
  pokeSpecs: IPokemonSpec;
  setPokeSpec: (pokeSpecs: IPokemonSpec) => void;
};


const usePokeSpecStore = create<PokeSpecState>((set) => ({
  pokeSpecs: ,
  setPokeSpec: (pokeSpecs) => set({ pokeSpecs }),
}));

export {  usePokeSpecStore };
