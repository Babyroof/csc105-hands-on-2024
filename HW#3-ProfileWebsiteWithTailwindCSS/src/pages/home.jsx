import React from "react";
import MyImage from "../image/bokuto2.png";
import facebookIcon from "../icons/facebookIcon.png";
import instagramIcon from "../icons/instagramIcon.png";
import githubIcon from "../icons/githubIcon.png";

const Home = () => {
  return (
    <div id="home" className="min-h-screen bg-white p-6">
      <div className="flex flex-row justify-center items-center h-full">
        <div className="mt-20 text-start mr-6 md:mr-20 ml-20 max-w-md">
          <p className="text-xl font-bold">Hello, It's me</p>
          <h1 className="mt-2 text-4xl md:text-3xl font-bold sm:text-2xl">Tanapoom</h1>
          <p className="text-lg md:text-xl font-bold mt-4">
            I'm a Computer Science student
          </p>
          <p className="mt-2 text-sm md:text-base font-bold max-w-xs">
            I'd like to practice more about coding because I love coding so
            much!
          </p>

          <div className="mt-5 flex space-x-4">
            <a
              target="_space"
              href="https://www.instagram.com/txnaa__?igsh=YjUwOTYyaGJsM3Zq&utm_source=qr"
            >
              <img src={instagramIcon} className="w-6 h-6" alt="Instagram" />
            </a>
            <a
              target="_space"
              href="https://www.facebook.com/profile.php?id=100016637527643"
            >
              <img src={facebookIcon} className="w-6 h-6" alt="Facebook" />
            </a>
            <a target="_space" href="https://github.com/Babyroof">
              <img src={githubIcon} className="w-6 h-6" alt="GitHub" />
            </a>
          </div>

          <button className="mt-6 py-2 px-6 bg-green-800 hover:bg-green-500 text-white rounded-full">
            My Portfolio
          </button>
        </div>

        <div className="flex-shrink-0">
          <img
            src={MyImage}
            alt="My Profile"
            className="w-60 md:w-80 h-auto mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
