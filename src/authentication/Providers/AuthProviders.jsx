import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignUser,
        signOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;