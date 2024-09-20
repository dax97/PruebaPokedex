//////* librerias y componentes nativos *//////
import React from "react";
//////* componentes de aplicación *//////
import { NavbarLogo } from "../Components/Navbar/NavbarLogo";
import { NavbarMenu } from "../Components/Navbar/NavbarMenu";
import { NavbarProfile } from "../Components/Navbar/NavbarProfile";
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
            <Header className="">
                <img className="" src={mainLogo} alt="Pokemon" />
            </Header>
            <Navbar>
                <NavbarLogo></NavbarLogo>
                <NavbarMenu>
                    {
                        links.map(link => <NavbarLinkGen
                            name={link.name} 
                            icon={link.icon}
                        />)
                    }
                    <br/>
                    <br/>
                    {/* tipos mediante peticion.*/}
                </NavbarMenu>
                <NavbarProfile
                    userName={userInfo.userName}
                    userCareer={userInfo.userCareer}
                />
            </Navbar>
            <Main>
                <CardCanvas>
                    {children}
                </CardCanvas>
            </Main>
        </>
    );
}

export { Layout };