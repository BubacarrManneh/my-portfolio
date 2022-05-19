import React from 'react'
import Navbar from "../Components/Navbar"
import background from "../Images/background.jpg";

const Projects = () => {

    const portfolio = `http://bubacarrm.netlify.app`;
    const todoApp = `http://bubacarrtodo.netlify.app`;
    const mySite = `http://albuba.netlify.app`;
    const weatherApp = `http://abuweather.netlify.app`;
    // const restCoutries = `Rest Countries`;

 

  const handleClick = (url) => {
    window.open(url);
  };

  return (
    <div
      className="text-gray-100 leading-normal tracking-wider bg-cover lg:mb-0 h-100%"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-steal-900 bg-emerald-700">
        <Navbar />
      </div>
      <div className="justify-around flex flex-wrap pt-6">
        <div className=" bg-teal-700 pb-4 mb-2 rounded-2xl rounded-br-2xl">
          <iframe
            height="200"
            width="400"
            scrolling="no"
            className="rounded-2xl mb-6  cursor-pointer"
            title="WeatherApp"
            target="_blank"
            rel="noreferrer"
            src={portfolio}
          ></iframe>
          <button
            onClick={handleClick}
            className="bg-sky-900 hover:bg-sky-700 font-bold p-3 rounded-lg"
          >
            Portfolio
          </button>
        </div>
        <div className=" bg-teal-700 pb-4 mb-2 rounded-2xl rounded-br-2xl">
          <iframe
            height="200"
            width="400"
            scrolling="no"
            className="rounded-2xl mb-6 cursor-pointer"
            title="WeatherApp"
            target="_blank"
            rel="noreferrer"
            src={todoApp}
          ></iframe>
          <button
            onClick={handleClick}
            className="bg-sky-900 hover:bg-sky-700 font-bold p-3 rounded-lg"
          >
            Todo App
          </button>
        </div>
        <div className=" bg-teal-700 pb-4 mb-2 rounded-2xl rounded-br-2xl">
          <iframe
            height="200"
            width="400"
            scrolling="no"
            className="rounded-2xl mb-6  cursor-pointer"
            title="WeatherApp"
            target="_blank"
            rel="noreferrer"
            src={weatherApp}
          ></iframe>
          <button
            onClick={handleClick}
            className="bg-sky-900 hover:bg-sky-700 font-bold p-3 rounded-lg"
          >
            WeatherApp
          </button>
        </div>
        <div className=" bg-teal-700 pb-4 mb-2 rounded-2xl rounded-br-2xl">
          <iframe
            height="200"
            width="400"
            scrolling="no"
            className="rounded-2xl mb-6  cursor-pointer"
            title="WeatherApp"
            target="_blank"
            rel="noreferrer"
            src={mySite}
          ></iframe>
          <button
            onClick={handleClick}
            className="bg-sky-900 hover:bg-sky-700 font-bold p-3 rounded-lg"
          >
            My Website
          </button>
        </div>
        <div className=" bg-teal-700 pb-4 mb-2 rounded-2xl rounded-br-2xl">
          <iframe
            height="200"
            width="400"
            scrolling="no"
            className="rounded-2xl mb-6  cursor-pointer"
            title="WeatherApp"
            target="_blank"
            rel="noreferrer"
            src={weatherApp}
          ></iframe>
          <button
            onClick={handleClick}
            className="bg-sky-900 hover:bg-sky-700 font-bold p-3 rounded-lg"
          >
            WeatherApp
          </button>
        </div>
        <div className=" bg-teal-700 pb-4 mb-2 rounded-2xl rounded-br-2xl">
          <iframe
            height="200"
            width="400"
            scrolling="no"
            className="rounded-2xl mb-6  cursor-pointer"
            title="WeatherApp"
            target="_blank"
            rel="noreferrer"
            src={weatherApp}
          ></iframe>
          <button
            onClick={handleClick}
            className="bg-sky-900 hover:bg-sky-700 font-bold p-3 rounded-lg"
          >
            WeatherApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects