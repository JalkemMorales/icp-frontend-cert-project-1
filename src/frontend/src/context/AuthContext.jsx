import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }){
    const [isAuthenticaded, setIsAuthenticaded] = useState(false);

    const login = () => {
        setIsAuthenticaded(true);
    }

    const logout = () => {
        setIsAuthenticaded(false);
    }

    return(
        <AuthContext.Provider value={{isAuthenticaded, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}