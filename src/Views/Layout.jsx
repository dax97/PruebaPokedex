//////* librerias y componentes nativos *//////
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//////* componentes de aplicación *//////
import { Navbar } from "../Components/Navbar/Navbar"
import { NavbarLogo } from "../Components/Navbar/NavbarLogo";
import { NavbarMenu } from "../Components/Navbar/NavbarMenu";
import { NavbarProfile } from "../Components/Navbar/NavbarProfile";
import { NavbarLinkGen } from "../Components/Navbar/NavbarLinkGen";
import { CardCanvas } from "../Components/GeneralUse/CardCanvas";
//////* importaciones de custom hooks *//////
import { useMenuLinks } from "../static/useMenuLinks";
import { useProfileInfo } from "../static/useProfileInfo";
import { useIsMobile } from "../hooks/useIsMobile";
//////* Hojas de estilo *//////
//////* Importaciones Multimedia *//////
import NavbarLogoXl from "../assets/img/TitleLogo.png";
import miniLogo from "../assets/img/miniLogo.png";


function Layout({children, mainLogo})
{

    //////////* Hooks *//////////

    const isMobile = useIsMobile();

    //////////* Estados *//////////
    const [navbarSize, setNavbarSize] = React.useState({
        size: true,
        display: isMobile ? false : true
    });

    const [navContent, setNavContent] = React.useState({
        navLogo: NavbarLogoXl,
        navLogoSize: "",
        menuSize: true,
        typeSize: true,
        profileSize: true,
    });
    //////////* Control de Rutas del Navbar Menu *//////////

    const navigate = useNavigate();

    function navigateView(vista)
    {
        navigate(`/${vista}`)
    }

    //////////* informacion estatica *//////////
    const { links } = useMenuLinks();

    //////////* demo de uso de perfil *//////////
    const { userInfo } = useProfileInfo();

    //////////* Control de expansion de navbar *//////////
    function navSizeHandler()
    {
        if(!navbarSize.size)
        {
            setNavbarSize((prevValues) => ({
                ...prevValues,
                size: true,
            }))
        }else
        {
            setNavbarSize((prevValues) => ({
                ...prevValues,
                size: false,
            }))
        }

    }

    //////////* Control de expansion de navbar *//////////
    function toggleNavbar() {
        setNavbarSize((prev) => ({
        ...prev,
        display: !prev.display,
        }));
    }

    function closeNavbar()
    {
        if(isMobile === false && navbarSize.size === false)
        {
            setNavContent({
                navLogo: miniLogo,
                navLogoSize: "h-10",
                menuSize: false,
                typeSize: false,
                profileSize: false,
            })
        }else{
            setNavContent({
                navLogo: NavbarLogoXl,
                navLogoSize: "",
                menuSize: true,
                typeSize: true,
                profileSize: true,
            })
        }
    }

    React.useEffect(() => {
        /* console.log(navbarSize.size) */
        closeNavbar();
    },[navbarSize.size])

    /* console.log(window.innerWidth)
    console.log(isMobile) */

    return(
        <div className="flex h-screen w-screen">
            <Navbar
                isOpen={navbarSize.size}
                isDisplayed={navbarSize.display}
            >
                <section>
                    <NavbarLogo 
                        mainLogo={navContent.navLogo}
                        size={navContent.navLogoSize}
                    />
                    {
                        isMobile &&
                        <div className="flex items-center justify-center burguerButton h-full w-fit p-2 bg-gray-700" onClick={isMobile ? toggleNavbar : navSizeHandler}>
                            <FontAwesomeIcon className="burguerButtonIcon h-9 " icon={faBars} color="white"/>
                        </div>
                    }
                    
                </section>
                <br />
                <NavbarMenu
                    menuSize={navContent.menuSize}
                >
                    {
                        links.map(link => <NavbarLinkGen
                            key={link.name}
                            name={link.name} 
                            iconFa={link.icon}
                            menuSize={navContent.menuSize}
                            onMenu = {() => {navigateView(link.url)}}
                        />)
                    }
                    {/* estos mas bien son con version movil */}
                    {
                        navContent.menuSize &&
                        <React.Fragment key={"navBRs"}>
                            <br />
                            <br />
                        </React.Fragment>
                    }
                    {/* tipos mediante peticion. */}
                </NavbarMenu>
                <NavbarProfile
                    userName={userInfo.userName}
                    userCareer={userInfo.userCareer}
                    menuSize={navContent.menuSize}
                />
            </Navbar>
            <div className="block w-full static z-0 md:z-auto md:flex-1 md:flex md:flex-col md:relative md:w-5/6">
                <header className="flex items-center justify-center bg-transparent h-16 w-full">
                    <div className="flex items-center justify-center burguerButton h-full w-fit p-2 bg-gray-700" onClick={isMobile ? toggleNavbar : navSizeHandler}>
                        <FontAwesomeIcon className="burguerButtonIcon h-9 " icon={faBars} color="white"/>
                    </div>
                    <div className="titleLogo flex items-center justify-center h-full w-full">
                        <img className="titleLogoImg h-full" src={mainLogo} alt="Pokemon" />
                    </div>
                </header>
                <main className="flex w-full h-fit">
                    <CardCanvas>
                        {children}
                    </CardCanvas>
                </main>
            </div>
        </div>
    );
}

export { Layout };