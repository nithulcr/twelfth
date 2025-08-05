"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        document.body.classList.toggle("open", menuOpen);
        return () => document.body.classList.remove("open");
    }, [menuOpen]);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-transparent flex justify-center h-20 p-5 z-999">
            <div className="w-full grid grid-cols-[minmax(5vw,1fr)_minmax(auto,1400px)_minmax(5vw,1fr)] z-1">
                <div className="max-w-[1360px] px-5 col-start-2 grid grid-cols-2 lg:grid-cols-3 gap-x-20 items-center w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">

                    {/* Logo */}
                    <Link href="/" className="pr-5">
                        <Image src="/images/logo2.png" alt="Logo" width={160} height={40} className="object-contain" />
                    </Link>


                    {/* Hamburger Menu */}
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50 w-nav-button p-2 cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div className="w-8 h-8 flex items-center justify-center">
                            {menuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-white menu-icon"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1} 
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            ) : (
                               
                                <div className="menu-icon">
                                     {/* <Image src="/images/hamburger.svg" alt="Open menu" width={30} height={30} className="menu-icon" /> */}
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                </div>
                            )}
                        </div>
                    </button>


                </div>
            </div>
            <div className="nav-cover"></div>

            {/* Mobile Nav */}
            <div className={`backdrop-blur-[20px] absolute top-[-100vh]  w-full transition-all duration-500 mobile-nav-menu ${menuOpen ? "top-[0px]" : ""}`}>
                <nav className=" min-h-screen flex flex-col justify-center">
                    <Link href="/" className="block text-white py-3 px-6 nav-link uppercase text-center text-[5vh]" onClick={handleLinkClick}>Home</Link>
                    <Link href="/projects" className="block text-white py-3 px-6 nav-link uppercase text-center text-[5vh]" onClick={handleLinkClick}>Projects</Link>
                    <Link href="services" className="block text-white py-3 px-6 nav-link uppercase text-center text-[5vh]" onClick={handleLinkClick}>Services</Link>
                    <Link href="/about" className="block text-white py-3 px-6 nav-link uppercase text-center text-[5vh]" onClick={handleLinkClick}>About</Link>
                    <Link href="/contact" className="block text-white py-3 px-6 nav-link uppercase text-center text-[5vh]" onClick={handleLinkClick}>Contact</Link>
                
                </nav>
            </div>
        </header>
    );
}
