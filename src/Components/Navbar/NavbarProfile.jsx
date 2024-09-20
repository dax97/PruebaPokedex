import profilePng from "../../assets/img/male_user.png"

function NavbarProfile(props)
{
    return(
        <div className="profile-details p-4 border-t-8 border-gray-700">
            <div className="profile-content flex items-center space-x-3">
                <img className="h-10 w-10 rounded-full" src={!props.pokeDexPhoto ? profilePng : props.pokeDexPhoto} alt="Nombre de Usuario"/>
            </div>
            <div className="name-job m-2">
                <div className="profile_name">{props.userName}</div>
                <div className="job">{props.userCareer}</div>
            </div>
            <a href="">
                <i className='bx bx-log-out'></i>
            </a>
        </div>
    );
}

export { NavbarProfile };