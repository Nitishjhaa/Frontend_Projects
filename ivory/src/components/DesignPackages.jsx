import React from 'react';
import { Link } from 'react-router-dom';


const packages = [
  {
    title: 'Online ',
    title2: 'Design',
    description: 'Partner online with one of our talented designers to bring your dream home to life - any time and any place and have a peace of mind.',
    fullPrice: '₹199',
    salePrice: '₹99',
    buttonText: 'Get started online',
    discount: '50% off',
  },
  {
    title: 'In-Person',
    title2: 'Design',
    description: 'A full-service experience in your home. Your designer will assess your space and create a comprehensive design for your home.',
    fullPrice: '₹699',
    salePrice: '₹349',
    buttonText: 'Get started in-person',
    discount: '50% off',
    additionalInfo: 'plus ₹99 for each additional room',
  }
];

const DesignPackages = () => {
  return (
    <section className="relative bg-cover h-fit bg-center py-12 px-6 text-white" style={{ backgroundImage: 'url(images/design_packages_new.webp)' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-widest mb-2 text-center text-black font-semibold font-['Charis_SIL']">Our Design Packages</p>
        <h2 className="text-2xl md:text-4xl mb-6 mt-9 text-right text-black font-['Charis_SIL']">Our interior design services are tailored <br /> to your space, style, and budget.</h2>

        <div className="flex gap-5 max-md:flex-wrap max-md:justify-center py-15">
          {packages.map((pkg, idx) => (
            <div key={idx} className="relative bg-white text-black shadow-xl p-6 w-80 h-120 overflow-hidden">
              <div className="absolute -top-4 right-0 bg-[#9F4E30] text-white h-20 w-20 flex justify-center items-center text-xl rounded-bl-[40px] z-10">
                {pkg.discount}
              </div>
              <h3 className="text-4xl font-['Charis_SIL'] mb-2">{pkg.title}</h3>
              <h3 className="text-4xl font-['Charis_SIL'] mb-2">{pkg.title2}</h3>
              <p className="mb-4 mt-10">{pkg.description}</p>
              <div className="mb-4 mt-10">
                <p className="text-sm">{pkg.title === 'In-Person Design' ? 'First room at' : 'Starting at'}</p>
                <div className="text-2xl line-through text-gray-400 float-left mr-2 font-['Charis_SIL']">{pkg.fullPrice}</div>
                <div className="text-2xl font-bold text-red-600 font-['Charis_SIL']">{pkg.salePrice}</div>
              </div>
              <Link to='/contact' className="px-6 w-60 py-3 text-white font-semibold rounded-full bg-[#CD8F52] hover:bg-[#906136] transition duration-300 uppercase ">{pkg.buttonText}</Link>

              {pkg.locations && (
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm text-blue-600">Available locations</summary>
                  <div className="text-sm mt-2">
                    {pkg.locations.join(', ')}
                  </div>
                </details>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPackages;
