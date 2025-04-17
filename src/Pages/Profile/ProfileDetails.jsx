import React from "react";

const ProfileDetails = () => {
  return (
    <div
      className="flex justify-between
    font-bold ml-32 mr-32 mt-10 items-center mx-auto"
    >
      <div className="flex flex-col gap-4">
        <h1>Full Name:</h1>
        <h1>Father Name:</h1>
        <h1>Mother Name:</h1>
        <h1>Nationality:</h1>
        <h1>Permanent Address:</h1>
        <h1>Present Address:</h1>
      </div>

      <div className="flex flex-col justify-center">
        <h1>Phone Number:</h1>
        <br />
        <h1 className="text-green-500 text-2xl">+65*******04</h1>
        <h1>Date of Birth:</h1>
        <br />
        <h1 className="text-green-500 text-2xl">DD-MM-YY</h1>
      </div>
    </div>
  );
};

export default ProfileDetails;
