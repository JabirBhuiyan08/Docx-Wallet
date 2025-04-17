import React from 'react';
import logo from "../../assets/logo-2.png";

const ProfileHeader = () => {
    return (
        <div>
            <div className="flex justify-between items-center mx-auto p-4 px-10">
                    <div className="flex items-center gap-4">
                      <img src={logo} alt="" className="w-56" />
            
                      <div>
                        <h1 className="text-5xl font-bold">
                          <span className="text-blue-700 font-bold">Docx</span> Wallet
                        </h1>
                        <p>
                          Username - <span>docxwallet</span>
                        </p>
                        <p>Company- docx Wallets pte ltd</p>
                        <p>Work permit Number- 123456</p>
            
                        <h1 className="text-xl font-bold text-blue-800">Edit Account</h1>
                      </div>
                    </div>
                    <div className="flex flex-col font-bold items-center gap-4">
                      QR Code
                      <small className='text-blue-600'>Download QR Code</small>
                    </div>
                  </div>
        </div>
    );
};

export default ProfileHeader;