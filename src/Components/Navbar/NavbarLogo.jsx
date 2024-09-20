function NavbarLogo(props)
{
    return(
        <div className="w-full">
            <img className="mainLogo" src={props.mainLogo} alt="PokeDexLOGO" />
        </div>
    );
}

export { NavbarLogo };