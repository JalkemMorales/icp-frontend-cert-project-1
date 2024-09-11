import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login(){
    const { login } = useContext(AuthContext);
    return(
        <li class="nav-item">
            <button class="nav-link" onClick={login}><i class="fa-solid fa-right-to-bracket"></i></button>
        </li>
    );
}

export default Login;