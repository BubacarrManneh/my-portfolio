import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="w-full pt-0 flex justify-around ">
        <Link to="/">
          <div className="hover:bg-teal-900 text-white font-bold py-5 px-4">
            Home
          </div>
        </Link>
        <Link to="/Projects">
          <div className="hover:bg-teal-900 text-white font-bold py-5 px-4">
            Projects
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar