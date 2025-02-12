import { useContext } from "react";
import { AuthContext } from "../authentication/Providers/AuthProviders";

export const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};