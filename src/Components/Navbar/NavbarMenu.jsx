import React from "react";

function NavbarMenu({children})
{
    return(
        <>
            <ul className="nav-links">
                {React.Children.
                toArray(children)
                .map(child => React.cloneElement(child))}
            </ul>
        </>
    );
}

export { NavbarMenu };