import {create} from "zustand"
import { IPokemon, IPokemonSpec } from "../types/pokemonType"

type State = {
    pokemons: IPokemon[]
    setPokemon: (pokemons: IPokemon[]) => void
}

const usePokemonStore = create<State>((set) => {
    pokemons: [],
    setPokemon: (pokemons) => set({pokemons})
}) 