import React, { createContext, useEffect, useState } from "react";
import { AuthClient } from '@dfinity/auth-client';

export const AuthContext = createContext();

export function AuthProvider({ children }){
    const [isAuthenticaded, setIsAuthenticaded] = useState(false);

    useEffect(() => {
        init();
    }, [isAuthenticaded]);

    async function init(){
        const authClient = await AuthClient.create();
        if(!authClient.getIdentity().getPrincipal().isAnonymous()){
            setIsAuthenticaded(true);
        }
    }

    const login = async () => {
        const authClient = await AuthClient.create();
        authClient.login({
            identityProvider: "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/",
            onSuccess:async () => {
                setIsAuthenticaded(true);
            },
            onError:(err) => {
                console.log(err);
            }
        });
    }

    const logout = async () => {
        const authClient = await AuthClient.create();
        await authClient.logout();
        setIsAuthenticaded(false);
    }

    return(
        <AuthContext.Provider value={{isAuthenticaded, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}