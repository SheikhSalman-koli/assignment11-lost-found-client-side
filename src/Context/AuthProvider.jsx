import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Componants/firebase/credential';


const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    // console.log(user);

    const provider = new GoogleAuthProvider

    const createUser = (email, password) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
         setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSign = () =>{
         setIsLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUser =(updated)=>{
        return updateProfile(auth.currentUser,updated)
    }

    const logOut =()=>{
        return signOut(auth)
    }
   
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
             setIsLoading(false)
        })
        return () => unsubscribe()
    },[])
    

    const allFunc = {
      createUser,
      updateUser,
      setUser,
      user,
      logOut,
      login,
      googleSign,
      isLoading
    }

    return (
        <AuthContext value={allFunc}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;