function NavbarLogo(props)
{
    return(
        <div className="logo-details">
            <img className="mainLogo" src={props.mainLogo} alt="PokeDexLOGO" />
        </div>
    );
}

export { NavbarLogo };