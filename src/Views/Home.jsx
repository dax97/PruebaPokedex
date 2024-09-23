//////* librerias y componentes nativos */////
import React from "react";
import Swal from "sweetalert2";
/////* componentes de aplicación *//////
import { Layout } from "./Layout";
import { PokeCard } from "../Components/Cards/PokeCard";
import { FavoriteStarButton } from "../Components/GeneralUse/FavoriteStarButton";
import { TypeSticker } from "../Components/GeneralUse/TypeSicker";
import { Pokemon } from "../Components/Cards/Pokemon";
import { Loader } from "../Components/GeneralUse/Loader";
//////* importaciones de custom hooks *//////
import { usePokemonList } from "../hooks/usePokemonList";
import { useIsMobile } from "../hooks/useIsMobile";
import { useTypes } from "../hooks/useTypes";
import { useFavorites } from "../hooks/useFavorites";  
//////* Hojas de estilo *//////
//////* Importaciones Multimedia *//////
import mainLogo from "../assets/img/TitleLogo.png";

function Home() {

    //////////* Hooks *//////////
    const isMobile = useIsMobile();
    const { 
        pokemonList,
        detailedPokemon,
        setError,
        error,
        isLoading, 
    } = usePokemonList();
    const { getTypeSprites } = useTypes();
    const { toggleFavorite, isFavorite } = useFavorites();

    // Mostrar Sweet Alert Loader
    /* React.useEffect(() => {
        if (isLoading) {
            Swal.fire({
                title: 'Cargando...',
                html: <Loader />,
                showConfirmButton: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
        } else {
            Swal.close();
        }
    }, []); */ /* isLoading es la dependencia pero tengo que arreglar hook. */

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
        <Layout mainLogo={mainLogo}>
            {
                detailedPokemon.map((pokemon, index) => (
                    <PokeCard
                        key={`${pokemon.id}-${index}`}
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
                                    isFavorite={isFavorite(pokemon.id)}
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
            }
        </Layout>
    );
}

export { Home };