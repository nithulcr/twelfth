import React from "react";
import Link from "next/link";
import {
  Instagram,
  Mail,
  MessageCircleMore,
  Phone,
  Linkedin,
  Facebook,
  MapPin,
} from 'lucide-react';

const socialLinks = [
  {
    href: 'https://www.instagram.com/ni_dul_cristiano_dos_santos/',
    label: 'Instagram',
    Icon: Instagram,
  },
  {
    href: 'https://api.whatsapp.com/send?phone=9946844274',
    label: 'WhatsApp',
    Icon: MessageCircleMore,
  },

  {
    href: 'https://www.facebook.com/p/nithul-mouvery-100068865098847/?_rdr',
    label: 'Facebook',
    Icon: Facebook,
  },
  {
    href: 'https://www.linkedin.com/in/nithul-kp-894a48234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    label: 'Linkedin',
    Icon: Linkedin,
  },
];

const Footer = () => (
  <footer className="pb-[10] md:pt-[100px] pt-[0px] relative ">
    {/* Decorative shapes */}
    <div className="shape1 z-[-1]" />
    <div className="shape2 z-[-1]" />

    <div className="max-w-[1360px] mx-auto footer md:p-5 p-4">

      {/* Scrolling Text */}
      <div className="scrolling-text bg-[#004a891a] backdrop-blur-[10px]">
        <div className="scrolling-text_inner direction-left">
          <div>
            <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">Design, Develop, Deliver.</div>
            <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">Pixel-Perfect. Code-Clean.</div>
            <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">Ideas to Interface.</div>
            <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">Design, Develop, Deliver.</div>
            <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">Pixel-Perfect. Code-Clean.</div>
            <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">Ideas to Interface.</div>
            <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">Design, Develop, Deliver.</div>
            <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">Pixel-Perfect. Code-Clean.</div>
            <div className="scrolling-text__item sm:text-[4vw] text-[5vw]">Ideas to Interface.</div>
          </div>
        </div>
      </div>

      {/* Footer Main Grid */}
      <div className="middle xl:flex grid sm:grid-cols-2 grid-cols-1 py-8 border-gray-600 gap-[50px] bg-[--background-secondary] rounded-[30px] 2xl:p-12 p-7 bg-[#004a891a] backdrop-blur-[10px]">
        {/* Logo + Address Section */}
        <div className="xl:w-1/4 ">
          <img src="images/logo2.png" alt="" className="w-[230px] content-center" />

        </div>

        {/* Quick Links Section */}
        <div className="xl:w-1/4 ">
          <h2 className="text-2xl font-medium mb-6">Find Me</h2>
          <ul className="flex flex-col gap-4">
            <li className="font-light flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-primary flex-none" strokeWidth={1} />
              <span className="leading-[26px] text-md">Kannur, Kerala, India</span>
            </li>
            <li className="font-light flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-primary" strokeWidth={1} />
              <div className="flex flex-col gap-1 text-md">
                <span>+91 99 4684 4274</span>
                <span>+91 85 4754 9400</span>
              </div>
            </li>
            <li className="font-light flex items-start gap-3 ">
              <Mail className="w-5 h-5 mt-1 text-primary" strokeWidth={1} />
              <span className="text-md">nithulcr@gmail.com</span>
            </li>
          </ul>
          {/* <h2 className="text-2xl font-medium mb-6">Skills</h2>
          <ul className="flex flex-col gap-3">
            <li className="font-light text-md">Website Designing</li>
            <li className="font-light text-md">Website Development</li>
            <li className="font-light text-md">Graphic Designing</li>
            <li className="font-light text-md">Portrait Drawing</li>
          </ul> */}
        </div>
        <div className="xl:w-1/4 ">
          <h2 className="text-2xl font-medium mb-6">Quick Links</h2>
          <ul className="flex flex-col gap-3">
            <li><Link href="/" className="font-light text-md">Home</Link></li>
            <li><Link href="/about" className="font-light text-md">About Me</Link></li>
            <li><Link href="/projects" className="font-light text-md">My Projects</Link></li>
            <li><Link href="/services" className="font-light text-md">My Skills</Link></li>
            <li><Link href="/contact" className="font-light text-md">Contact Me</Link></li>
          </ul>
        </div>

        {/* Skills Section */}


        {/* Connect with us Section */}
        <div className="xl:w-[22%] ">
          <h2 className="text-2xl font-medium mb-6">Connect with us</h2>
          <ul className="flex flex-col gap-4">
            {socialLinks.map(({ href, label, Icon }, index) => (
              <li key={label + index} className="font-light flex items-center gap-4">
                <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <Icon className="w-5 h-5" strokeWidth={1} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bottom pt-8 text-center">
        <p className="text-slate-400 text-md">
          Copyright © 2025 Nitfolio. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
