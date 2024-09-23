//////* librerias y componentes nativos */////
import React from "react";
import Cookies from 'js-cookie';
/////* API's *//////
import PokedexApi from "../APIs/pokeDexApi";
//////* importaciones de custom hooks *//////
import { useIsMobile } from "./useIsMobile";

function usePokemonList() {
    //////////* Hooks *//////////
    const isMobile = useIsMobile();

    //////////* Estados *//////////
    const [pokemonList, setPokemonList] = React.useState([]);
    const [detailedPokemon, setDetailedPokemon] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    //////////* Funciones *//////////
    /* Función para obtener la lista inicial de Pokémon */
    const fetchPokemonList = React.useCallback(async () => {
        if (isLoading) return; // Previene múltiples llamadas concurrentes
        setIsLoading(true);
        try {
            const limit = isMobile ? 5 : 15;
            const response = await PokedexApi.get(`pokemon?limit=${limit}&offset=${offset}`);
            const newPokemonList = response.data.results;

            // Actualiza la lista de Pokémon sin duplicar
            setPokemonList((prev) => {
                const updatedList = [...prev, ...newPokemonList];
                // Filtra duplicados por nombre o URL (evita llamados repetidos)
                return Array.from(new Set(updatedList.map(p => p.url))).map(url => 
                    updatedList.find(p => p.url === url));
            });
            setOffset((prev) => prev + limit);
        } catch (error) {
            console.error('Error fetching Pokémon list:', error);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }, [offset, isMobile, isLoading]);

    /* Función para obtener los detalles de cada Pokémon */
    const fetchPokemonDetails = React.useCallback(async () => {
        try {
            const newPokemons = pokemonList.filter(
                (pokemon) => !detailedPokemon.some((detailed) => detailed.name === pokemon.name)
            );

            if (newPokemons.length === 0) return; // Evita realizar llamadas innecesarias

            const promises = newPokemons.map((pokemon) => PokedexApi.get(pokemon.url));
            const results = await Promise.all(promises);
            const detailedData = results.map((result) => result.data);

            // Añadir solo Pokémon no repetidos
            setDetailedPokemon((prev) => {
                const updatedDetails = [...prev, ...detailedData];
                return Array.from(new Set(updatedDetails.map(p => p.id))).map(id =>
                    updatedDetails.find(p => p.id === id));
            });
        } catch (error) {
            console.error('Error fetching Pokémon details:', error);
            setError(true);
        }
    }, [pokemonList, detailedPokemon]);

    /* Control de carga inicial y cada vez que se agrega más */
    React.useEffect(() => {
        fetchPokemonList();
    }, [fetchPokemonList]);

    /* Ejecución de función para obtener detalles cuando se actualice la lista */
    React.useEffect(() => {
        if (pokemonList.length > 0) {
            fetchPokemonDetails();
        }
    }, [pokemonList, fetchPokemonDetails]);

    /* Implementación de Infinite Scroll */
    const handleScroll = React.useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            fetchPokemonList();
        }
    }, [fetchPokemonList]);

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return {
        pokemonList,
        detailedPokemon,
        setError,
        error,
        isLoading,
    };
}

export { usePokemonList };