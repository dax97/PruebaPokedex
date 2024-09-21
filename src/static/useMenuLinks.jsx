import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons';

function useMenuLinks()
{

    const links = [
        {
            name: "Home",
            url: "*",
            icon: faHouse,
        },
        {
            name: "Favoritos",
            url: "favorites",
            icon: faStar,
        }
    ]
    return{
        links
    };
}

export { useMenuLinks }