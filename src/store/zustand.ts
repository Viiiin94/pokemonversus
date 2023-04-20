import { create } from "zustand";
import { IAllPokes, IPokemon, IPokemonDetail } from "../types/pokemonType";

// 모든 포켓몬
type AllPokemonState = {
  allPokemon: IAllPokes;
  setAllPokemon: (allPokemon: IAllPokes) => void;
};

export const allPokemonStore = create<AllPokemonState>((set) => ({
  allPokemon: {
    count: 0,
    next: "",
    results: [
      {
        name: "",
      },
    ],
  },
  setAllPokemon: (allPokemon) => set({ allPokemon }),
}));

// 포켓몬 기본 정보
type PokemonState = {
  pokemons: IPokemon[];
  setPokemons: (pokemons: IPokemon[]) => void;
};

export const pokemonStore = create<PokemonState>((set) => ({
  pokemons: [],
  setPokemons: (pokemons) => set({ pokemons }),
}));

// 포켓몬 기본 + 스펙 정보 합산
type PokemonDetailState = {
  pokemonDetail: IPokemonDetail[];
  setPokemonDetail: (pokemonDetail: IPokemonDetail[]) => void;
};

export const pokemonDetailStore = create<PokemonDetailState>((set) => ({
  pokemonDetail: [],
  setPokemonDetail: (pokemonDetail) => set({ pokemonDetail }),
}));
