import axios from "axios";

import {
  IPokemon,
  IPokemonSpec,
  IAllPokes,
  IPokemonDetail,
} from "../types/pokemonType";

const create = axios.create();

export const pokemonAPI = async (nextUrl?: string) => {
  const requestURL = nextUrl ? nextUrl : `https://pokeapi.co/api/v2/pokemon/`;

  const { data } = await create.get<IAllPokes>(requestURL);

  return {
    count: data.count,
    next: data.next,
    results: data.results.map((item) => item),
  };
};

export const pokemonDetailAPI = async (
  name: string
): Promise<IPokemonDetail> => {
  const requestURL = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const requestSpceURL = `https://pokeapi.co/api/v2/pokemon-species/${name}`;

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
    game_image: pokemons.sprites.front_default,
    image: pokemons.sprites.other["official-artwork"].front_default,
    flavor_text_entry: koreanText,
    types: pokemons.types.map((item) => item.type.name),
    stat_name: pokemons.stats.map((item) => item.stat.name),
    stat_value: pokemons.stats.map((item) => item.base_stat),
  };
};
