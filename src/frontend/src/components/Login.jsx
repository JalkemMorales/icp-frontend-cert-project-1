import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login(){
    const { login } = useContext(AuthContext);
    return(
        <div class="d-flex">
            <button class="nav-link" onClick={login}><i class="fa-solid fa-right-to-bracket"></i></button>
        </div>
    );
}

export default Login;