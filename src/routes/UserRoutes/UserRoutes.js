import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useUser from '../../hook/userAccount/userAccount';

const UserRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isUser, isUserLoading] = useUser(user?.email);
    const location = useLocation();

    if (loading || isUserLoading) {
        return <p>fd</p>
    }

    if (user && isUser) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default UserRoutes;