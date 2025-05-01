import React from 'react';
import useAuth from './useAuth';
import logo from '../assets/logo-2.png'

const Loading = () => {
    const {Loading} = useAuth();
    if (Loading) {
        return (
            <div className='flex flex-col justify-center items-center h-screen '>
                <img src={logo} alt="" className='w-32'/>
                <span className="loading loading-infinity loading-xl text-blue-400"></span>
            </div>
        )
    }
    return null
};

export default Loading;