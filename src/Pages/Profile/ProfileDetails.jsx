import React from "react";

const ProfileDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-8 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 border-b pb-3">
        Personal Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Basic Info */}
        <div className="space-y-6">
          <div className="flex flex-row md:flex-row md:items-center gap-4">
            <h3 className="text-gray-600 font-semibold w-40">Full Name:</h3>
            <p className="text-gray-800 font-medium">John Doe</p>
          </div>
          
          <div className="flex flex-row md:flex-row md:items-center gap-4">
            <h3 className="text-gray-600 font-semibold w-40">Father's Name:</h3>
            <p className="text-gray-800 font-medium">Robert Doe</p>
          </div>
          
          <div className="flex flex-row md:flex-row md:items-center gap-4">
            <h3 className="text-gray-600 font-semibold w-40">Mother's Name:</h3>
            <p className="text-gray-800 font-medium">Sarah Doe</p>
          </div>
          
          <div className="flex flex-row md:flex-row md:items-center gap-4">
            <h3 className="text-gray-600 font-semibold w-40">Nationality:</h3>
            <p className="text-gray-800 font-medium">Singaporean</p>
          </div>
          
          <div className="flex flex-row md:flex-row gap-4">
            <h3 className="text-gray-600 font-semibold w-40">Permanent Address:</h3>
            <p className="text-gray-800 font-medium">
              123 Main Street, #04-56, Singapore 123456
            </p>
          </div>
          
          <div className="flex flex-row md:flex-row gap-4">
            <h3 className="text-gray-600 font-semibold w-40">Present Address:</h3>
            <p className="text-gray-800 font-medium">
              456 Orchard Road, #12-34, Singapore 654321
            </p>
          </div>
        </div>

        {/* Right Column - Contact Info */}
        <div className="space-y-6">
          <div className="flex flex-row gap-2">
            <h3 className="text-gray-600 font-semibold">Phone Number:</h3>
            <p className="text-green-600 text-xl font-bold">+65 •••••••04</p>
          </div>
          
          <div className="flex flex-row gap-2">
            <h3 className="text-gray-600 font-semibold">Date of Birth:</h3>
            <p className="text-green-600 text-xl font-bold">15-03-1985</p>
          </div>
          
          <div className="flex flex-row gap-2 mt-8">
            <h3 className="text-gray-600 font-semibold">ID Type:</h3>
            <p className="text-gray-800 font-medium">Passport</p>
          </div>
          
          <div className="flex flex-row gap-2">
            <h3 className="text-gray-600 font-semibold">ID Number:</h3>
            <p className="text-gray-800 font-medium">E•••••1234</p>
          </div>
          
          <div className="flex flex-row gap-2">
            <h3 className="text-gray-600 font-semibold">Occupation:</h3>
            <p className="text-gray-800 font-medium">Software Engineer</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;