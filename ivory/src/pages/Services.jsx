import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import {Link} from "react-router-dom";
import FAQ from "../components/Faq";
import HowWeWork from "../components/HowWeWork";
import TapToTop from "../components/TapToTop";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, Tech Solutions",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Archipix transformed our ideas into an architectural masterpiece. Their attention to detail and project management was flawless.",
  },
  {
    id: 2,
    name: "Michael Lee",
    position: "Founder, Urban Innovators",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
    quote: "Their team’s creativity and professionalism were outstanding. They delivered above our expectations on time and budget.",
  },
  {
    id: 3,
    name: "Priya Singh",
    position: "Director, Green Spaces",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "The sustainable design approach they employed is truly next level. Our community loves the new spaces they created.",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "John Carter",
    role: "Lead Architect",
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    bio: "John has 20+ years in innovative architectural design and sustainability, leading projects worldwide.",
  },
  {
    id: 2,
    name: "Emily Clarke",
    role: "Senior Interior Designer",
    photo: "https://randomuser.me/api/portraits/women/19.jpg",
    bio: "Emily specializes in functional and aesthetic interior spaces with a keen eye for detail.",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    role: "Urban Planner",
    photo: "https://randomuser.me/api/portraits/men/30.jpg",
    bio: "Ravi develops human-centric urban plans focusing on sustainable and scalable development.",
  },
];


const Services = () => {
  return (
    <div className="font-['Charis_SIL']">
      <Navbar />
      <div className="h-16"></div>

      {/* Hero Section */}
      <section className="w-[85%] mx-auto text-center md:text-left mb-20">
        <div className="mt-10 text-right text-2xl font-['Charis_SIL']">
          Our Services
        </div>
        <section className="relative w-full">
          {/* Top Content */}
          <div className="flex justify-between items-start">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-['Charis_SIL']">
              Our Services Or<span className="text-gray-300">/</span>
            </h1>
          </div>

          {/* Background Image with Text Overlay */}
          <div className="relative w-full">
            <img
              src="images/img/imgs_ivory/imgusedinweb/about_bg_img.png"
              alt="Building"
              className="w-full h-[300px] md:h-[600px] object-cover"
            />
            <h2 className="absolute font-['Charis_SIL'] top-0 left-[20%] flex items-center justify-center text-white text-3xl md:text-6xl font-semibold">
              What We Do
            </h2>
          </div>
        </section>

        <div>
          <div className="text-center md:text-right text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-10  font-['Charis_SIL']">
            Services We Provide
          </div>
          <ServicesSection />
        </div>

        {/* Why Choose Us */}
        <section className="w-[85%] mx-auto mt-10">
          <h2 className="text-5xl font-semibold mb-10">Why Choose Us?</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
              <p>
                We blend creativity with deep technical expertise to deliver visionary architectural solutions. Our projects emphasize sustainability, innovation, and community impact.
              </p>
              <ul className="mt-6 space-y-3 list-disc list-inside">
                <li>20+ years of industry experience</li>
                <li>300+ completed projects worldwide</li>
                <li>LEED certified sustainable designs</li>
                <li>Dedicated project management team</li>
              </ul>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-6">
              <img
                src="images/img/imgs_ivory/imgusedinweb/choose_us_bg_img.png"
                alt="Why choose us 1"
                className="rounded-lg object-cover h-56 w-full shadow-lg"
              />
              <img
                src="images/img/imgs_ivory/imgusedinweb/e.png"
                className="rounded-lg object-cover h-56 w-full shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Process */}
          <HowWeWork />

        {/* FAQ Section */}
        <div className="">
          <FAQ />

        </div>

        {/* Call To Action */}
        <section className="w-[85%] mx-auto mt-28 mb-20 text-center">
          <h2 className="text-5xl font-semibold mb-6">
            Ready to Elevate Your Project?
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
            Contact us now to schedule a consultation and discover how we can bring your vision to life.
          </p>
          <Link to="/contact" className="px-12 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
            Get In Touch
          </Link>
        </section>
      </section>

      <TapToTop />
      <Footer />
    </div >
  );
};

export default Services;
