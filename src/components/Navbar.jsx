import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    // Prevent background scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    return (
        <nav className="sticky top-0 left-0 bg-white shadow-md p-4 z-50">
            <div className="flex justify-between items-center bg-white p-4 font-medium">
                <img src="/Pulsematelogo 1.svg" alt="Logo" className="w-3xs" />

                {/* Desktop Navigation Links */}
                <ul className="flex gap-8 hidden md:flex">
                <li><ScrollLink to="home" smooth={true} duration={500} offset={-80} className="hover:text-blue-500 transition cursor-pointer">Home</ScrollLink></li>
                <li><ScrollLink to="services" smooth={true} duration={500} offset={-80} className="hover:text-blue-500 transition cursor-pointer">Services</ScrollLink></li>
                <li><ScrollLink to="aboutus" smooth={true} duration={500} offset={-80} className="hover:text-blue-500 transition cursor-pointer">About Us</ScrollLink></li>
                <li><Link to="/Login" smooth={true} duration={500} offset={-80} className="cursor-pointer">
                    Login & Register
                </Link>
                </li>
                </ul>
                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} duration={0.5} easing="ease-in-out" />
                </div>
            </div>

            {/* Mobile Navigation Links - Overlaying Content */}
            <ul
                className={`absolute top-full left-0 w-full bg-white flex flex-col gap-4 p-4 shadow-md transition-all duration-500 ease-in-out
                ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            >
                <li><ScrollLink to="home" smooth={true} duration={500} className="block py-2 text-center hover:text-blue-500 transition cursor-pointer" onClick={() => setOpen(false)}>Home</ScrollLink></li>
                <li><ScrollLink to="services" smooth={true} duration={500} className="block py-2 text-center hover:text-blue-500 transition cursor-pointer" onClick={() => setOpen(false)}>Services</ScrollLink></li>
                <li><ScrollLink to="aboutus" smooth={true} duration={500} className="block py-2 text-center hover:text-blue-500 transition cursor-pointer" onClick={() => setOpen(false)}>About Us</ScrollLink></li>
                <li><NavLink to="/Login" smooth={true} duration={500} className="block py-2 text-center hover:text-blue-500 transition cursor-pointer" onClick={() => setOpen(false)}>Register / Login</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
