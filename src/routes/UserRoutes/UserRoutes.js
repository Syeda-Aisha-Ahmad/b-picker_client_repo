import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useUser from '../../hook/userAccount/userAccount';
import Loading from '../../shared/Loading/Loading';

const UserRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useUser(user?.email);
    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <Loading></Loading>
    }

    if (user && isBuyer) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default UserRoutes;