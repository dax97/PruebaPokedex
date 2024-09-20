import profilePng from "../../assets/img/male_user.png"

function NavbarProfile({props})
{
    return(
        <div className="profile-details">
            <div className="profile-content">
                <img src={props.pokeDexPhoto} alt="Nombre de Usuario"/> {/* {variable nombre de usuario {{request.user.username}}  */}
            </div>
            <div className="name-job">
                <div className="profile_name">{props.userName}{/* {request.user.first_name} */}</div>
                {/* realmente la variable se llama job o position pero en BD se encuentra asi y podria generar confusiones 
                a futuro ya que es dificil cambiarlo */}
                <div className="job">{props.userCareer}{/* {request.user.last_name} */}</div>
            </div>
            <a href="">{/*  url para logout {% url 'logout' %} */}
                <i className='bx bx-log-out'></i>
            </a>
        </div>
    );
}

export { NavbarProfile };