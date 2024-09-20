//////* librerias y componentes nativos *//////
import React from "react";
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
//////* Hojas de estilo *//////
//////* Importaciones Multimedia *//////
import mainLogo from "../assets/img/TitleLogo.png";

function Layout({children})
{

    const { links } = useMenuLinks();
    const { userInfo } = useProfileInfo();

    return(
        <>
            <header className="flex items-center justify-center bg-transparent h-16">
                <img className="h-full object-contain" src={mainLogo} alt="Pokemon" />
            </header>
            <Navbar>
                <NavbarLogo mainLogo={mainLogo}/>
                <NavbarMenu>
                    {
                        links.map(link => <NavbarLinkGen
                            key={link.name}
                            name={link.name} 
                            icon={link.icon}
                        />)
                    }
                    <br key={"br1"}/>
                    <br key={"br2"}/>
                    {/* tipos mediante peticion. */}
                </NavbarMenu>
                <NavbarProfile
                    userName={userInfo.userName}
                    userCareer={userInfo.userCareer}
                />
            </Navbar>
            <main>
                <CardCanvas>
                    {children}
                </CardCanvas>
            </main>
        </>
    );
}

export { Layout };