import React from 'react';
import useAuth from './useAuth';
import logo from '../assets/logo-2.png'

const Loading = () => {
    const {loading} = useAuth();
    if (loading) {
        return (
            <div className='flex flex-col justify-center items-center h-screen '>
                <img src={logo} alt="" className='w-32'/>
                <span className="loading loading-infinity loading-xl text-blue-400"></span>
            <h1 className='text-xl'>Loading...</h1>
            </div>
        )
    }
    return null
};

export default Loading;