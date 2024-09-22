import React from "react";

function PokeCard({children, extraContTailwind})
{
    return(
        <>
            <div className={"border-4 border-gray-500 mx-1"}>
                {
                    React.Children.
                    toArray(children).map(child => React.cloneElement(child))
                }
            </div>
        </>
    );
}

export { PokeCard };