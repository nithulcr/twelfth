"use client";
import { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import AnimatedButton from "./AnimatedButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    // Animate hero banner scale - always
    gsap.fromTo(
      ".hero-banner",
      { scale: 1 },
      {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-banner",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

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

    if (window.innerWidth > 990) {
      // Animate marginTop from -75px to 100px for large screens
      gsap.fromTo(
        ".video-shrink",
        { marginTop: -75 },
        {
          marginTop: 100,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-banner",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Animate video size from 150px to full size for large screens
      gsap.fromTo(
        ".video-shrink video",
        { width: "150px" },
        {
          width: "100%",
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-banner",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    } else {
      // For smaller screens, set marginTop and video size immediately to desired default
      gsap.set(".video-shrink", { marginTop: 60 });
      gsap.set(".video-shrink video", { width: "100%", height: "100%" });
    }
  }, []);

  return (
    <section className="relative flex flex-col overflow-hidden main-hero px-5 lg:px-[4rem] py-20 min-h-[90vh]">
      <div className="relative hero-banner w-full flex flex-col items-start justify-between bg-cover bg-no-repeat bg-center hero-bg-img">
        <div className="fade-up-css flex items-center flex-col max-w-[1360px] mx-auto pt-20 px-5 w-full gap-5">
          <h1 className="text-white uppercase text-center text-[10vw] lg:text-[7vw] font-bold leading-none font-monument mb-1 gradient-text">
           Twelfth Origin <br></br>Creative Studio
          </h1>
          <p className="text-white text-md max-w-lg text-center mx-auto lg:mx-0 uppercase">
          A creative agency that helps marketing and design teams deliver high-volume, on-brand creatives and builds impactful media campaigns that shape brand identity and connect with audiences.
          </p>
          <span className="rounded-full w-7 h-7 border border-gray-700 flex items-center justify-center">
            <ArrowDown className="w-4 h-4 text-gray-700" />
          </span>
        </div>
        <div className=" md:hidden">
          <AnimatedButton
            href="images/resume.pdf"
            label="Get in Touch"
            className="w-fit mx-auto mt-10"
          />
        </div>
        <div className="md:flex items-center hidden justify-between max-w-[1360px] mx-auto pt-10 lg:pt-15 w-full gap-5 fade-up-css">
          <AnimatedButton
            href="images/resume.pdf"
            label="Explore Our Work"
            className="w-fit"
          />
          <AnimatedButton
            href="images/resume.pdf"
            label="Get in Touch"
            className="w-fit"
          />
        </div>
      </div>
      <div className="video-shrink mt-[-75px] flex justify-center" style={{ width: "100%", height: "100%" }}>
        <video
          // Removed explicit width to allow GSAP or CSS control
          autoPlay
          loop
          muted
          playsInline
          className="rounded-[20px] lg:rounded-[40px]"
        >
          <source src="/images/terrah_ss.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
