import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Pokemon, PokemonName } from '../types/pokemon';

const pokemonIdList = Array.from({ length: 180 }, (_, i) => i + 1);

const fetchPokemonList = async () => {
    const results = await Promise.all(
        pokemonIdList.map(async (id: number) => {
            const [pokemonRes, speciesRes] = await Promise.all([
                axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
                axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
            ]);

            const pokemon = pokemonRes.data as Pokemon;
            const species = speciesRes.data as { names: PokemonName[] };

            const name_ko = species.names
                            .find((n) => n.language.name === "ko")?.name 
                            ?? pokemon.name;

            const types = await Promise.all(
                pokemon.types.map(async ({ type }) => {
                    const res = await axios.get(type.url);
                    
                    const typeData = res.data as { names: PokemonName[] };

                    const type_ko = typeData.names
                                    .find((n) => n.language.name === "ko")?.name 
                                    ?? type.name;

                    const type_en = typeData.names
                                    .find((n) => n.language.name === "en")?.name 
                                    ?? type.name;

                    return { type_ko, type_en };
                })
            );

            return {
                id: pokemon.id,
                name: name_ko,
                image: pokemon.sprites.other["official-artwork"].front_default,
                types
            };
        })
    )

    return results;
}

export const useListQuery = () => {
    return useQuery({ queryKey: ['pokemonList'], queryFn: fetchPokemonList });
}
