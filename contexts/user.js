import React, {createContext, useState, useEffect} from "react";

import firebaseApp from '../services/firebase';

import { getFirestore } from '@firebase/firestore';

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut as signOutFirebase,
    onAuthStateChanged,
    sendPasswordResetEmail
    } from 'firebase/auth';

import { NavigationContainer } from '@react-navigation/native';

const auth = getAuth();

const UsuarioContext = createContext({});

const UsuarioProvider = ({children}) =>{

    useEffect(() => {
        onAuthStateChanged(auth, (userState) => {
            setUser(userState)
        })
    },[])
    
    const [user,setUser] = useState(null);

    const signIn = async (email,password) => {
        signInWithEmailAndPassword(auth,email,password).then(resp=>{

            })
            .catch(err=>console.error('Falha no login. Tente novamente'))
    }

    const signUp = async (email,password) => {
        createUserWithEmailAndPassword(auth,email,password).then(resp=>{

            })
            .catch(err=>console.warn(err))
    }

    const signOut = () => {
        signOutFirebase(auth).then(resp=>{
            console.warn('Usuário Deslogado')
        })
        .catch(err=>console.warn(err))
    }

    const passwordReset = async (email) => {
        sendPasswordResetEmail(auth,email).then(resp=>{
            console.warn('Por favor, verifique seu e-mail')
        })
        .catch(err=>console.error(err))
    }
    
    return(
        <UsuarioContext.Provider value={{user, signIn, signUp, signOut, passwordReset}}>
            {children}
        </UsuarioContext.Provider>
    )
}

export {UsuarioContext, UsuarioProvider};