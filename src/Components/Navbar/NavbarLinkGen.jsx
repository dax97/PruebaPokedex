import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavbarLinkGen({name, iconFa, menuSize, onMenu})
{

    return(

        <a className={`${menuSize ? "p-2" : "p-0"} hover:bg-gray-700 rounded  cursor-pointer`} onClick={onMenu}>
            <FontAwesomeIcon className={`h-9`} icon={iconFa} /> {/* revisar catalogo font awesome */}
            {
                menuSize && <span className={`link_name text-2xl p-2`}>{ name }</span>
            }
        </a>
    
    );
}

export { NavbarLinkGen };