import React from "react";

function CardCanvas({children})
{
    return(
        <>
            <div className="flex w-full">
                {
                    React.Children.
                    toArray(children).map(child => React.cloneElement(child))
                }
            </div>
        </>
    );
}

export { CardCanvas }