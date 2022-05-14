import React from 'react'

 import PorfileContent from "../Components/PorfileContent";
import ProfilePhoto from "../Components/ProfilePhoto";
import background from "../Images/background.jpg";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <div
        className="text-gray-100 leading-normal tracking-wider bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Navbar />
        <div
          className=" max-w-4xl flex items-center h-auto lg:h-screen mx-auto my-32
        lg:my-0 border-2 border-amber-700"
        >
          <PorfileContent />
          <ProfilePhoto />
        </div>
      </div>{" "}
    </div>
  );
}

export default Home