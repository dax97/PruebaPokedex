import React from "react";

function NavbarMenu({children})
{
    return(
        <>
            <ul className="flex flex-1 flex-col p-4 space-y-2">
                {React.Children.
                toArray(children)
                .map(child => React.cloneElement(child))}
            </ul>
        </>
    );
}

export { NavbarMenu };