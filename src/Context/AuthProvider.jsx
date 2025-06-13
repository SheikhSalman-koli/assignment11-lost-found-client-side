import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Componants/firebase/credential';


const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState()
    console.log(user);

    const provider = new GoogleAuthProvider

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSign = () =>{
        return signInWithPopup(auth, provider)
    }

    const updateUser =(updated)=>{
        return updateProfile(auth.currentUser,updated)
    }

    const logOut =()=>{
        return signOut(auth)
    }
   
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=> unSubscribe()
    },[])
    

    const allFunc = {
      createUser,
      updateUser,
      setUser,
      user,
      logOut,
      login,
      googleSign
    }

    return (
        <AuthContext value={allFunc}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;