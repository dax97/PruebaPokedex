import React from "react";

function Navbar({children})
{
    return(
        <nav>
            {
                React.Children.
                toArray(children).map(child => React.cloneElement(child))
            }
        </nav>
    );
}

export { Navbar }