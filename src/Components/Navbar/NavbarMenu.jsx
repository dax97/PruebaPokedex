import React from "react";

function NavbarMenu({children, menuSize})
{
    return(
        <>
            <ul className={`flex  flex-col ${menuSize ? "p-4 flex-1" : "" } space-y-2`}>
                {React.Children.
                toArray(children)
                .map(child => React.cloneElement(child))}
            </ul>
        </>
    );
}

export { NavbarMenu };