import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-50 py-8 px-4 md:px-8'>
            <div className='max-w-6xl mx-auto'>
                {/* Links Row */}
                <div className='mb-6 md:mb-8'>
                    <ul className='flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 font-bold text-blue-950'>
                        <li className='hover:text-blue-600 transition-colors'>
                            <a href="#" className='block py-1'>Language Setting</a>
                        </li>
                        <li className='hover:text-blue-600 transition-colors'>
                            <a href="#" className='block py-1'>Data Policy</a>
                        </li>
                        <li className='hover:text-blue-600 transition-colors'>
                            <a href="#" className='block py-1'>Help Center</a>
                        </li>
                        <li className='hover:text-blue-600 transition-colors'>
                            <a href="#" className='block py-1'>About</a>
                        </li>
                    </ul>
                </div>

                {/* Copyright Row */}
                <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mb-4 text-center text-blue-950'>
                    <p className='font-semibold'>
                        ©2025 Docx Wallet All Rights Reserved
                    </p>
                    <span className='hidden md:block'>|</span>
                    <a href="#" className='font-semibold hover:text-blue-600 transition-colors'>
                        Privacy Policy
                    </a>
                </div>

                {/* Powered By Row */}
                <div className='text-center text-blue-950'>
                    <p className='font-semibold text-sm md:text-base'>
                        Powered by Docx Wallet
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;