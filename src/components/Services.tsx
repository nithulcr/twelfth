"use client";

import { useEffect } from "react";
import AnimatedButton from "./AnimatedButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "About Me",
    subtitle: "Get to Know Me",
    description:
      "I'm Nithul K.P, a creative and results-driven Frontend Developer with over 5+ years of experience building 100+ responsive, user-friendly websites and web applications. I specialize in crafting seamless digital experiences using modern technologies like HTML, CSS, JavaScript, React, Next.js, Shopify, WordPress ets...",
  
    bgClassRight: "eight",
    reverse: true,
    marquee: [
      "Brand Strategy",
      "Logo Design & Visual Identity",
      "Website & Application ",
      "Digital Branding",
      "Market Research & Analysis",
      "Videography and Video Editing",
    ],
  },
];

const Services = () => {
  useEffect(() => {
    // Animate the counters on scroll once
    document.querySelectorAll<HTMLElement>(".counter").forEach((counter) => {
      const target = parseInt(counter.dataset.target || "0", 10);

      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top bottom-=100",
            once: true,
          },
          onUpdate: function () {
            counter.innerText = Math.floor(Number(counter.innerText)).toString();
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    // Animate the single growing image width on scroll
    document.querySelectorAll<HTMLElement>(".large-growing-images.small").forEach((wrapper) => {
      const growImageRight = wrapper.querySelector<HTMLElement>(".growing-image.right");
      if (!growImageRight) return;

      gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }).fromTo(
        growImageRight,
        { width: "80%" },
        { width: "100%", ease: "none" }
      );
    });
  }, []);

  return (
    <section id="services" className="section">
      <div className="shape3 z-[-1]"></div>
      <div className="shape2 z-[-1]"></div>
      <div className="grid-wrapper max-w-[1360px] mx-auto px-5">
        <div className="stacked-content">
          <div className="content-wrapper">
            <div className="service-list grid gap-y-10 lg:gap-y-30">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className={`service-item flex flex-col lg:grid gap-x-20 items-center w-full ${
                    service.reverse
                      ? "lg:grid-cols-[1fr_50%] flex-col-reverse"
                      : "lg:grid-cols-[50%_1fr] "
                  }`}
                >
                  {!service.reverse && (
                    <ServiceMedia
                      bgClassRight={service.bgClassRight}
                    />
                  )}

                  <div className="service-info max-w-[520px] pt-10 lg:pt-0 gap-y-10">
                    <div className="medium-width-intro overflow-hidden">
                      <div className="stacked-title mb-4">
                        <div className="subtitle text-[11px] tracking-[4px] uppercase text-white">
                          {service.title}
                        </div>
                        <h2 className="heading text-white text-3xl lg:text-[2.3rem] mt-4 leading-snug font-medium gradient-text font-monument">
                          {service.subtitle}
                        </h2>
                      </div>
                      <p className="text-white/80 text-[17px] leading-relaxed">{service.description}</p>
                      <div className="flex gap-4 py-8">
                        <div className="flex flex-col text-left">
                          <span className="text-3xl pb-2 gradient-text font-monument">
                            <span className="counter" data-target="5">
                              0
                            </span>
                            +
                          </span>
                          <span>Years of Experience</span>
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-3xl pb-2 gradient-text font-monument ">
                            <span className="counter" data-target="100">
                              0
                            </span>
                            +
                          </span>
                          <span>Website Completed</span>
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-3xl pb-2 gradient-text font-monument ">
                            <span className="counter" data-target="10">
                              0
                            </span>
                            +
                          </span>
                          <span>Technologies Mastered</span>
                        </div>
                      </div>
                      {/* Uncomment if needed
                      <div className="max-w-[calc(100vw-40px)]">
                        {service.marquee && (
                          <ul className="text-white/70 mt-4 list-disc text-[17px] list-inside">
                            {service.marquee.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      */}
                    </div>
                    <AnimatedButton href="images/resume.pdf" label="Download My CV" className="mt-4 lg:[mt-8] w-fit" />
                  </div>

                  {service.reverse && (
                    <ServiceMedia
                      bgClassRight={service.bgClassRight}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceMedia = ({
  bgClassRight,
}: {
  bgClassRight: string;
}) => (
  <div className="service-image w-full">
    <div className="large-growing-images small flex gap-4 w-full">
      <div className="growing-image right relative" style={{ width: "80%" }}>
        <div className={`growing-background ${bgClassRight} absolute inset-0`}>
          
        </div>
      </div>
    </div>
  </div>
);

export default Services;
