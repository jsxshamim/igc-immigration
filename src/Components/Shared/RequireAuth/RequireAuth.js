import React from "react";
import auth from "../../../Utilities/Firebase.init";
import { useLocation, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const RequireAuth = ({ children }) => {
    const location = useLocation();

    const [user, loading] = useAuthState(auth);

    if (loading) {
        return "Loading ...";
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;
