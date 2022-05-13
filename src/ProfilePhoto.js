import React from 'react'
import profile from './Images/profile.jpg'

const ProfilePhoto = () => {
  return (
    <div
      className="w-full lg:w-2/5 text-sky-500 lg:mx-0"
      // style={{ backgroundImage: `url(${profile})` }}
    >
      <img src={profile} alt="Profile"></img>
    </div>
  );
}
export default ProfilePhoto