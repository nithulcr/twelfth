"use client";

import { useEffect } from "react";
import AnimatedButton from "./AnimatedButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Services = () => {

  useEffect(() => {
    gsap.to(".filling-text .fill", {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".filling-text",
        start: "top 80%",
        end: "bottom 0%",
        scrub: true,
      },
    });

 gsap.utils.toArray(".rotate-traslate-to-right").forEach((elem) => {
  const target = elem as HTMLElement;
  gsap.fromTo(
    target,
    { rotation: -15, transformOrigin: "center center", x: -150, opacity: 0 },
    {
      rotation: 0,
      x: 0,
      opacity: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 95%",
        end: "top 70%",
        scrub: 0.5,
      },
    }
  );
});

gsap.utils.toArray(".rotate-traslate-to-left").forEach((elem) => {
  const target = elem as HTMLElement;
  gsap.fromTo(
    target,
    { rotation: 15, transformOrigin: "center center", x: 150, opacity: 0 },
    {
      rotation: 0,
      x: 0,
      opacity: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 95%",
        end: "top 70%",
        scrub: 0.5,
      },
    }
  );
});


//     gsap.utils.toArray(".slide-right").forEach((elem, index) => {
//   const target = elem as HTMLElement;


//   const startX = index === 1 ? 200 : 150;

//   gsap.fromTo(
//     target,
//     { x: startX, opacity: 0 },
//     {
//       x: 0,
//       opacity: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: target,
//         start: "top 85%",
//         end: "top 45%",
//         scrub: true,
//       },
//     }
//   );
// });

gsap.utils.toArray(".fade-up").forEach((elem) => {
  const target = elem as HTMLElement;

  gsap.fromTo(
    target,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        end: "top 45%",
        scrub: true,
      },
    }
  );
});




  },
    []);






  return (
    <section id="services" className="section overflow-hidden">
      {/* <div className="shape3 z-[-1]"></div>
      <div className="shape2 z-[-1]"></div> */}
      <div className="grid-wrapper max-w-[1360px] mx-auto px-5">
        <div className="stacked-content">
          <div className="content-wrapper">
            <div className="service-list grid gap-y-10 lg:gap-y-30">

              <div

                className="service-item flex flex-col lg:grid gap-x-20 items-center w-full "
              >


                <div className="service-info pt-10 lg:pt-0 gap-y-10">
                  <div className="lg:w-[50%]">
                    <div className="flex flex-col mb-8">
                      <h2 className="uppercase slide-right  text-white heading filling-text text-5xl lg:text-[7rem]  leading-none font-medium font-monument relative">
                        <span className="fill" aria-hidden="true">
                          Who
                        </span>
                        <span>
                          Who
                        </span>
                      </h2>
                      <h2 className="uppercase slide-right delay-200 text-white heading filling-text text-5xl lg:text-[7rem]  leading-none font-medium font-monument relative">
                        <span className="fill" aria-hidden="true">
                          We Are
                        </span>
                        <span>
                          We Are
                        </span>
                      </h2>

                    </div>
                    <p className="text-white text-[20px] lg:text-[34px] leading-snug fade-up">As an award-winning agency within the digital jungle, Twelfth Origin transcends aesthetics, crafting your vision into a legacy that endures.</p>

                  </div>
                  <div className="lg:w-[50%] ml-auto mt-10 lg:mt-20 max-w-[500px] fade-up">

                    <p className="text-[#7ac4b4] text-[18px] lg:text-[20px] leading-snug ">We roar with creativity, staying updated with the latest tech to make your brand a formidable force in the digital wilderness and deliver exceptional website and app experiences.</p>
                    <AnimatedButton href="about" label="About Us" className="mt-10 w-fit min-w-[160px]" />

                  </div>

                </div>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 lg:mt-35 w-full">

                  <div className="flex flex-col gap-10">
                    <div

                      className="rotate-traslate-to-right bg-[#26957d] md:bg-[var(--background2)] hover:bg-[#26957d] hover:top-[-10px] transition-all relative top-0 duration-300 ease-in-out rounded-2xl p-8 flex flex-col justify-between  "
                    >
                      <h3 className="text-7xl font-monument">50+</h3>
                      <p className="text-2xl font-medium uppercase leading-snug text-right tracking-wide max-w-[200px] ml-auto mt-20">
                        awards & <br></br>recognition
                      </p>
                    </div>
                    <div

                      className="rotate-traslate-to-right bg-[#e5484d] md:bg-[var(--background2)] hover:bg-[#e5484d] hover:top-[-10px] transition-all relative top-0 duration-300 ease-in-out rounded-2xl p-8 flex flex-col justify-between  "
                    >
                      <h3 className="text-7xl font-monument">20+</h3>
                      <p className="text-2xl font-medium uppercase leading-snug text-right tracking-wide max-w-[200px] ml-auto mt-20">
                        creative <br></br>minds
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 md:mt-20">
                    <div

                      className="rotate-traslate-to-left bg-[#6f8f10] md:bg-[var(--background2)] hover:bg-[#6f8f10] hover:top-[-10px] transition-all relative top-0 duration-300 ease-in-out rounded-2xl p-8 flex flex-col justify-between  "
                    >
                      <h3 className="text-7xl font-monument">900+</h3>
                      <p className="text-2xl font-medium uppercase leading-snug text-right tracking-wide max-w-[200px] ml-auto mt-20">
                        projects<br></br>completed
                      </p>
                    </div>
                    <div

                      className="rotate-traslate-to-left bg-[#348bf1] md:bg-[var(--background2)] hover:bg-[#348bf1] hover:top-[-10px] transition-all relative top-0 duration-300 ease-in-out rounded-2xl p-8 flex flex-col justify-between  "
                    >
                      <h3 className="text-7xl font-monument">10+</h3>
                      <p className="text-2xl font-medium uppercase leading-snug text-right tracking-wide max-w-[200px] ml-auto mt-20">
                        years of<br></br>experience
                      </p>
                    </div>
                  </div>


                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Services;
