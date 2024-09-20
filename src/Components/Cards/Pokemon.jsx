import React from "react";

function Pokemon({children})
{
    return(
        <>
            <div>
                {
                    React.Children.
                    toArray(children).map(child => React.cloneElement(child))
                }
            </div>
        </>
    );
}

export { Pokemon };