import { FaPhoneVolume, FaXTwitter, FaLinkedin, FaLocationDot, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#F3F0EB] py-10'>
            <div className='w-[90%] max-w-[1200px] mx-auto'>
                <div className='flex flex-wrap gap-10 justify-between'>
                    {/* Logo and Description */}
                    <div className='w-full md:w-[45%] lg:w-[30%] py-10 max-md:py-5'>
                        <img src="/images/logo.png" alt="Logo" className="h-16 mb-6 scale-110" />
                        <p className='text-justify text-sm leading-relaxed pt-10'>
                            We are a team of creative professionals delivering high-quality design and production solutions. With experience and a focus on excellence, we bring your vision to life through innovative, functional results.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className='w-full md:w-[45%] lg:w-[20%]'>
                        <h1 className="text-2xl font-['Charis_SIL'] mb-4 py-9 max-md:py-2">
                            <span className='text-[#D83B2A]'>Q</span>uick Links
                        </h1>
                        <ul className='space-y-2 text-md group'>
                            <li className='hover:text-[#D83B2A] hover:translate-x-3 transition-all duration-200 cursor-pointer'>
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            <li className='hover:text-[#D83B2A] hover:translate-x-3 transition-all duration-200 cursor-pointer'>
                                <Link to='/about'>
                                    About Us
                                </Link>
                            </li>
                            <li className='hover:text-[#D83B2A] hover:translate-x-3 transition-all duration-200 cursor-pointer'>
                                <Link to='/services'>
                                    Services
                                </Link>
                            </li>
                            <li className='hover:text-[#D83B2A] hover:translate-x-3 transition-all duration-200 cursor-pointer'>
                                <Link to='/project'>
                                    Projects
                                </Link>
                            </li>
                            <li className='hover:text-[#D83B2A] hover:translate-x-3 transition-all duration-200 cursor-pointer'>
                                <Link to='/contact'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info and Socials */}
                    <div className='w-full lg:w-[40%] '>
                        <h1 className="text-2xl font-['Charis_SIL'] mb-4 py-9">
                            <span className='text-[#D83B2A]'>C</span>ontact Us
                        </h1>
                        <div className='text-sm space-y-4'>
                            <div className='flex items-start gap-3'>
                                <FaPhoneVolume size={20} className='text-red-500' />
                                <span>Phone No. +91-93112 73975</span>
                            </div>
                            <div className='flex items-start gap-3'>
                                <MdEmail size={20} className='text-red-500' />
                                <span>Email - info@ivory.com</span>
                            </div>
                            <div className='flex items-start gap-3'>
                                <FaLocationDot size={20} className='text-red-500' />
                                <span>B-273, Palam Extension, sector 7, Dwarka, New Delhi</span>
                            </div>
                        </div>

                        <div className='mt-8'>
                            <h1 className="text-2xl font-['Charis_SIL'] mb-3">
                                <span className='text-[#D83B2A]'>C</span>onnect with us
                            </h1>
                            <div className='flex gap-4'>
                                <FaFacebook size={25} className='cursor-pointer hover:text-[#D83B2A]' />
                                <FaLinkedin size={25} className='cursor-pointer hover:text-[#D83B2A]' />
                                <FaXTwitter size={25} className='cursor-pointer hover:text-[#D83B2A]' />
                                <FaInstagram size={25} className='cursor-pointer hover:text-[#D83B2A]' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className='text-center text-sm mt-10 border-t pt-4'>
                    © 2025 All Rights Reserved <strong>Ivory</strong> |
                    Designed and Developed by <a href="https://codesparrow.org/" target="_blank" className="text-[#197A83]"><strong>Code Sparrow</strong></a>
                </div>

            </div>
        </div>
    )
}

export default Footer;
