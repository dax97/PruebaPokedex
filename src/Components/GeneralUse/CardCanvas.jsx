import React from "react";

function CardCanvas({children})
{
    return(
        <>
            <div className="flex flex-wrap justify-center gap-4 w-full h-fit p-4 ">
                {
                    React.Children.
                    toArray(children).map(child => React.cloneElement(child))
                }
            </div>
        </>
    );
}

export { CardCanvas }