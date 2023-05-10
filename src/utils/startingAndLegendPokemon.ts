type pokemonType = {
  [key: string]: {
    id: number;
    english_name: string;
  };
};

//스타팅
export const startingPokemon: pokemonType = {
  //1세대
  이상해씨: { id: 1, english_name: "bulbasaur" },
  파이리: { id: 4, english_name: "charmander" },
  꼬부기: { id: 7, english_name: "squirtle" },
  //2세대
  치코리타: { id: 152, english_name: "chikorita" },
  브케인: { id: 155, english_name: "cyndaquil" },
  리아코: { id: 158, english_name: "totodile" },
  //3세대
  나무지기: { id: 252, english_name: "treecko" },
  아차모: { id: 255, english_name: "torchic" },
  물짱이: { id: 258, english_name: "mudkip" },
  //4세대
  모부기: { id: 387, english_name: "turtwig" },
  불꽃숭이: { id: 390, english_name: "chimchar" },
  팽도리: { id: 393, english_name: "piplup" },
  //5세대
  주리비얀: { id: 495, english_name: "snivy" },
  뚜꾸리: { id: 498, english_name: "tepig" },
  수댕이: { id: 501, english_name: "oshawott" },
  //6세대
  도치마론: { id: 650, english_name: "chespin" },
  푸호꼬: { id: 653, english_name: "fennekin" },
  개구마르: { id: 656, english_name: "froakie" },
  //7세대
  나몰빼미: { id: 722, english_name: "rowlet" },
  냐오불: { id: 725, english_name: "litten" },
  누리공: { id: 728, english_name: "popplio" },
  //8세대
  흥나숭: { id: 810, english_name: "grookey" },
  염버니: { id: 813, english_name: "scorbunny" },
  울머기: { id: 816, english_name: "sobble" },
  //9세대
  나오하: { id: 906, english_name: "sprigatito" },
  뜨아거: { id: 909, english_name: "fuecoco" },
  꾸왁스: { id: 912, english_name: "quaxly" },
};

//준전설, 전설, 초전설 및 환상의 포켓몬
export const legendPokemon: pokemonType = {
  //1세대 전설
  프리져: { id: 144, english_name: "articuno" },
  썬더: { id: 145, english_name: "zapdos" },
  파이어: { id: 146, english_name: "moltres" },
  뮤츠: { id: 150, english_name: "mewtwo" },
  //1세대 환상
  뮤: { id: 151, english_name: "mew" },

  //2세대 전설
  라이코: { id: 243, english_name: "raiko" },
  앤테이: { id: 244, english_name: "aentei" },
  스이쿤: { id: 245, english_name: "seuikun" },
  루기아: { id: 249, english_name: "lugia" },
  칠색조: { id: 250, english_name: "ho-oh" },
  //2세대 환상
  세레비: { id: 251, english_name: "celebi" },

  //3세대 전설
  레지락: { id: 377, english_name: "regirock" },
  레지아이스: { id: 378, english_name: "regice" },
  레지스틸: { id: 379, english_name: "registeel" },
  라티아스: { id: 380, english_name: "latias" },
  라티오스: { id: 381, english_name: "latios" },
  카이오가: { id: 382, english_name: "kyogre" },
  그란돈: { id: 383, english_name: "groudon" },
  레쿠쟈: { id: 384, english_name: "rayquaza" },
  //3세대 환상
  지라치: { id: 385, english_name: "jirachi" },
  테오키스: { id: 386, english_name: "deoxys" },

  //4세대 전설
  유크시: { id: 480, english_name: "uxie" },
  엠라이트: { id: 481, english_name: "mesprit" },
  아그놈: { id: 482, english_name: "azelf" },
  디아루가: { id: 483, english_name: "dialga" },
  펄기아: { id: 484, english_name: "palkia" },
  히드런: { id: 485, english_name: "heatran" },
  레지기가스: { id: 486, english_name: "regigigas" },
  기라티나: { id: 487, english_name: "giratina" },
  크레세리아: { id: 488, english_name: "cresselia" },
  //4새대 환상
  피오네: { id: 489, english_name: "phione" },
  마나피: { id: 490, english_name: "manaphy" },
  다크라이: { id: 491, english_name: "darkrai" },
  쉐이미: { id: 492, english_name: "shaymin" },
  아르세우스: { id: 493, english_name: "arceus" },

  //5세대 전설
  코바르온: { id: 638, english_name: "cobalion" },
  테라키온: { id: 639, english_name: "terrakion" },
  비리디온: { id: 640, english_name: "virizion" },
  토네로스: { id: 641, english_name: "tornadus" },
  볼트로스: { id: 642, english_name: "thundurus" },
  레시라무: { id: 643, english_name: "reshiram" },
  제크로무: { id: 644, english_name: "zekrom" },
  랜드로스: { id: 645, english_name: "landorus" },
  큐레무: { id: 646, english_name: "kyurem" },
  //5세대 환상
  비크티니: { id: 494, english_name: "victini" },
  케르디오: { id: 647, english_name: "keldeo" },
  메로엣타: { id: 648, english_name: "meloetta" },
  게노세크트: { id: 649, english_name: "genesect" },

  //6세대 전설
  제르네아스: { id: 716, english_name: "xerneas" },
  이벨타르: { id: 717, english_name: "yveltal" },
  지가르데: { id: 718, english_name: "zygarde" },
  //6세대 환상
  디안시: { id: 719, english_name: "diancie" },
  후파: { id: 720, english_name: "hoopa" },
  볼케니온: { id: 721, english_name: "volcanion" },

  //7세대 전설
  "타입:널": { id: 772, english_name: "type-null" },
  실버디: { id: 773, english_name: "silvally" },
  카푸꼬꼬꼭: { id: 785, english_name: "tapu-koko" },
  카푸나비나: { id: 786, english_name: "tapu-lele" },
  카푸브루루: { id: 787, english_name: "tapu-bulu" },
  카푸느지느: { id: 788, english_name: "tapu-fini" },
  코스모그: { id: 789, english_name: "cosmog" },
  코스모움: { id: 790, english_name: "cosmoem" },
  솔가레오: { id: 791, english_name: "solgaleo" },
  루나아라: { id: 792, english_name: "lunala" },
  텅비드: { id: 793, english_name: "nihilego" },
  매시붕: { id: 794, english_name: "buzzwole" },
  페로코체: { id: 795, english_name: "pheromosa" },
  전수목: { id: 796, english_name: "xurkitree" },
  철화구야: { id: 797, english_name: "celesteela" },
  종이신도: { id: 798, english_name: "kartana" },
  악식킹: { id: 799, english_name: "guzzlord" },
  네크로즈마: { id: 800, english_name: "necrozma" },
  베베놈: { id: 803, english_name: "poipole" },
  아고용: { id: 804, english_name: "naganadel" },
  차곡차곡: { id: 805, english_name: "stakataka" },
  두파팡: { id: 806, english_name: "blacephalon" },
  //7세대 환상
  마기아나: { id: 801, english_name: "magearna" },
  마샤도: { id: 802, english_name: "marshadow" },
  제라오라: { id: 807, english_name: "zeraora" },

  //8세대 전설
  자시안: { id: 888, english_name: "zacian" },
  자마젠타: { id: 889, english_name: "zamazenta" },
  무한다이노: { id: 890, english_name: "eternatus" },
  치고마: { id: 891, english_name: "kubfu" },
  우라오스: { id: 892, english_name: "urshifu" },
  레지에레키: { id: 894, english_name: "regieleki" },
  레지드래고: { id: 895, english_name: "regidrago" },
  블리자포스: { id: 896, english_name: "glastrier" },
  레이스포스: { id: 897, english_name: "spectrier" },
  버드렉스: { id: 898, english_name: "calyrex" },
  //8세대 환상
  자루도: { id: 893, english_name: "Zarude" },

  //9세대 전설
  총지엔: { id: 1001, english_name: "wo-chien" },
  파오젠: { id: 1002, english_name: "chien-pao" },
  딩루: { id: 1003, english_name: "ting-lu" },
  위유이: { id: 1004, english_name: "	chi-yu" },
  코라이돈: { id: 1007, english_name: "koraidon" },
  미라이돈: { id: 1008, english_name: "miraidon" },
  //9세대 환상
};
