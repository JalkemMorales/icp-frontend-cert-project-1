import { useState } from "react";

function Login(){
    const [isLogged, setIsLogged] = useState(false);
    return(
        <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa-solid fa-right-to-bracket"></i></a>
        </li>
    );
}

export default Login;