//////* librerias y componentes nativos *//////
/////* componentes de aplicación *//////
import { Layout } from "./Layout";
//////* importaciones de custom hooks *//////
//////* Hojas de estilo *//////
//////* Importaciones Multimedia *//////
import mainLogo from "../assets/img/TitleLogo.png";

function Home()
{
    return(
        <Layout
            mainLogo={mainLogo}
        >
            
        </Layout>
    );
}

export { Home };