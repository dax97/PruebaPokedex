import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarOn } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOff } from "@fortawesome/free-regular-svg-icons";

function FavoriteStarButton({isFavorite, extraTailwind, extraContTailWind})
{
    return(
        <div className={extraContTailWind}>
            <FontAwesomeIcon className={extraTailwind} icon={isFavorite? faStarOn : faStarOff} />
        </div>
    );
}

export { FavoriteStarButton }