import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import type { FlavorText, Pokemon, PokemonName } from '../types/pokemon';

const fetchPokemonDetail = async (id: string) => {
    const [pokemonRes, speciesRes] = await Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    ]);

    console.log("🎈:"+JSON.stringify(pokemonRes.data, null, 2));
    console.log("🎨:"+JSON.stringify(speciesRes.data, null, 2));

    const pokemon = pokemonRes.data as Pokemon;
    const species = speciesRes.data as { 
        names: PokemonName[], 
        flavor_text_entries: FlavorText[]
    };

    const name = species.names
                .find((n) => n.language.name === "ko")?.name 
                ?? pokemon.name;
                    
    const flavor_text = species.flavor_text_entries
                        .find((n) => n.language.name === "ko")?.flavor_text ?? "";

    const image = pokemon.sprites.other['official-artwork'].front_default;

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
    )

    return { pokemon, name, flavor_text, image, types };
}

export const useDetailQuery = (id: string) => {
    return useQuery({ 
        queryKey: ['pokemonDetail', id], 
        queryFn: () => fetchPokemonDetail(id), 
        enabled: !!id 
    });
}