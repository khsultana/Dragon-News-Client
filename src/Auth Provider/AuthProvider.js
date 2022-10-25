import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Current', currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }

    }, [])

    const authInfo = { user, providerLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}


        </AuthContext.Provider>
    );
};

export default AuthProvider;