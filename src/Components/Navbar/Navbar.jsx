import React from "react";

function Navbar({children})
{
    return(
        <nav className="flex-none flex flex-col fixed top-0 left-0 h-full w-64 bg-red-600 text-white shadow-lg ">
            {
                React.Children.
                toArray(children).map(child => React.cloneElement(child))
            }
        </nav>
    );
}

export { Navbar }