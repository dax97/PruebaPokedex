import React from "react";

function Navbar({children, isOpen, isdisplayed})
{

    return(
        <nav className={`flex flex-none flex-col relative top-0 left-0 h-full bg-red-600 text-white shadow-lg ${isOpen ? " w-1/6" : "w-fit p-2"}`}>
            {
                React.Children.
                toArray(children).map(child => React.cloneElement(child))
            }
        </nav>
    );
}

export { Navbar }