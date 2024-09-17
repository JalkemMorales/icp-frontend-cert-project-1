import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Logout(){
    const { logout } = useContext(AuthContext);
    return(
        <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="nav-link" to="carrito"><i class="fa-solid fa-cart-shopping"></i></Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fa-solid fa-circle-user"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <a class="dropdown-item">
              <strong>Register</strong>
            </a>
            <a href="#" class="dropdown-item">
              <strong>Profile</strong>
            </a>
            <a href="#" class="dropdown-item">
              <strong>My Jobs</strong>
            </a>
            <a href="#" class="dropdown-item">
              <strong>My Searches</strong>
            </a>
            <a href="#" class="dropdown-item">
              <strong>Employer Dashboard</strong>
            </a>
            <a href="#" class="dropdown-item">
              <strong>Login</strong>
            </a>
            <button class="dropdown-item" onClick={logout}>Log Out</button>
          </ul>
          </li>
          </ul>
    );
}


export default Logout;