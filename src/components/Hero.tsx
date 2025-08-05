"use client";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleOpen = () => {
    if (typeof window !== 'undefined' && typeof (window as Window & { openOffcanvas?: () => void }).openOffcanvas === 'function') {
      document.body.classList.add('offcanvas-show');
      (window as Window & { openOffcanvas?: () => void }).openOffcanvas?.();
    }

  };

  return (
    <section className="relative flex flex-col lg:flex-row   overflow-hidden main-hero">
      {/* Background Wrapper */}

      {/* Content Wrapper */}
      <div className="relative  min-h-[130vh] w-full  pt-30  pb-[35vh] lg:pb-[40vh]  lg:pt-40 flex items-end justify-between w-full bg-cover bg-no-repeat bg-center " style={{
        backgroundImage: "url('/images/banner3.png')",
        WebkitMaskImage: "linear-gradient(0deg, transparent, #00000047, #000 45vh)",
      }}
      >
        <div className="flex items-center flex-col lg:flex-row justify-between  max-w-[1360px] mx-auto pt-20 px-5 w-full gap-10">
          <div className="">
            <h6 className="text-white uppercase text-center lg:text-left leading-tight tracking-[4px] mb-1">
             Protfolio
            </h6>
            <h1 className="text-white uppercase text-center lg:text-left text-4xl font-bold leading-tight tracking-[4px] font-monument mb-1">
              Nithul KP
            </h1>
            <p className="text-white text-2xl max-w-md text-center lg:text-left mx-auto lg:mx-0">
              Frontend Developer & UI Animator
            </p>
          </div>

          <a className="text-white text-md max-w-md  items-center gap-2 cursor-pointer hidden lg:flex">
            All My Best Works <span className="border p-1 rounded-[50%]"><ArrowRight className="w-5 h-5 text-white" /></span>
          </a>


        </div>
      </div>


    </section>
  );
}
