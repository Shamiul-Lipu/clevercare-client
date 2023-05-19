/* eslint-disable react/prop-types */
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    // pop up sign in with google 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // observe state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loogdedUser => {
            setUser(loogdedUser);
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = { user, createUser, auth, signInUser, logOut, signInWithGoogle, }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;