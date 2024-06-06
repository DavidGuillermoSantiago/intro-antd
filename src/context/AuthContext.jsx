import { useState, useEffect, createContext } from "react";
import { storageController } from "../services/token";

export const AuthContext = createContext();


export const AuthProvider = (props) => {
    const { children } = props;

    
    useEffect(()=>{
        getSession();
    }, []);

    const getSession = async () => {
        const token = await storageController.getToken();
        console.log('Token --> :', token);
    }


    const login = async (token) => {
        try  {
            console.log('Obteniendo', token);
            await storageController.setToken(token);
        } catch (error) {
            console.error(error);
        }
    }


    const data = {
        user: 'David',
        login,
        logout: () => console.log('logout'),
        upDateUser: () => console.log('updateUser')
    }

    return (
        <AuthContext.Provider value={data}>
            { children }
        </AuthContext.Provider>
    )

}


