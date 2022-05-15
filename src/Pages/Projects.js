import React from 'react'
import Navbar from "../Components/Navbar"
import background from "../Images/background.jpg";

const Projects = () => {
  return (
    <div  className="text-gray-100 leading-normal tracking-wider bg-cover lg:mb-0"
        style={{ backgroundImage: `url(${background})` }}>
      <div className="bg-steal-900 bg-emerald-700">
        <Navbar />
      </div>
      <div className='justify-around flex flex-wrap pt-6'>
        <div>
          <p>
           <a href='http://bubacarrm.netlify.app' target='_blank' rel="noreferrer" ><button className='bg-sky-500 p-3 rounded-lg'>Portfolio</button></a>
          </p>
          <iframe height='200' width='300' className='rounded-2xl mb-6 pt-3' title='portfolio' src='http://bubacarrm.netlify.app'></iframe>
        </div>
        <div>
          <p>
           <a href='http://bubacarrtodo.netlify.app' target='_blank' rel="noreferrer" ><button className='bg-sky-500 p-3 rounded-lg'>Todo App</button></a>
          </p>
          <iframe height='2oo' width='300' className='rounded-2xl mb-6 pt-3' title='portfolio' src='http://bubacarrtodo.netlify.app'></iframe>
        </div>
        <div>
          <p><a href='http://albuba.netlify.app' target='_blank' rel="noreferrer" ><button className='bg-sky-500 p-3 rounded-lg'>My website</button></a></p>
           <iframe height='200' width='300' className='rounded-2xl mb-6 pt-3' title='portfolio' src='http://albuba.netlify.app'></iframe>
        </div>
        <div>
          <p><a href='http://abuweather.netlify.app' target='_blank' rel="noreferrer" ><button className='bg-sky-500 p-3 rounded-lg'>Weather App</button></a></p>
          <iframe height='200' width='300' className='rounded-2xl mb-6 pt-3' title='portfolio' src='http://abuweather.netlify.app'></iframe>
        </div>    
      </div>
    </div>
  );
}

export default Projects