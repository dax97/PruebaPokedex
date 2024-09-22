//////* librerias y componentes nativos */////

/////* componentes de aplicación *//////
import { Layout } from "./Layout";
import { PokeCard } from "../Components/Cards/PokeCard";
import { FavoriteStarButton } from "../Components/GeneralUse/FavoriteStarButton";
import { TypeSticker } from "../Components/GeneralUse/TypeSicker";
//////* importaciones de custom hooks *//////
import { usePokecardsDemo } from "../Demos/usePokeCardsDemo";
//////* Hojas de estilo *//////
//////* Importaciones Multimedia *//////
import mainLogo from "../assets/img/TitleLogo.png";
import NormalType from "../assets/img/TypeStickers/NormalType.png";
/* import normaltype from "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/1.png"; */

function Home()
{
    const { cardsDemo, pokemonDemo } = usePokecardsDemo()
    var urlNum = cardsDemo.results[0].url;
    const numero = pokemonDemo.id || urlNum;
    return(
        <Layout
            mainLogo={mainLogo}
        >
            {
                cardsDemo.results.map(card => <PokeCard
                    key={card.name}
                    extraTailwind={"relative"}
                >
                    <div className="border-4 border-gray-300">
                        {/* sprite count 1302 se refieren en server, son un chingo. */}
                        <div className="w-20 h-20">
                            <img src={pokemonDemo.sprites.front_default} alt="pikachu" />
                        </div>
                        <section className="flex border-t-2 border-black w-full">
                            {/* numero de pokemon */}
                            <div className="pokecardNumber relative w-4/5 pl-px">
                                <span>
                                    {
                                        "#50"
                                    }
                                </span>
                            </div>
                            {/* boton de favoritos */}
                            <FavoriteStarButton
                                isFavorite={false}
                                extraContTailWind={"pokecardNumber relative w-1/5 pr-5"}
                            ></FavoriteStarButton>
                        </section>
                        {/* Nombre */}
                        <div className="flex pokecardName border-t-2 border-black items-center justify-center">
                            <span>Pikachu</span>
                        </div>
                        {/* Tipo de pokemon estilizado count:21 se descargan son ux */}
                        <section className="flex border-t-2 border-black w-full">
                            <TypeSticker
                                typeSprite={NormalType}
                                altString={"Normal"}
                                extraContTailwind={"pokemonType m-1 relative "}
                            >
                            </TypeSticker>
                        </section>
                    </div>
                </PokeCard>
                )
            }
            
        </Layout>
    );
}

export { Home };