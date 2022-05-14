import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="w-full pt-0 flex justify-around ">
        <div className="hover:bg-teal-900 text-white font-bold py-5 px-4">
          <a href="#">Home</a>
        </div>
        <div className="hover:bg-teal-900 text-white font-bold py-5 px-4">
          <a href="#">Projects</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar