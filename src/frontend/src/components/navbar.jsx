import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
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
        <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa-solid fa-right-to-bracket"></i></a>
        </li>
        {/* Si esta autenticado */}
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-circle-user"></i>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Log Out</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;