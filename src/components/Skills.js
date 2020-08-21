import React from "react";
import image1 from '../img/html.png'
import image2 from '../img/css.png'
import image3 from '../img/js.png'
import image4 from '../img/react.png'
import image5 from '../img/python.png'
import image6 from '../img/c.png'


function Languages() {
  return (
    <div className="load">
      <div className="flex flex-wrap bg-green-500 w-full h-screen align-middle divide-dashed">
        <div className="hover:bg-white inline-block table m-auto w-1/3 h-full rounded-lg duration-300">
          <img src={image1} className="sliderimg h-64 table m-auto mt-40 hover:scale-125 duration-300 transform -skew-y-12 hover:skew-y-0" alt=""/>
        </div>
        <div className="hover:bg-white inline-block table m-auto w-1/3 h-full rounded-lg duration-300">
          <img src={image2} className="sliderimg h-64 table m-auto mt-40 hover:scale-125 duration-300 transform" alt=""/>
        </div>
        <div className="hover:bg-white inline-block table m-auto w-1/3 h-full rounded-lg duration-300">
          <img src={image3} className="sliderimg h-64 table m-auto mt-40 hover:scale-125 duration-300 transform skew-y-12 hover:skew-y-0" alt=""/>
        </div>
      </div>

      <div className="flex flex-wrap bg-green-500 w-full h-screen align-middle">
        <div className="hover:bg-white inline-block table m-auto w-1/3 h-full rounded-lg duration-300">
          <img src={image4} className="sliderimg h-64 table m-auto mt-40 hover:scale-125 duration-300 transform -skew-y-12 hover:skew-y-0" alt=""/>
        </div>
        <div className="hover:bg-white inline-block table m-auto w-1/3 h-full rounded-lg duration-300">
          <img src={image5} className="sliderimg h-64 table m-auto mt-40 hover:scale-125 duration-300 transform" alt=""/>
        </div>
        <div className="hover:bg-white inline-block table m-auto w-1/3 h-full rounded-lg duration-300">
          <img src={image6} className="sliderimg h-64 table m-auto mt-40 hover:scale-125 duration-300 transform skew-y-12 hover:skew-y-0" alt=""/>
        </div>
      </div>
    </div>
    );
  }
  
  export default Languages;