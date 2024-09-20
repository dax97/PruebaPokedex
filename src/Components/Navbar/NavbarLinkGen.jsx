function NavbarLinkGen({name, icon, onMenu})
{

    return(

        <a className="hover:bg-gray-700 rounded p-2 cursor-pointer" onClick={onMenu}> 
            <i className={`bx ${ icon }`}></i>
            <span className="link_name">{ name }</span>
        </a>
    
    );
}

export { NavbarLinkGen };