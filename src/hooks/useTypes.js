import React from "react";
import { Types } from "../assets/img/TypeStickers/index";

function useTypes()
{
    const typeToSprite = {
        normal: Types.NormalType,
        fighting: Types.FightType,
        flying: Types.FlyingType,
        poison: Types.PoisonType,
        ground: Types.GroundType,
        rock: Types.RockType,
        bug: Types.BugType,
        ghost: Types.GhostType,
        steel: Types.SteelType,
        fire: Types.FireType,
        water: Types.WaterType,
        grass: Types.GrassType,
        electric: Types.ElectricType,
        psychic: Types.PsychicType,
        ice: Types.IceType,
        dragon: Types.DragonType,
        dark: Types.DarkType,
        fairy: Types.FairyType,
        stellar: Types.StellarType,
        unknown: Types.UnknownType,
    };

    const getTypeSprites = (types) => {
        return types.map((type) => {
            const sprite = typeToSprite[type.name.toLowerCase()];
            return sprite ? sprite : Types.UnknownType; /* Si no se encuentra, usar UnknownType */
        });
    };

    return { getTypeSprites };
}

export {useTypes}