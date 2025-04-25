import logo from '../assets/logo-1.png';
import { Link, useNavigate } from "react-router-dom";
import { HelpCircle, HomeIcon, Info, Lock, LogIn, LogOut, Menu, X } from 'lucide-react';
import { UserCircle } from 'lucide-react';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';

const Navbar = () => {
    const { logOut, user } = useAuth();
    const Navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await logOut();
            Navigate('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    }

    return (
        <div className='fixed top-0 w-full z-10 bg-white mx-auto p-4 shadow-lg'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <Link to='/'>
                        <img 
                            src={logo} 
                            alt="Logo" 
                            className='w-40 md:w-56 transition-transform duration-300 transform hover:scale-105' 
                        />
                    </Link>
                </div>
                
                {/* Hamburger Icon */}
                <div className="md:hidden z-20">
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        className="p-2 focus:outline-none"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
                
                {/* Mobile Menu Backdrop */}
                {menuOpen && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                        onClick={() => setMenuOpen(false)}
                    />
                )}
                
                {/* Nav Links */}
                <div className={`
                    fixed md:static top-0 right-0 w-3/4 h-full md:w-auto md:h-auto
                    bg-white md:bg-transparent shadow-lg md:shadow-none
                    transition-transform duration-300 ease-in-out
                    ${menuOpen ? 'translate-x-0' : 'translate-x-full'} 
                    md:translate-x-0 z-10
                    flex items-center md:block
                `}>
                    <ul className='
                        w-full p-6 md:p-0
                        flex flex-col md:flex-row 
                        md:space-x-6 lg:space-x-10 
                        gap-5 md:gap-0 
                        font-semibold text-black
                    '>
                        {user && (
                            <li className='hover:text-blue-500 hover:scale-105 transition-all duration-300'>
                                <Link 
                                    to='/profile' 
                                    className='flex items-center gap-2 p-2'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <UserCircle className='text-blue-400' /> Profile
                                </Link>
                            </li>
                        )}
                        <li className='hover:text-blue-500 hover:scale-105 transition-all duration-300'>
                            <Link 
                                to='/' 
                                className='flex items-center gap-2 p-2'
                                onClick={() => setMenuOpen(false)}
                            >
                                <HomeIcon className='text-blue-400' /> Home
                            </Link>
                        </li>
                        <li className='hover:text-blue-500 hover:scale-105 transition-all duration-300'>
                            <Link 
                                to='/data-policy' 
                                className='flex items-center gap-2 p-2'
                                onClick={() => setMenuOpen(false)}
                            >
                                <Lock className='text-blue-400' /> Data Policy
                            </Link>
                        </li>
                        <li className='hover:text-blue-500 hover:scale-105 transition-all duration-300'>
                            <Link 
                                to='/help-center' 
                                className='flex items-center gap-2 p-2'
                                onClick={() => setMenuOpen(false)}
                            >
                                <HelpCircle className='text-blue-400' /> Help Center
                            </Link>
                        </li>
                        <li className='hover:text-blue-500 hover:scale-105 transition-all duration-300'>
                            <Link 
                                to='/about-us' 
                                className='flex items-center gap-2 p-2'
                                onClick={() => setMenuOpen(false)}
                            >
                                <Info className='text-blue-400' /> About Us
                            </Link>
                        </li>
                        {!user ? (
                            <li className='hover:text-blue-500 hover:scale-105 transition-all duration-300'>
                                <Link 
                                    to='/login' 
                                    className='flex items-center gap-2 p-2'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <LogIn className='text-blue-400' /> Login
                                </Link>
                            </li>
                        ) : (
                            <li className='hover:text-blue-500 hover:scale-105 transition-all duration-300'>
                                <button 
                                    onClick={() => {
                                        handleLogout();
                                        setMenuOpen(false);
                                    }} 
                                    className='flex items-center gap-2 p-2 w-full'
                                >
                                    <LogOut className='text-blue-400' /> Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;