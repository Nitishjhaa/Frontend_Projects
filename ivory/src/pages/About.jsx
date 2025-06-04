import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import OurPartners from '../components/OurPartners'
import HowWeWork from "../components/HowWeWork";
import TapToTop from "../components/TapToTop";


const About = () => {
  return (
    <div>
      <Navbar />
      <div className="h-16"></div>
      <div className="w-[85%] mx-auto">
        <div className="mt-10 text-right text-2xl font-['Charis_SIL']">
          About Us
        </div>
        <section className="relative w-full">
          {/* Top Content */}
          <div className="flex justify-between items-start">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-['Charis_SIL']">
              Learn About Our <span className="text-gray-300">/</span>
            </h1>
          </div>

          {/* Background Image with Text Overlay */}
          <div className="relative w-full">
            <img
              src="images/img/imgs_ivory/imgusedinweb/about.jpg"
              alt="Building"
              className="w-full h-[300px] md:h-[600px] object-cover"
            />
            <h2 className="absolute font-['Charis_SIL'] top-0 left-[20%] flex items-center justify-center text-white text-3xl md:text-6xl font-semibold">
              Vision and Values
            </h2>
          </div>
          <div className="font-['Charis_SIL']">
            <p className="mt-10 text-xl pb-5">
              Founded in 2010, our studio began with a simple mission: to breathe life into uninspired spaces. What started as a small team with a big vision has grown into an award-winning design practice based in Delhi. With a passion for storytelling through design,we specialize in creating visually captivating environments that reflect personality, purpose, and place.
              <br />
              <br />
             Renowned for transforming dull and ordinary spaces into stunning, Instagram-worthy masterpieces, we infuse each project with creativity, character, and charm. Our work bridges aesthetics and functionality, delivering immersive experiences that leave a lasting impression on guests and elevate every brand we partner with.
            </p>
          </div>
          <div className="flex flex-col md:flex-row py-10 font-['Charis_SIL'] gap-6 md:gap-0">
            {/* Left Image */}
            <div className="w-full md:w-1/3 h-64 md:h-96">
              <img
                src="images/img/imgs_ivory/imgusedinweb/x.png"
                alt="Founding"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Center Content */}
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center px-4 md:px-6">
              <h1 className="text-2xl md:text-3xl font-semibold">Our Value</h1>
              <h2 className="text-xl md:text-2xl mt-4">2025</h2>
              <p className="mt-4 text-base md:text-lg">
                To craft immersive, dynamic spaces that elevate the guest experience and bring each hotel and restaurant’s unique story to life. We envision environments that inspire, engage, and leave a lasting impression—where form meets function in perfect harmony.
              </p>
            </div>


            {/* Right Image */}
            <div className="w-full md:w-1/3 h-64 md:h-96">
              <img
                src="images/img/imgs_ivory/imgusedinweb/z.png"
                alt="Growth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <hr className="bg-gray-100 p-[0.1px]" />
          <div className="flex flex-col md:flex-row py-10 font-['Charis_SIL'] gap-6 md:gap-0">
            {/* Left Image */}
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center px-4 md:px-6">
              <h1 className="text-2xl md:text-3xl font-semibold">Our Mission</h1>
              <h2 className="text-xl md:text-2xl mt-4">2025</h2>
              <p className="mt-4 text-base md:text-lg">
                To be the premier one-stop solution for the hospitality sector, designing inspired and functional spaces that reflect each brand’s identity. Through a seamless blend of creativity and purpose, we aim to enhance the guest journey while improving operational efficiency.
              </p>
            </div>


            {/* Center Content */}
            <div className="w-full md:w-1/3 h-64 md:h-96">
              <img
                src="images/img/imgs_ivory/imgusedinweb/about_bg_img.png"
                alt="Growth"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center px-4 md:px-6 font-['Charis_SIL']">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
                Our Vision
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-2">
                2025
              </h2>
              <p className="mt-4 text-base sm:text-lg md:text-lg text-gray-700">
                We value purposeful design, client collaboration, and enhancing the guest experience. Committed to integrity, quality, and innovation, we create inspiring and functional spaces that reflect each brand’s unique identity.
              </p>
            </div>


          </div>
        </section>
      </div>
      <div className="bg-[#F3EFE8] mt-10 py-5">
        <div className="w-[85%] mx-auto">
          <div className="text-center md:text-right text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-10  font-['Charis_SIL']">
            What We Do
          </div>
          <div className="bg-[#F3EFE8]">
            <ServicesSection />
          </div>
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="w-[85%] mx-auto">
          <div className="-mt-15 pb-15">
            <HowWeWork />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <OurPartners />
      </div>
      <TapToTop />
      <Footer />
    </div>
  );
};

export default About;