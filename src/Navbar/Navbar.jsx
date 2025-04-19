import logo from '../assets/logo-1.png';
import { Link, useNavigate } from "react-router-dom";
import { HelpCircle, HomeIcon, Info, Lock, LogIn, LogOut } from 'lucide-react';
import { UserCircle } from 'lucide-react';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const {logOut, user} = useAuth();
    const Navigate = useNavigate();
    const handleLogout =async() =>{
        try{
            await logOut();
            Navigate('/login');
        } catch(error){
            console.error('Error logging out:', error);
        }
    }
     return (
        <div className='fixed top-0 w-full z-10 bg-white mx-auto p-4 pl-10 pr-10 shadow-lg'>
            <div className='flex justify-between items-center'>
                <div>
                    <Link to='/'>
                        <img src={logo} alt="Logo" className='w-56 transition-transform duration-300 transform hover:scale-105' />
                    </Link>
                </div>
                <div>
                    <ul className='flex space-x-10 gap-5 font-semibold text-black'>
                        {user? (<li className='flex justify-center items-center gap-2 hover:text-blue-500 hover:scale-105 transition-all duration-300'>
                            <Link to='/profile' className='flex items-center'>
                                <UserCircle className='text-blue-400' /> Profile
                            </Link>
                        </li>):('')}
                        <li className='flex justify-center items-center gap-2 hover:text-blue-500 hover:scale-105 transition-all duration-300'>
                            <Link to='/' className='flex items-center'>
                                <HomeIcon className='text-blue-400' /> Home
                            </Link>
                        </li>
                        <li className='flex justify-center items-center gap-2 hover:text-blue-500 hover:scale-105 transition-all duration-300'>
                            <Link to='/data-policy' className='flex items-center'>
                                <Lock className='text-blue-400' /> Data Policy
                            </Link>
                        </li>
                        <li className='flex justify-center items-center gap-2 hover:text-blue-500 hover:scale-105 transition-all duration-300'>
                            <Link to='/help-center' className='flex items-center'>
                                <HelpCircle className='text-blue-400' /> Help Center
                            </Link>
                        </li>
                        <li className='flex justify-center items-center gap-2 hover:text-blue-500 hover:scale-105 transition-all duration-300'>
                            <Link to='/about-us' className='flex items-center'>
                                <Info className='text-blue-400' /> About Us
                            </Link>
                        </li>
                        {!user?
                        (<li className='flex justify-center items-center gap-2 hover:text-blue-500 hover:scale-105 transition-all duration-300'>
                            <Link to='/login' className='flex items-center'>
                                <LogIn className='text-blue-400' /> Login
                            </Link>
                        </li>):(
                        <li className='flex justify-center items-center gap-2 hover:text-blue-500 hover:scale-105 transition-all duration-300' > 
                            <button onClick={handleLogout} className='flex items-center'>
                                <LogOut className='text-blue-400' /> Logout
                            </button>
                            
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
