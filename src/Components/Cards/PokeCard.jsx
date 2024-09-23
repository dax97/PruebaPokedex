import React from "react";

function PokeCard({children, extraContTailwind})
{
    return(
        <>
            <div className={`pokeCard ${extraContTailwind}`}>
                {
                    React.Children.
                    toArray(children).map(child => React.cloneElement(child))
                }
            </div>
        </>
    );
}

export { PokeCard };