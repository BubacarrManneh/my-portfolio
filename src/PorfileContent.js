import React from 'react'
import SocialMedia from './SocialMedia';
import ContactForm from './ContactForm';

const PorfileContent = () => {
  return (
    <div className="w-full lg:w-4/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-gray-900 opacity-75 mx-6 lg:mx-0">
      <h1 className="text-3xl font-bold text-white pt-8 lg:pt-0 hr-2">
        Bubacarr Manneh
      </h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-white opacity-50"></div>
      <p className="pt-4 pl-5 text-base font-bold flex items-center justify-center lg:justify-start">
        Full-Stack web developer and IT Technician
      </p>
      <p className="pt-4 pl-5 text-gray-300 text-xs lg:text-sm font-bold flex items-center justify-center lg:justify-start">
        Greater Groningen area, Groningen, NL
      </p>
      <p className="pt-8 text-sm pl-1">
        Enthusiastic web developer and IT technician living in Groningen, Nl
      </p>
      <p className="pt-2 text-sm">
        Find me on LinkedIn and GitHub for my professional records and some of
        my projects
      </p>
      <ContactForm />
      <SocialMedia />
    </div>
  );
}

export default PorfileContent