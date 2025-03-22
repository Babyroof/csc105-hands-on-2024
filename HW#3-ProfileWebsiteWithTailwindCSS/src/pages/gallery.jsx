import React from "react";
import Pic1 from "../image/Bokuto3.jpg";
import Pic2 from "../image/Bokuto4.jpg";
import Pic3 from "../image/Bokuto5.jpg";
import Pic4 from "../image/Bokuto6.jpg";
import Pic5 from "../image/Bokuto7.jpg";
import Pic6 from "../image/bokuto8.jpg";

const Gallery = () => {
    return (
      <div id='gallery' className="min-h-screen p-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          <img src={Pic1} alt="Gallery Image 1" className="w-full rounded-xl shadow-md object-fill" />
          <img src={Pic2} alt="Gallery Image 2" className="w-full rounded-xl shadow-md object-cover" />
          <img src={Pic3} alt="Gallery Image 3" className="w-full rounded-xl shadow-md object-fill" />
          <img src={Pic4} alt="Gallery Image 4" className="w-full rounded-xl shadow-md object-cover" />
          <img src={Pic5} alt="Gallery Image 5" className="w-full rounded-xl shadow-md object-cover" />
          <img src={Pic6} alt="Gallery Image 6" className="w-full rounded-xl shadow-md object-cover" />
        </div>
      </div>
    );
  };
  
export default Gallery;
