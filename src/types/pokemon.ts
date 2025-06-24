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