import React from "react";
import { Layout } from "./Layout";
import { PokeCard } from "../Components/Cards/PokeCard";
import { FavoriteStarButton } from "../Components/GeneralUse/FavoriteStarButton";
import { TypeSticker } from "../Components/GeneralUse/TypeSicker";
import { usePokemonList } from "../hooks/usePokemonList";
import { useIsMobile } from "../hooks/useIsMobile";
import { useTypes } from "../hooks/useTypes"; 
import { useFavorites } from "../hooks/useFavorites"; // Importa el hook de favoritos
import mainLogo from "../assets/img/TitleLogo.png";

function Home() {
    const isMobile = useIsMobile();
    const { detailedPokemon } = usePokemonList();
    const { getTypeSprites } = useTypes();
    const { toggleFavorite, isFavorite } = useFavorites(); // Usa los favoritos

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
                                <img className="w-40 h-40" src={pokemon.sprites.front_default} alt={pokemon.name} />
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