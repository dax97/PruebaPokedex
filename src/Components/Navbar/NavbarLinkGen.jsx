import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavbarLinkGen({name, iconFa, onMenu})
{

    return(

        <a className="hover:bg-gray-700 rounded p-2 cursor-pointer" onClick={onMenu}>
            <FontAwesomeIcon icon={iconFa} /> {/* revisar catalogo font awesome */}
            <span className="link_name">{ name }</span>
        </a>
    
    );
}

export { NavbarLinkGen };