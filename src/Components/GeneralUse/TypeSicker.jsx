function TypeSticker({typeSprite, altString, extraTailwind, extraContTailwind})
{
    return(
        <div className={extraContTailwind}>
            <img className={extraTailwind} src={typeSprite} alt={altString} />
        </div>
    );
}

export { TypeSticker }