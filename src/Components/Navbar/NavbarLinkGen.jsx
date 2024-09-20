function NavbarLinkGen({name, icon, onMenu})
{

    return(

        <a onClick={onMenu}> {/* recibe url de destino "href={{ m.url }}"*/}
            <i className={`bx ${ icon }`}></i> {/* recibe clase bootstrap de icono '{{ m.icono }}'*/}
            <span className="link_name">{ name }</span> {/* recibe texto nombre de vista {{ m.name }}*/}
        </a>
    
    );
}

export { NavbarLinkGen };