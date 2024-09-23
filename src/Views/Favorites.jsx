//////* librerias y componentes nativos */////
import React from 'react';
import Swal from "sweetalert2";
/////* componentes de aplicación *//////
import { Layout } from './Layout';
import { PokeCard } from "../Components/Cards/PokeCard";
import { FavoriteStarButton } from "../Components/GeneralUse/FavoriteStarButton";
import { TypeSticker } from "../Components/GeneralUse/TypeSicker";
import { Pokemon } from "../Components/Cards/Pokemon";
//////* importaciones de custom hooks *//////
import { useTypes } from "../hooks/useTypes";
import { useFavorites } from "../hooks/useFavorites"; // Hook de favoritos
//////* Hojas de estilo *//////
//////* Importaciones Multimedia *//////
import FavoritesLogo from "../assets/img/FavoritesLogo.png";

function Favorites() {
    //////////* Hooks *//////////
    const { favorites, toggleFavorite } = useFavorites(); // Usa los favoritos
    const { getTypeSprites } = useTypes();

    //////////* Funciones *//////////
    const showPokemonDetails = (pokemon) => {
        const stats = pokemon.stats.map(stat => (
            `<div class="flex justify-between">
                <span>${stat.stat.name}</span>
                <span>${stat.base_stat}</span>
            </div>`
        )).join('');
    
        const pokemonDetailsHtml = `
            <div class="flex flex-col">
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="w-40 h-40 mx-auto" />
                <h3 class="text-center font-bold">Stats:</h3>
                ${stats}
            </div>
        `;
    
        Swal.fire({
            title: pokemon.name,
            html: pokemonDetailsHtml,
            showCloseButton: true,
            showConfirmButton: false,
            width: '400px',
        });
    };

    return (
        <Layout mainLogo={FavoritesLogo}>
            {
                favorites.length === 0 ? (
                    <p className="text-center mt-10">No tienes Pokémon favoritos aún.</p>
                ) : (
                    favorites.map((pokemon) => (
                        <PokeCard
                            key={pokemon.id}
                            extraContTailwind={"relative w-full md:w-[18%] md:w-1/5 border-4 border-gray-500 mx-1 h-fit"}
                        >
                            <div className="border-4 border-gray-300">
                                <div className="flex w-full h-fit items-center justify-center">
                                    <img className="w-40 h-40" src={pokemon.sprites.front_default} alt={pokemon.name} onClick={() => showPokemonDetails(pokemon)}/>
                                </div>
                                <section className="flex border-t-2 border-black w-full">
                                    <div className="pokecardNumber relative pl-px w-full md:w-4/5 lg:w-full">
                                        <span>{pokemon.id}</span>
                                    </div>
                                    <FavoriteStarButton
                                        isFavorite={true}
                                        onToggleFavorite={() => toggleFavorite(pokemon)}
                                        extraContTailWind={"pokecardNumber relative w-auto md:w-1/5 lg:w-auto"}
                                    />
                                </section>
                                <div className="pokecardName flex border-t-2 border-black items-center justify-center">
                                    <span>{pokemon.name}</span>
                                </div>
                                <section className="flex border-t-2 border-black w-full">
                                    {pokemon.types.map((type) => {
                                        const sprite = getTypeSprites([{ name: type.type.name }]);
                                        return (
                                            <TypeSticker
                                                key={type.type.name}
                                                typeSprite={sprite[0]}
                                                altString={type.type.name}
                                                extraContTailwind={"pokemonType m-1 relative"}
                                                extraTailwind={"w-12 h-6"}
                                            />
                                        );
                                    })}
                                </section>
                            </div>
                        </PokeCard>
                    ))
                )
            }
        </Layout>
    );
}

export { Favorites };