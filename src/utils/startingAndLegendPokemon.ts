type pokemonType = {
  [key: string]: {
    id: number;
    enName: string;
  };
};

export const startingPokemon: pokemonType = {
  //1세대
  이상해씨: { id: 1, enName: "bulbasaur" },
  파이리: { id: 4, enName: "charmander" },
  꼬부기: { id: 7, enName: "squirtle" },
  //2세대
  치코리타: { id: 152, enName: "chikorita" },
  브케인: { id: 155, enName: "cyndaquil" },
  리아코: { id: 158, enName: "totodile" },
  //3세대
  나무지기: { id: 252, enName: "treecko" },
  아차모: { id: 255, enName: "torchic" },
  물짱이: { id: 258, enName: "mudkip" },
  //4세대
  모부기: { id: 387, enName: "turtwig" },
  불꽃숭이: { id: 390, enName: "chimchar" },
  팽도리: { id: 393, enName: "piplup" },
  //5세대
};

export const legendPokemon: pokemonType = {
  //1세대
  프리져: { id: 144, enName: "articuno" },
  썬더: { id: 145, enName: "zapdos" },
  파이어: { id: 146, enName: "moltres" },
  뮤츠: { id: 150, enName: "mewtwo" },
  뮤: { id: 151, enName: "mew" },
  //2세대
  라이코: { id: 243, enName: "raiko" },
  앤테이: { id: 244, enName: "aentei" },
  스이쿤: { id: 245, enName: "seuikun" },
  루기아: { id: 249, enName: "lugia" },
  칠색조: { id: 250, enName: "ho-oh" },
  세레비: { id: 251, enName: "celebi" },
  //3세대
  레지락: { id: 377, enName: "regirock" },
  레지아이스: { id: 378, enName: "regice" },
  레지스틸: { id: 379, enName: "registeel" },
  라티아스: { id: 380, enName: "latias" },
  라티오스: { id: 381, enName: "latios" },
  카이오가: { id: 382, enName: "kyogre" },
  그란돈: { id: 383, enName: "groudon" },
  레쿠쟈: { id: 384, enName: "rayquaza" },
  지라치: { id: 385, enName: "jirachi" },
  테오키스: { id: 386, enName: "deoxys" },
  //4세대
  디아루가: { id: 483, enName: "dialga" },
  펄기아: { id: 484, enName: "palkia" },
  히드런: { id: 485, enName: "heatran" },
  레지기가스: { id: 486, enName: "regigigas" },
  기라티나: { id: 487, enName: "giratina" },
  크레세리아: { id: 488, enName: "cresselia" },
  피오네: { id: 489, enName: "phione" },
  마나피: { id: 490, enName: "manaphy" },
  다크라이: { id: 491, enName: "darkrai" },
  쉐이미: { id: 492, enName: "shaymin" },
  아르세우스: { id: 493, enName: "arceus" },
  //5세대
};
