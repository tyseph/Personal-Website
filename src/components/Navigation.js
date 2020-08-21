import React from "react";
import '../assets/main.css';
import { Link, withRouter } from "react-router-dom";
import { Instagram, Linkedin, GitHub, Mail, ChevronsDown } from 'react-feather';
import '../App.css';

function Show() {
  document.getElementById("Box").className="block";
;}

function Hide() {
  document.getElementById("Box").className="hidden";
}

function Navigation(props) {
  
  return (
    <nav class="items-center justify-between py-2 shadow-lg bg-green-500">
    <div class="flex w-24 align-middle items-center text-sm text-white ml-4">
    <Link to="/" class="font-semibold font-sans block mr-4 lg:mt-0 text-gray-200 hover:text-gray-800 transform origin-top-left duration-200">
          Home
        </Link>
    <Link to="/Skills" class="font-semibold font-sans block mr-4 lg:mt-0 text-gray-200 hover:text-gray-800 transform origin-top-left duration-200">
          Skills
        </Link>
    <Link to="/contact" class="font-semibold font-sans block mr-4 lg:mt-0 text-gray-200 hover:text-gray-800 transform origin-top-left duration-200">
          Contact
        </Link>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-md font-serif lg:flex-grow">
      </div>
      <div>
      <div className="flex inline ml-5 align-middle">
					{/* <a href="#!">
						<Facebook className="mr-6 transform duration-200 hover:scale-150 -mt-4" color="white" size={25} />
					</a>
				 	<a href="#!">
						<Twitter className="mr-6 transform duration-200 hover:scale-150 -mt-4" color="white" size={25} />
					</a> */}
				  <a href="https://github.com/tyseph">
						<GitHub className="mr-6 transform duration-200 hover:scale-150 -mt-4" color="white" size={25} />
					</a>
					<a href="https://www.instagram.com/weed_wala/">
						<Instagram className="mr-6 transform duration-200 hover:scale-150 -mt-4" color="white" size={25} />
					</a>
					<a href="https://www.linkedin.com/in/sajal-ganjewala-9a16581a0/">
						<Linkedin className="mr-6 transform duration-200 hover:scale-150 -mt-4" color="white" size={25} />
					</a>
          <button onMouseOver={Show} onMouseOut={Hide}>
            <Mail name="test" className="mr-6 transform duration-200 hover:scale-150 -mt-4" color="white" size={25}/>
          </button>
				</div>
        {/* <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a> */}
      </div>
    </div>
    <div id="Box" className="hidden">
      <ChevronsDown className="absolute right-0 align-middle mt-2 mr-5 animate-bounce" color="white" size={35}/>
      <div className="absolute rounded-lg bg-white w-64 p-2 block right-0 mt-8 mr-4 align-middle text-center z-40 shadow-2xl">
            <p className="text-gray-900 font-mono font-semibold tracking-wider">
              sajalganjewala1@gmail.com
            </p>
          </div>
    </div>
  </nav>
  );
}

export default withRouter(Navigation);