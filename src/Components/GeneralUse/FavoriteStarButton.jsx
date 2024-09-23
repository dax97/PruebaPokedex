import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarOn } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOff } from "@fortawesome/free-regular-svg-icons";

function FavoriteStarButton({ isFavorite, onToggleFavorite, extraTailwind, extraContTailWind }) {
    return (
        <div className={extraContTailWind} onClick={onToggleFavorite} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon className={extraTailwind} icon={isFavorite ? faStarOn : faStarOff} />
        </div>
    );
}

export { FavoriteStarButton };