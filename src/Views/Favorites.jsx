//////* librerias y componentes nativos *//////
/////* componentes de aplicación *//////
import { Layout } from "./Layout";
//////* importaciones de custom hooks *//////
//////* Hojas de estilo *//////
//////* Importaciones Multimedia *//////
import FavoritesLogo from "../assets/img/FavoritesLogo.png"

function Favorites()
{
    return(
        <Layout
            mainLogo={FavoritesLogo}
        >
            
        </Layout>
    );
}

export { Favorites };