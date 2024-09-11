import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Tienda</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link className="nav-link" to="/">Productos</Link>
        </li>
        {/* Este carrito solo tiene que mostrarse cuando el usuario esta autenticado */}
        <li class="nav-item">
          <Link className="nav-link" to="carrito"><i class="fa-solid fa-cart-shopping"></i></Link>
        </li>
        {/* Si NO esta autenticado */}
        {
          <Login></Login>
        }
        {/* Si esta autenticado */}
        {
          <Logout></Logout>
        }
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;