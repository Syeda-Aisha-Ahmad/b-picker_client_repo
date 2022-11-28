import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();


    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // LogIn
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    //Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    //reset pass
    const resetPassword = (userEmail) => {
        return sendPasswordResetEmail(auth, userEmail);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User Observing');
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);



    const authInfo = {
        createUser,
        loginUser,
        googleLogin,
        user,
        logOut,
        loading,
        resetPassword
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


