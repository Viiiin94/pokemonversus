import axios from "axios";
import { IPokemon, IPokemonSpec, IPokemonDetail } from "../types/pokemonType";

const create = axios.create();

export const pokemonAPI = async () => {
  const requestURL = `https://pokeapi.co/api/v2/pokemon/`;

  const { data } = await create.get<IPokemon>(requestURL);

  return data;
};

export const pokemonSpecAPI = async (id: number): Promise<IPokemonDetail> => {
  const requestURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const requestSpceURL = `https://pokeapi.co/api/v2/pokemon-species/${id}`;

  const { data: pokemons } = await create.get<IPokemon>(requestURL);
  const { data: specs } = await create.get<IPokemonSpec>(requestSpceURL);

  const koreanName =
    specs.names.find((item) => item.language.name === "ko")?.name ??
    pokemons.name;

  const koreanText =
    specs.flavor_text_entries.find((item) => item.language.name === "ko")
      ?.flavor_text ?? "";

  return {
    id: pokemons.id,
    name: pokemons.name,
    koreanName: koreanName,
    color: specs.color.name,
    image: pokemons.sprites.other.dream_world.front_default,
    flavor_text_entry: koreanText,
    types: pokemons.types.map((item) => item.type.name),
  };
};
