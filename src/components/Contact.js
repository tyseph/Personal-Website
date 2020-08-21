import React from "react";
import { Instagram, Mail, Linkedin, GitHub } from 'react-feather';

function Contact() {

  return (
    <div className="contact">
      <div className="flex flex-wrap h-screen w-full bg-green-500 content-center align-middle -mt-8">
				  <div className="table m-auto inline-block ">
          <a href="https://github.com/tyseph">
						<GitHub className="transform duration-300 lg:hover:scale-150" color="white" size={250} />
					</a>
          </div>
          
					<div className="table m-auto inline-block ">
          <a href="https://www.instagram.com/weed_wala/">
						<Instagram className="transform duration-300 lg:hover:scale-150" color="white" size={250} />
					</a>
          </div>
          
					<div className="table m-auto inline-block ">
          <a href="https://www.linkedin.com/in/sajal-ganjewala-9a16581a0/">
						<Linkedin className="transform duration-300 lg:hover:scale-150" color="white" size={250} />
					</a>
          </div>  
			</div>
          <div className="table m-auto flex -mt-24 bg-green-500">
            <div className="transform duration-200 hover:scale-150">
            <Mail className="inline-block mr-4" color="white" size={50} />
            <p className="inline-block text-white font-mono font-semibold tracking-widest text-2xl">
              sajalganjewala1@gmail.com
            </p>
            </div>
          </div>       
    </div>
  );
}

export default Contact;