import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    signOut,
    GithubAuthProvider,
    sendPasswordResetEmail


} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // register user with google
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
        setLoading(false);
    }

    // register user with github
    const createUserWithGithub = () => {
        setLoading(false);
        return signInWithPopup(auth, githubProvider);
    }


    // register user with email and password
    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user with email and password
    const signIn = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user name and profile picture
    const updateUserProfile = (profile) => {
        setLoading(false);
        return updateProfile(auth.currentUser, profile);
    }

    // logout user
    const logOut = () => {
        setLoading(false);
        return signOut(auth)
    }

    // verify email address
    const verifyEmail = () => {
        setLoading(false);
        return sendEmailVerification(auth.currentUser);
    }

    // password reset if forget password
    const passwordReset = (email) => {
        setLoading(false);
        return sendPasswordResetEmail(auth, email)
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

        })

        return () => unsubscribe();
    }, [])



    const authInfo = {
        user,
        createUserWithGoogle,
        createUser,
        signIn,
        updateUserProfile,
        logOut,
        createUserWithGithub,
        verifyEmail,
        passwordReset,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;