import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileDetails from './ProfileDetails';
import Papers from './Papers';
import Links from './Links';

const Profile = () => {
    return (
        <div>
            <ProfileHeader></ProfileHeader>
            <ProfileDetails></ProfileDetails>
            <Papers></Papers>
            <Links></Links>
        </div>
    );
};

export default Profile;