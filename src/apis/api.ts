import axios from "axios";

const create = axios.create();

export const pokemonAPI = async (): Promise<any> => {
  const requestURL = `https://pokeapi.co/api/v2/pokemon/`;

  const { data } = await create.get(requestURL);

  return data;
};

export const pokemonSpecAPI = async (): Promise<any> => {
  const requestURL = `https://pokeapi.co/api/v2/pokemon-species/`;

  const { data } = await create.get(requestURL);

  return data;
};
