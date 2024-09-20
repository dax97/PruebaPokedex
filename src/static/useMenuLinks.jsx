function useMenuLinks()
{

    const links = [
        {
            name: "Home",
            url: "/",
            icon: "house",
        },
        {
            name: "Favoritos",
            url: "/",
            icon: "star",
        }
    ]
    return{
        links
    };
}

export { useMenuLinks }