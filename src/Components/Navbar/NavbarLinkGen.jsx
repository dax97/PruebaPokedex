import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavbarLinkGen({name, iconFa, menuSize, onMenu})
{

    return(

        <a className={`${menuSize ? "p-2" : "p-0"} hover:bg-gray-700 rounded  cursor-pointer`} onClick={onMenu}>
            <FontAwesomeIcon className={`h-9 md:h-10 lg:h-9`} icon={iconFa} /> {/* revisar catalogo font awesome */}
            {
                menuSize && <span className={`link_name text-2xl p-2 md:text-lg lg:text-2xl`}>{ name }</span>
            }
        </a>
    
    );
}

export { NavbarLinkGen };