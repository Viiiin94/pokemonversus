interface DreamWorld {
  other: {
    dream_world: {
      front_default: string;
    };
  };
}

interface FlavorTextEntries {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
}
[];

export interface IPokemon {
  id: number;
  name: string;

  species: {
    name: string;
    url: string;
  };

  sprites: DreamWorld;
}

export interface IPokemonSpec {
  id: number;
  name: string;
  capture_rate: number;
  is_legendary: boolean;
  is_mythical: boolean;

  color: {
    name: string;
    url: string;
  };

  names: {
    name: string;
    url: string;
  }[];

  genera: {
    genus: string;
    language: {
      name: string;
      url: string;
    };
  };

  flavor_text_entries: FlavorTextEntries;
}
