import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import TapToTop from "../components/TapToTop";

const Contact = () => {

  return (
    <div>
      <Navbar />
      <div className="h-16"></div>
      <div className="w-[85%] mx-auto">
        <div className="mt-10 text-right text-2xl font-['Charis_SIL']">
          Contact
        </div>
        <section className="relative w-full">
          {/* Top Content */}
          <div className="flex justify-between items-start">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-['Charis_SIL']">
              Contact Us Or<span className="text-gray-300"> /</span>
            </h1>
          </div>

          {/* Background Image with Text Overlay */}
          <div className="relative w-full">
            <img
              src="images/img/imgs_ivory/imgusedinweb/services_bg_img.png"
              alt="Building"
              className="w-full h-[300px] md:h-[600px] object-cover"
            />
            <h2 className="absolute font-['Charis_SIL'] top-0 left-[20%] flex items-center justify-center text-white text-3xl md:text-6xl font-semibold">
              Send Us Your Message
            </h2>
          </div>
        </section>
        <section>
          <div className="bg-white text-gray-700 font-['Charis_SIL'] px-6 py-20 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="lg:w-1/2 text-lg leading-relaxed tracking-wide">
              Have a question about our services or want to get started on your design project? We are here to help! Fill out the contact form below and one of our team members will get back to you within 24 hours. Alternatively, you can reach out to us via phone or email using the contact information provided below. We can’t wait to hear from you!
            </div>

            <form className="lg:w-1/2 flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <h1 className="text-5xl font-extrabold text-black leading-tight tracking-tight">
                  Submit Form
                </h1>

              </div>

              <input
                type="text"
                placeholder="Your Name"
                className="border-b border-gray-300 focus:outline-none focus:border-black text-gray-600 placeholder-gray-600 tracking-wide text-base pb-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b border-gray-300 focus:outline-none focus:border-black text-gray-600 placeholder-gray-600 tracking-wide text-base pb-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border-b border-gray-300 focus:outline-none focus:border-black text-gray-600 placeholder-gray-600 tracking-wide text-base pb-2"
              />
              <textarea
                rows="3"
                placeholder="Message"
                className="border-b border-gray-300 focus:outline-none focus:border-black text-gray-600 placeholder-gray-600 tracking-wide text-base pb-2 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-max bg-[#CD8F52] px-8 py-3  rounded-full font-extrabold text-black tracking-widest hover:bg-[#906136] transition"
              >
                Submit
              </button>
            </form>

          </div>
        </section>
        <section>
          <div className="bg-white font-['Charis_SIL'] min-h-screen px-6 md:px-12 py-12 flex flex-col md:flex-row items-center md:items-start justify-center gap-12 max-w-7xl mx-auto">


            {/* Contact Info */}
            <div className="w-full md:w-1/2 max-w-[600px] flex flex-col">
              <h1 className="text-5xl font-extrabold text-black flex items-center gap-3">
                Contact Info
              </h1>

              <form className="mt-12 flex flex-col gap-8 max-w-md">
                <div>
                  <label htmlFor="email" className="block text-gray-500 mb-1">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    value="info@ivory.com"
                    readOnly
                    className="w-full border-b border-gray-300 text-black text-lg font-semibold focus:outline-none bg-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-500 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value="+91-93112 73975"
                    readOnly
                    className="w-full border-b border-gray-300 text-black text-lg font-semibold focus:outline-none bg-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-gray-500 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value="B-273, Palam Extension, sector 7, Dwarka, New Delhi"
                    readOnly
                    className="w-full border-b border-gray-300 text-black text-lg font-semibold focus:outline-none bg-transparent"
                  />
                </div>
              </form>

              {/* Social Icons */}
              <div className="mt-10 flex gap-6">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-600 text-2xl">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-600 text-2xl">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-600 text-2xl">
                  <FaLinkedinIn />
                </a>
                <a href="#" aria-label="X" className="text-gray-400 hover:text-gray-600 text-2xl">
                  <FaXTwitter />
                </a>
              </div>
            </div>
            {/* Google Map Iframe for Delhi, India */}
            <div className="w-full md:w-1/2 h-80 max-w-[600px] max-md:pb-120">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4355306553957!2d77.0692832!3d28.586708299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1abf5c241d01%3A0x7e4326f3238a27c9!2sIvory%20Hospitality%20Solutions!5e0!3m2!1sen!2sin!4v1747202766729!5m2!1sen!2sin"
                width="600"
                height="450"
                className="w-full border-none"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <TapToTop />
      <Footer />
    </div>
  );
};

export default Contact;