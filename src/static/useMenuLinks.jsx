function useMenuLinks()
{

    const links = [
        {
            name: "Home",
            url: "/*",
            icon: "house",
        },
        {
            name: "Favoritos",
            url: "/Favorites",
            icon: "star",
        }
    ]
    return{
        links
    };
}

export { useMenuLinks }