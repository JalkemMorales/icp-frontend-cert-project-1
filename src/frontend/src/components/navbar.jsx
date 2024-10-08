import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import '../css/navbar.css'

function Navbar(){
  const { isAuthenticaded } = useContext(AuthContext);
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary barra">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Tienda</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className="nav-link" to="/">Productos</Link>
        </li>
      </ul>
      { isAuthenticaded ? <Logout></Logout> : <Login></Login>}
    </div>
  </div>
</nav>
    );
}

export default Navbar;