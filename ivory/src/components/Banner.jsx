// Banner.jsx

import {Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage: "url('/images/img/imgs_ivory/imgusedinweb/bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#574B3E] opacity-50 z-0"></div>

      {/* Content */}
      <div className="max-w-7xl px-6 md:px-12 relative z-10 mt-50 font-[Simula_(woff2)serif]">
        <div className="text-left text-white max-w-xl ml-20 max-md:ml-10 mt-8">
          <h1 className="font-medium text-base md:text-lg mb-4">
            THE #1 INTERIOR DESIGN SERVICE
          </h1>
          <h1 className="text-[36px] font-['Charis_SIL'] md:text-[58px] leading-none mb-6">
            Designing your <br />
            dream home just <br />
            became a reality.
          </h1>
          <Link to="/contact" className="px-12 py-3 text-white font-semibold rounded-full bg-[#CD8F52] hover:bg-[#906136] transition duration-300 uppercase ">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
