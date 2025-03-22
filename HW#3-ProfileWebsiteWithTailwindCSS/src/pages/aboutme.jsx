import React from "react";
import Mypic from "../image//bokuto.png";

const Aboutme = () => {
  return (
    <div id="aboutme" className="min-h-screen bg-white p-6">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-center">
        <img
          src={Mypic}
          className="w-90 h-auto md:mr-16 mb-8 md:mb-0 rounded-xl"
          alt="My Profile"
        />

        <div className="text-center mt-20 md:text-start max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          <p className="text-lg md:text-xl font-semibold mt-4">Computer Science</p>
          <p className="mt-5 text-sm md:text-base text-gray-700">
            I am a 19-year-old Computer Science major with a passion for technology and innovation.
            I am constantly exploring new programming languages, tools, and frameworks to expand my
            knowledge and improve my skills. Outside of my academic pursuits, I have a deep love for
            food and enjoy exploring different cuisines, always seeking new culinary experiences.
            Whether it's coding a new project or trying a unique dish, I am always eager to learn and
            discover new things.
          </p>

          <button className="mt-6 py-2 px-6 bg-green-800 hover:bg-green-500 text-white rounded-full">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};


export default Aboutme;
