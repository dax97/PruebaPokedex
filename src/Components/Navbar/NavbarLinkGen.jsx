function NavbarLinkGen({name, icon, onMenu})
{

    return(

        <a onClick={onMenu}> 
            <i className={`bx ${ icon }`}></i>
            <span className="link_name">{ name }</span>
        </a>
    
    );
}

export { NavbarLinkGen };