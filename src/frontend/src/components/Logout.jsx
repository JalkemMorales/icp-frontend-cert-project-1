import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Logout(){
    const { logout } = useContext(AuthContext);
    return(
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-circle-user"></i>
          </a>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item" onClick={logout}>Log Out</button></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
    );
}

export default Logout;