function NavbarLogo(props)
{
    return(
        <div className="w-full">
            <img className={`mainLogo ${props.size}`} src={props.mainLogo} alt="PokeDexLOGO" />
        </div>
    );
}

export { NavbarLogo };