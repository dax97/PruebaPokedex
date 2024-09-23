import React from "react";

function Navbar({children, isOpen, isDisplayed})
{

    return(
        <>
            {
                isDisplayed &&
                <nav className={`block w-full fixed z-10 bg-red-600 text-white top-0 left-0 h-full transition-all 
                    duration-300 shadow-lg md:z-auto md:flex md:flex-none md:flex-col md:sticky
                    ${isOpen ? "md:w-1/6" : "md:w-fit p-2"}`
                }>
                {
                    React.Children.
                    toArray(children).map(child => React.cloneElement(child))
                }
                </nav>
            }
        </>
    );
}

export { Navbar }