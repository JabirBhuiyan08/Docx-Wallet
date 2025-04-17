import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col justify-between items-center mx-auto p-4 gap-4'>
            <div>
                 <ul className='flex space-x-10 gap-5 font-bold text-blue-950'>
                    <li>Language Setting</li>
                    <li>Data Policy</li>
                    <li>Help Center</li>
                    <li>About</li>
                 </ul>
            </div>
            <div className='flex items-center font-semibold text-blue-950'>
                <p>©2025 Docx Wallet All Rights Reserved
                <span> /Privecy Policy</span></p>
                    
            </div>
            <div className='font-semibold text-blue-950 text-sm'>
                <p>Powered by Docx Wallet</p>
            </div>
        </div>
    );
};

export default Footer;