import { useQuery, gql } from "@apollo/client";
import Card from "./Card";
import { GET_POKEMONS } from "../graphql/get_pokemons";
import { GET_SINGLE_POKEMON } from "../graphql/get_single_pokemon";
import { motion, AnimatePresence } from "framer-motion";

const chosenPokemon = [
    "Pikachu",
    "Psyduck",
    "Arcanine",
    "Alakazam",
    "Machamp",
    "Rapidash",
    "Dragonite",
    "Mewtwo",
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Blastoise",
    "Wartortle",
    "Caterpie",
    "Fearow",
    "Ekans",
    "Arbok",
    "Nidoking",
    "Dugtrio",
    "Victreebel",
    "Tentacruel",
    "Golem",
    "Slowbro",
    "Magneton",
    "Doduo",
    "Dewgong",
];

type PokemonItemProps = {
    name: string;
    index: number;
};

function PokemonList() {
    return (
        <div className="container mx-auto mt-5 grid max-w-fit grid-cols-1 justify-items-center gap-3 lg:grid-cols-2">
            {chosenPokemon.map((pokemonName, index) => (
                <PokemonItem key={pokemonName} name={pokemonName} index={index} />
            ))}
        </div>
    );
}

function PokemonItem({ name, index }: PokemonItemProps) {
    const { loading, error, data } = useQuery(GET_SINGLE_POKEMON, {
        variables: { name },
    });

    if (loading) {
        return (
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-96 max-w-sm mx-auto min-w-full flex flex-col rounded-xl bg-slate-100 p-5"
                >
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-400 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-400 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-400 rounded"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        );
    }
    if (error) return <p>Error: {error.message}</p>;

    const pokemon = data.pokemon;

    return <Card content={pokemon} index={index} />;
}

export default function Content() {
    return <PokemonList />;
}
