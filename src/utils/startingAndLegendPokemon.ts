type pokemonType = {
  [key: string]: {
    id: number;
    enName: string;
  };
};

//스타팅
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
  주리비얀: { id: 495, enName: "snivy" },
  뚜꾸리: { id: 498, enName: "tepig" },
  수댕이: { id: 501, enName: "oshawott" },
  //6세대
  도치마론: { id: 650, enName: "chespin" },
  푸호꼬: { id: 653, enName: "fennekin" },
  개구마르: { id: 656, enName: "froakie" },
  //7세대
  나몰빼미: { id: 722, enName: "rowlet" },
  냐오불: { id: 725, enName: "litten" },
  누리공: { id: 728, enName: "popplio" },
  //8세대
  흥나숭: { id: 810, enName: "grookey" },
  염버니: { id: 813, enName: "scorbunny" },
  울머기: { id: 816, enName: "sobble" },
  //9세대
  나오하: { id: 906, enName: "sprigatito" },
  뜨아거: { id: 909, enName: "fuecoco" },
  꾸왁스: { id: 912, enName: "quaxly" },
};

//준전설, 전설, 초전설 및 환상의 포켓몬
export const legendPokemon: pokemonType = {
  //1세대 전설
  프리져: { id: 144, enName: "articuno" },
  썬더: { id: 145, enName: "zapdos" },
  파이어: { id: 146, enName: "moltres" },
  뮤츠: { id: 150, enName: "mewtwo" },
  //1세대 환상
  뮤: { id: 151, enName: "mew" },

  //2세대 전설
  라이코: { id: 243, enName: "raiko" },
  앤테이: { id: 244, enName: "aentei" },
  스이쿤: { id: 245, enName: "seuikun" },
  루기아: { id: 249, enName: "lugia" },
  칠색조: { id: 250, enName: "ho-oh" },
  //2세대 환상
  세레비: { id: 251, enName: "celebi" },

  //3세대 전설
  레지락: { id: 377, enName: "regirock" },
  레지아이스: { id: 378, enName: "regice" },
  레지스틸: { id: 379, enName: "registeel" },
  라티아스: { id: 380, enName: "latias" },
  라티오스: { id: 381, enName: "latios" },
  카이오가: { id: 382, enName: "kyogre" },
  그란돈: { id: 383, enName: "groudon" },
  레쿠쟈: { id: 384, enName: "rayquaza" },
  //3세대 환상
  지라치: { id: 385, enName: "jirachi" },
  테오키스: { id: 386, enName: "deoxys" },

  //4세대 전설
  유크시: { id: 480, enName: "uxie" },
  엠라이트: { id: 481, enName: "mesprit" },
  아그놈: { id: 482, enName: "azelf" },
  디아루가: { id: 483, enName: "dialga" },
  펄기아: { id: 484, enName: "palkia" },
  히드런: { id: 485, enName: "heatran" },
  레지기가스: { id: 486, enName: "regigigas" },
  기라티나: { id: 487, enName: "giratina" },
  크레세리아: { id: 488, enName: "cresselia" },
  //4새대 환상
  피오네: { id: 489, enName: "phione" },
  마나피: { id: 490, enName: "manaphy" },
  다크라이: { id: 491, enName: "darkrai" },
  쉐이미: { id: 492, enName: "shaymin" },
  아르세우스: { id: 493, enName: "arceus" },

  //5세대 전설
  코바르온: { id: 638, enName: "cobalion" },
  테라키온: { id: 639, enName: "terrakion" },
  비리디온: { id: 640, enName: "virizion" },
  토네로스: { id: 641, enName: "tornadus" },
  볼트로스: { id: 642, enName: "thundurus" },
  레시라무: { id: 643, enName: "reshiram" },
  제크로무: { id: 644, enName: "zekrom" },
  랜드로스: { id: 645, enName: "landorus" },
  큐레무: { id: 646, enName: "kyurem" },
  //5세대 환상
  비크티니: { id: 494, enName: "victini" },
  케르디오: { id: 647, enName: "keldeo" },
  메로엣타: { id: 648, enName: "meloetta" },
  게노세크트: { id: 649, enName: "genesect" },

  //6세대 전설
  제르네아스: { id: 716, enName: "xerneas" },
  이벨타르: { id: 717, enName: "yveltal" },
  지가르데: { id: 718, enName: "zygarde" },
  //6세대 환상
  디안시: { id: 719, enName: "diancie" },
  후파: { id: 720, enName: "hoopa" },
  볼케니온: { id: 721, enName: "volcanion" },

  //7세대 전설
  "타입:널": { id: 772, enName: "type-null" },
  실버디: { id: 773, enName: "silvally" },
  카푸꼬꼬꼭: { id: 785, enName: "tapu-koko" },
  카푸나비나: { id: 786, enName: "tapu-lele" },
  카푸브루루: { id: 787, enName: "tapu-bulu" },
  카푸느지느: { id: 788, enName: "tapu-fini" },
  코스모그: { id: 789, enName: "cosmog" },
  코스모움: { id: 790, enName: "cosmoem" },
  솔가레오: { id: 791, enName: "solgaleo" },
  루나아라: { id: 792, enName: "lunala" },
  텅비드: { id: 793, enName: "nihilego" },
  매시붕: { id: 794, enName: "buzzwole" },
  페로코체: { id: 795, enName: "pheromosa" },
  전수목: { id: 796, enName: "xurkitree" },
  철화구야: { id: 797, enName: "celesteela" },
  종이신도: { id: 798, enName: "kartana" },
  악식킹: { id: 799, enName: "guzzlord" },
  네크로즈마: { id: 800, enName: "necrozma" },
  베베놈: { id: 803, enName: "poipole" },
  아고용: { id: 804, enName: "naganadel" },
  차곡차곡: { id: 805, enName: "stakataka" },
  두파팡: { id: 806, enName: "blacephalon" },
  //7세대 환상
  마기아나: { id: 801, enName: "magearna" },
  마샤도: { id: 802, enName: "marshadow" },
  제라오라: { id: 807, enName: "zeraora" },

  //8세대 전설
  자시안: { id: 888, enName: "zacian" },
  자마젠타: { id: 889, enName: "zamazenta" },
  무한다이노: { id: 890, enName: "eternatus" },
  치고마: { id: 891, enName: "kubfu" },
  우라오스: { id: 892, enName: "urshifu" },
  레지에레키: { id: 894, enName: "regieleki" },
  레지드래고: { id: 895, enName: "regidrago" },
  블리자포스: { id: 896, enName: "glastrier" },
  레이스포스: { id: 897, enName: "spectrier" },
  버드렉스: { id: 898, enName: "calyrex" },
  //8세대 환상
  자루도: { id: 893, enName: "Zarude" },

  //9세대 전설
  총지엔: { id: 1001, enName: "wo-chien" },
  파오젠: { id: 1002, enName: "chien-pao" },
  딩루: { id: 1003, enName: "ting-lu" },
  위유이: { id: 1004, enName: "	chi-yu" },
  코라이돈: { id: 1007, enName: "koraidon" },
  미라이돈: { id: 1008, enName: "miraidon" },
  //9세대 환상
};
