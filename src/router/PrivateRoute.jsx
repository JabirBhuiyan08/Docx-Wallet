import React from 'react';
import useAuth from '../hooks/useAuth';
import logo from '../assets/logo-2.png'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading){
        return (
        <div className='flex flex-col justify-center items-center h-screen '>
            <img src={logo} alt="" className='w-32'/>
        <span className="loading loading-infinity loading-xl text-blue-400"></span>
        </div>
    )}
    if(user){
        return children;
    }

    return (
        <Navigate to="/login" state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;