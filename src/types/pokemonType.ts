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
  };
}
[];

export interface IPokemon {
  id: number;
  name: string;

  species: {
    name: string;
  };

  sprites: DreamWorld;
}
[];
export interface IPokemonSpec {
  id: number;
  name: string;
  color: {
    name: string;
  };

  names: {
    name: string;
    language: {
      name: string;
    };
  }[];

  genera: {
    genus: string;
    language: {
      name: string;
    };
  };

  flavor_text_entries: FlavorTextEntries;
}
