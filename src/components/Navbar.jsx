import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { Link } from "react-router";

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 left-0 w-full bg-white shadow-md p-4 z-50">
            <div className="flex justify-between items-center bg-white p-4 font-medium">
                <img src="/Pulsematelogo 1.svg" alt="Logo" className="w-3xs" />
                
                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex gap-6 text-lg pr-10">
                    <li><Link href="#home" className="hover:text-blue-500 transition">Home</Link></li>
                    <li><Link href="#services" className="hover:text-blue-500 transition">Services</Link></li>
                    <li><Link href="#aboutus" className="hover:text-blue-500 transition">Aboutus</Link></li>
                    <li><Link href="#reglog" className="hover:text-blue-500 transition">Register / Login</Link></li>
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
                <li><Link href="#home" className="block py-2 text-center hover:text-blue-500 transition">Home</Link></li>
                <li><Link href="#services" className="block py-2 text-center hover:text-blue-500 transition">Services</Link></li>
                <li><Link href="#aboutus" className="block py-2 text-center hover:text-blue-500 transition">Aboutus</Link></li>
                <li><Link href="#reglog" className="block py-2 text-center hover:text-blue-500 transition">Register / Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
