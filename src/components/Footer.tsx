import React from "react";
import { Facebook, Instagram,  MapPin, Phone, Mail, Linkedin, } from "lucide-react";


const Footer = () => {
   return (
      <footer className="pb-[10] md:pt-[100px] pt-[0px] relative ">
         <div className="shape1 z-[-1]"></div>
         <div className="max-w-[1360px] mx-auto footer md:p-5 p-4">
            <div className="scrolling-text bg-[#004a891a] backdrop-blur-[10px]">
               <div className="scrolling-text_inner direction-left">
                  <div>
                     <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">
                        Design, Develop, Deliver.
                     </div>
                     <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">
                        Pixel-Perfect. Code-Clean.
                     </div>
                     <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">
                        Ideas to Interface.
                     </div>
                     <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">
                        Design, Develop, Deliver.
                     </div>
                     <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">
                        Pixel-Perfect. Code-Clean.
                     </div>
                     <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">
                        Ideas to Interface.
                     </div>
                     <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">
                        Design, Develop, Deliver.
                     </div>
                     <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">
                        Pixel-Perfect. Code-Clean.
                     </div>
                     <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">
                        Ideas to Interface.
                     </div>
                  </div>
               </div>
            </div>
            <div className="middle xl:flex grid sm:grid-cols-2 grid-cols-1 py-8  border-gray-600  gap-[50px] bg-[--background-secondary] rounded-[30px] 2xl:p-12 p-9 bg-[#004a891a] backdrop-blur-[10px]">
               <div className="xl:w-1/4 ">
                  <img src="images//logo.png" alt="" className="w-[170px] mb-8" />
                  <ul className="flex flex-col gap-4">
                     <li className="font-light flex items-start gap-3">
                        <MapPin className="w-5 h-5 mt-1 text-primary flex-none" strokeWidth={1} />
                        <span className="leading-[26px] text-md">
                           Kannur, Kerala, India
                        </span>
                     </li>

                     <li className="font-light flex items-start gap-3">
                        <Phone className="w-5 h-5 mt-1 text-primary" strokeWidth={1} />
                        <div className="flex flex-col gap-1  text-md">
                           <span>+91 99 4684 4274</span>
                           <span>+91 85 4754 9400</span>
                        </div>
                     </li>

                     <li className="font-light flex items-start gap-3 ">
                        <Mail className="w-5 h-5 mt-1 text-primary" strokeWidth={1} />
                        <span className=" text-md">nithulcr@gmail.com</span>
                     </li>
                  </ul>
               </div>
               <div className="xl:w-1/4 ">
                  <h2 className="text-2xl font-medium mb-6 ">Quick Links</h2>
                  <ul className="flex flex-col gap-3">
                     <li className="font-light text-md">Home</li>
                     <li className="font-light text-md">About</li>
                     <li className="font-light text-md">Projects</li>
                     <li className="font-light text-md">Contact</li>
                  </ul>
               </div>
               <div className="xl:w-1/4 ">
                  <h2 className="text-2xl font-medium mb-6 ">Skills</h2>
                  <ul className="flex flex-col gap-3">
                     <li className="font-light text-md">Website Designing</li>
                     <li className="font-light text-md">Website Development</li>
                     <li className="font-light text-md">Graphic Designing</li>
                     <li className="font-light text-md">Portrait Drawing</li>
                     
                  </ul>
               </div>
               <div className="xl:w-[22%] ">
                  <h2 className="text-2xl font-medium mb-6 ">
                     Connect with us
                  </h2>

                  <ul className="flex flex-col gap-4">
                     {/* <li className="font-light flex items-center gap-4">
                        <Phone className="w-5 h-5" strokeWidth={1} /> Phone Call
                     </li>
                     <li className="font-light flex items-center gap-4">
                        <Mail className="w-5 h-5" strokeWidth={1} /> Gmail
                     </li> */}
                     <li className="font-light flex items-center gap-4">
                        <Instagram className="w-5 h-5" strokeWidth={1} /> Instagram
                     </li>
                     <li className="font-light flex items-center gap-4">
                        <Facebook className="w-5 h-5" strokeWidth={1} /> Facebook
                     </li>
                     <li className="font-light flex items-center gap-4">
                        <Linkedin className="w-5 h-5" strokeWidth={1} /> LinkedIn
                     </li>

                  </ul>

               </div>


            </div>
            <div className="bottom pt-8 text-center">
               <p className="text-slate-400 text-md">
                  Copyright © 2025 Nitfolio. All Rights
                  Reserved.
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
