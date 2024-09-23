import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePng from "../../assets/img/male_user.png"
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

function NavbarProfile(props)
{
    return(
        <div className={`profile-details flex w-full mt-auto ${props.menuSize ? " p-4 border-t-8 border-gray-700": "md: mt-auto"}`}>
            <section className={`${props.menuSize ? " w-3/5": "w-full"}`}>
                <div className={`profile-content flex items-center ${props.menuSize ? "space-x-3": ""}`}>
                    <img className="h-10 w-10 rounded-full" src={!props.pokeDexPhoto ? profilePng : props.pokeDexPhoto} alt="Nombre de Usuario"/>
                </div>
                {
                    props.menuSize &&
                    <div className="name-job m-2">
                        <div className="profile_name text-xl">{props.userName}</div>
                        <div className="job text-xl">{props.userCareer}</div>
                    </div>
                }
                
            </section>
            {
                props.menuSize &&
                <section className="flex w-2/5 items-center justify-center">
                    <FontAwesomeIcon className="logoutIcon h-11" icon={faSquareArrowUpRight}/>
                </section>
            }
        </div>
    );
}

export { NavbarProfile };