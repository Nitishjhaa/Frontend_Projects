// Navbar.jsx
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom'
import { FaPhoneVolume } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/services" },
    { name: "Project", href: "/project" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="h-16 bg-white shadow-sm fixed top-0 left-0 right-0 z-50 font-['Charis_SIL']">
      <div className="mx-auto px-4 flex items-center max-md:justify-between h-full">
        <img src="/images/logo.png" alt="" className="h-15 ml-20 max-md:ml-10" />

        <ul className="hidden md:flex space-x-8 ml-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`${location.pathname === link.href ? 'text-red-400' : 'text-black'}  hover:text-[#E03D2E] transition duration-300`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className=" h-full absolute right-0 md:block hidden mr-10">
          <div className="flex gap-3">
            <a href="tel:+919311273975" className="group w-47">
              <div className="flex justify-center items-center h-12 gap-3 rounded-[999px mt-2">
                <span className="w-10 h-10 rounded-full bg-[#906136] group-hover:bg-[#CD8F52] text-white duration-400 flex justify-center items-center group-hover:animate-wiggle group-hover:text-black">
                  <FaPhoneVolume size={20} />
                </span>
                <span className="text-md duration-200 font-['Charis_SIL']">
                  <span className="text-sm">+</span>91 <span className="text-sm">-</span>93112 73975
                </span>
              </div>
            </a>
            <a href="mailto:info@ivory.com" className="group w-45">
              <div className="flex justify-center items-center h-12 gap-3 rounded-[999px mt-2">
                <span className="w-10 h-10 rounded-full bg-[#906136] group-hover:bg-[#CD8F52] text-white duration-400 flex justify-center items-center group-hover:text-black">
                  <CgMail size={24} />
                </span>
                <span className="text-md group-hover:text-[#906136] duration-200 font-['Charis_SIL']">
                  info@ivory.com
                </span>
              </div>
            </a>
          </div>
        </div>

        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>



      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-[#E03D2E] transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
      <div>
      </div>
    </nav>
  );
};

export default Navbar;
