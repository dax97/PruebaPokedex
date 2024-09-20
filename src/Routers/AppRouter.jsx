//////* librerias y componentes nativos *//////
import { Navigate, Route, Routes } from "react-router-dom";
import * as Rutas from "../Views/Index"

function AppRouter()
{
    return(
        <Routes>
            //////* Directorio *//////
            <Route path="/*" element={<Rutas.Home/>} />
            <Route path="/Favorites" elemet={<Rutas.Favorites/>}/>
        </Routes>
    );
}

export { AppRouter }