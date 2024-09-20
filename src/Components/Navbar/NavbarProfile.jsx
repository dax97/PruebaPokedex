import profilePng from "../../assets/img/male_user.png"

function NavbarProfile(props)
{
    return(
        <div className="profile-details">
            <div className="profile-content">
                <img src={!props.pokeDexPhoto ? profilePng : props.pokeDexPhoto} alt="Nombre de Usuario"/> :
            </div>
            <div className="name-job">
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