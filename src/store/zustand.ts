import { create } from "zustand";
import { IPokemonDetail } from "../types/pokemonType";

// 포켓몬 기본 + 스펙 정보 합산
type PokemonDetailState = {
  pokemonDetail: IPokemonDetail;
  setPokemonDetail: (pokemonDetail: IPokemonDetail) => void;
};

export const pokemonDetailStore = create<PokemonDetailState>((set) => ({
  pokemonDetail: {
    id: 0,
    name: "",
    koreanName: "",
    color: "",
    image: "",
    flavor_text_entry: "",
    types: [],
  },
  setPokemonDetail: (pokemonDetail) => set({ pokemonDetail }),
}));
