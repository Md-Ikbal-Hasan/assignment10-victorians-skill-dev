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
    GithubAuthProvider


} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // register user with google
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // register user with github
    const createUserWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }


    // register user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user name and profile picture
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // logout user
    const logOut = () => {

        return signOut(auth)
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
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
        createUserWithGithub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;