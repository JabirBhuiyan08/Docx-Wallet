import React from 'react';
import useAuth from '../../hooks/useAuth';

const ProfileHeader = () => {
  const { user } = useAuth();
  
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto p-4 md:p-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Profile Info Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full lg:w-auto">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img 
                src={user?.photoURL || '/default-avatar.png'} 
                alt="Profile" 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-100"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = '/default-avatar.png'
                }}
              />
            </div>
            
            {/* User Details */}
            <div className='flex flex-col items-center md:items-start gap-2 text-center md:text-left'>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-blue-700">Docx</span> Wallet
              </h1>
              
              <div className="space-y-1 text-sm md:text-base">
                <p className='text-blue-600'>
                  <span className="font-medium">Username:</span> {user?.displayName || 'Not set'}
                </p>
                <p className='text-blue-600'>
                  <span className="font-medium">Email:</span> {user?.email || 'Not available'}
                </p>
                <p>
                  <span className="font-medium">Company:</span> Docx Wallets LTD
                </p>
                <p>
                  <span className="font-medium">Work permit Number:</span> 123456
                </p>
              </div>
              
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base">
                Edit Account
              </button>
            </div>
          </div>
          
          {/* QR Code Section */}
          <div className="flex flex-col items-center gap-3 border-t pt-4 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-8 lg:min-w-[180px]">
            <div className="bg-gray-100 p-3 rounded-lg w-32 h-32 flex items-center justify-center">
              <span className="text-gray-500 text-sm">QR Code</span>
            </div>
            <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm">
              Download QR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;