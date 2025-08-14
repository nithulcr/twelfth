"use client";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-banner",
      { scale: 1 }, // start scale
      {
        scale: 1.15, // shrink size
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-banner",
          start: "top top", // when top of hero hits top of screen
          end: "bottom top", // when bottom of hero hits top of screen
          scrub: true, // smooth animation tied to scroll
        },
      }
    );
  }, []);

  return (
    <section className="relative flex flex-col lg:flex-row overflow-hidden main-hero">
      <div
        className="relative hero-banner min-h-[90vh] lg:min-h-[130vh] w-full pt-30 pb-[25vh] lg:pb-[40vh] lg:pt-40 flex items-end justify-between bg-cover bg-no-repeat bg-center hero-bg-img"
        style={{
          WebkitMaskImage:
            "linear-gradient(0deg, transparent, #00000047, #000 45vh)",
        }}
      >
        <div className="flex items-center flex-col lg:flex-row justify-between max-w-[1360px] mx-auto pt-20 px-5 w-full gap-10">
          <div>
            <h6 className="text-white uppercase text-center lg:text-left leading-tight tracking-[4px] mb-1">
              Portfolio
            </h6>
            <h1 className="text-white uppercase text-center lg:text-left text-4xl font-bold leading-tight tracking-[4px] font-monument mb-1">
              Nithul KP
            </h1>
            <p className="text-white md:text-2xl max-w-md text-center lg:text-left mx-auto lg:mx-0">
              Frontend Developer & UI Animator
            </p>
          </div>

          <a
            href="/projects"
            className="group text-white text-md max-w-md items-center gap-2 cursor-pointer hidden lg:flex"
          >
            All My Best Works
            <span className="border p-1 rounded-[50%] transition-transform duration-300 group-hover:rotate-180">
              <ArrowRight className="w-5 h-5 text-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
