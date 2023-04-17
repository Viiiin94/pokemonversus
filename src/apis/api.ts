import axios from "axios";
import { IPokemon, IPokemonSpec } from "../types/pokemonType";

const create = axios.create();

export const pokemonAPI = async (): Promise<IPokemon> => {
  const requestURL = `https://pokeapi.co/api/v2/pokemon/4`;

  const { data } = await create.get<IPokemon>(requestURL);

  return data;
};

export const pokemonSpecAPI = async (): Promise<IPokemonSpec> => {
  const requestURL = `https://pokeapi.co/api/v2/pokemon-species/4`;

  const { data } = await create.get<IPokemonSpec>(requestURL);

  return data;
};
