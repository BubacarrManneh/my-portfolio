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
      <p className="pt-4 lg:pl-4 text-base font-bold flex items-center justify-center lg:justify-start pl-4">
        {/* Profession SVGs */}
        <svg
          version="1.1"
          id="Uploaded to svgrepo.com"
          x="0px"
          y="0px"
          width="32px"
          height="20px"
          viewBox="0 0 32 32"
          fill="silver"
        >
          <g>
            <path
              class="duotone_twee"
               d="M12,21h8v1h-8V21z M27.5,10h-23C4.225,10,4,10.205,4,10.48V21h7v-0.5c0-0.276,0.224-0.5,0.5-0.5h9
                  c0.276,0,0.5,0.224,0.5,0.5V21h7V10.48C28,10.205,27.775,10,27.5,10z"
            />
            <path
              class="duotone_een"
               d="M28,22v5.492C28,27.767,27.775,28,27.5,28h-23C4.225,28,4,27.767,4,27.492V22h7v0.5
                  c0,0.276,0.224,0.5,0.5,0.5h9c0.276,0,0.5-0.224,0.5-0.5V22H28z M19.5,5h-7C10.156,5,8,5.758,8,9.996h2C10,6.977,11.146,7,12.5,7h7
                  C20.854,7,22,6.977,22,9.996h2C24,5.758,21.844,5,19.5,5z"
            />
          </g>
        </svg>
        {/* End of Profession SVGs */}
        Full-Stack web developer and IT Technician
      </p>
      <p className="pt-4 pl-5 text-gray-300 text-xs lg:text-sm font-bold flex items-center justify-center lg:justify-start">
        {/* Location SVG */}
        <svg
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          width="20px"
          height="20x"
          viewBox="0 0 384.25 384.25"
          fill="silver"
        >
          <g>
            <g>
              <path
                d="M192.125,0C122.955,0,66.674,56.279,66.674,125.449c0,63.29,100.927,232.376,112.427,251.451
                    c2.757,4.557,7.694,7.35,13.024,7.35s10.267-2.793,13.021-7.35c11.504-19.074,112.43-188.161,112.43-251.451
                    C317.576,56.28,261.295,0,192.125,0z M192.125,339.1c-35.029-60.594-95.039-172.887-95.039-213.649
                    c0-52.404,42.635-95.035,95.039-95.035c52.404,0,95.039,42.631,95.039,95.035C287.164,166.198,227.154,278.498,192.125,339.1z"
              />
              <path
                 d="M192.125,53.214c-39.835,0-72.236,32.403-72.236,72.235c0,39.836,32.401,72.236,72.236,72.236
                    c39.832,0,72.236-32.4,72.236-72.236C264.361,85.618,231.957,53.214,192.125,53.214z M192.125,167.274
                    c-23.062,0-41.824-18.762-41.824-41.824c0-23.06,18.762-41.824,41.824-41.824c23.06,0,41.824,18.765,41.824,41.824
                    C233.949,148.512,215.186,167.274,192.125,167.274z"
              />
            </g>
          </g>
        </svg>
        {/* End of location SVG */}
        Greater Groningen area, Groningen, NL
      </p>
      <p className="pt-8 text-sm  lg:justify-start lg:pl-6">
        Enthusiastic web developer and IT technician living in Groningen, Netherlands
      </p>
      {/* Social Media */}
      <p className="pt-2 text-sm lg:pl-4">
        Find me on LinkedIn and GitHub for my professional records and some of
        my projects
      </p>
      <SocialMedia />
      {/* End of Social Media */}
      <ContactForm />
    </div>
  );
}

export default PorfileContent