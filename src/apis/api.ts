import axios from "axios";
import { IPokemon, IPokemonSpec } from "../types/pokemonType";

const create = axios.create();

interface IPokemonDetail {
  id: number;
  name: string;
  koreanName: string;
  color: string;
  image: string;
}

export const pokemonAPI = async () => {
  const requestURL = `https://pokeapi.co/api/v2/pokemon/`;

  const { data } = await create.get<IPokemon>(requestURL);

  return data;
};

export const pokemonSpecAPI = async (name: string): Promise<IPokemonDetail> => {
  const requestURL = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const requestSpceURL = `https://pokeapi.co/api/v2/pokemon-species/${name}`;

  const { data: pokemons } = await create.get<IPokemon>(requestURL);
  const { data: pokemonsSpec } = await create.get<IPokemonSpec>(requestSpceURL);

  const koreanName =
    pokemonsSpec.names.find((item) => item.language.name === "ko")?.name ??
    pokemons.name;

  return {
    id: pokemons.id,
    name: pokemons.name,
    koreanName: koreanName,
    color: pokemonsSpec.color.name,
    image: pokemons.sprites.other.dream_world.front_default,
  };
};
