import React, { createContext, useEffect, useState } from "react";
import { AuthClient } from '@dfinity/auth-client';
import { Link, redirect, redirectDocument } from "react-router-dom";
import { AnonymousIdentity } from "@dfinity/agent";

export const AuthContext = createContext();

export function AuthProvider({ children }){
    const [isAuthenticaded, setIsAuthenticaded] = useState(false);
    const [Identidad, setIdentidad] = useState(new AnonymousIdentity());

    useEffect(() => {
        obtenerAuth();
    }, [isAuthenticaded]);

    async function obtenerAuth(){
        const authClient = await AuthClient.create();
        if(!authClient.getIdentity().getPrincipal().isAnonymous()){
            setIdentidad(authClient.getIdentity());
            setIsAuthenticaded(true);
        }
    }

    const login = async () => {
        const authClient = await AuthClient.create();
        let Canister = process.env.CANISTER_ID_INTERNET_IDENTITY;
        let IdentityProvider = 'http://'+Canister+'.localhost:4943/'
        authClient.login({
            identityProvider: IdentityProvider,
            onSuccess:async () => {
                const identity = authClient.getIdentity();
                setIdentidad(identity);
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
        setIdentity(new AnonymousIdentity());
        setIsAuthenticaded(false);
    }

    return(
        <AuthContext.Provider value={{isAuthenticaded, Identidad, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}