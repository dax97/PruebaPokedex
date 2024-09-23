import React from "react";
import pokemonLogo from "../../assets/img/miniLogo.png";

function Loader() {
    return (
        <div className="loader flex items-center justify-center h-screen">
            <img src={pokemonLogo} alt="Loading..." className="animate-spin w-20 h-20" />
        </div>
    );
}

export { Loader };