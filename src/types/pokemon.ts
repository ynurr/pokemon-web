export type PokemonName = {
    language: { name: string };
    name: string;
};

export type PokemonType = {
    type: {
        name: string;
        url: string;
    };
};

export type PokemonAbility = {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
};
/*
"abilities": [
    {
      "ability": {
        "name": "torrent",
        "url": "https://pokeapi.co/api/v2/ability/67/"
      },
      "is_hidden": false,
      "slot": 1
    },
    {
      "ability": {
        "name": "rain-dish",
        "url": "https://pokeapi.co/api/v2/ability/44/"
      },
      "is_hidden": true,
      "slot": 3
    }
],
*/
export type FlavorText = { //flavor_text_entries
    flavor_text: string;
    language: {
        name: string;
    };
};

export type Pokemon = {
    id: number;
    name: string;
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            };
        };
    };
    types: PokemonType[];
    height: number;
    weight: number;
    abilities: PokemonAbility[];
    stats: {
        base_stat: number;
        stat: {
            name: string; //HP 공격 방어 특수공격 특수방어 스피드 명중률 회피율
        };
    }[];
};

export type TranslatedType = {
    type_ko: string;
    type_en: string;
};