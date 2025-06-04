import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const services = [
  {
    id: "01",
    title: "Architectural Design",
    image: "images/img/imgs_ivory/imgusedinweb/about_1.png",
    desc: "We craft forward-thinking, sustainable architectural solutions that seamlessly integrate form and function. Our designs are rooted in a deep understanding of context, environment, and client vision, resulting in innovative spaces that inspire and endure.",
  },
  {
    id: "02",
    title: "Interior Design",
    image: "images/img/imgs_ivory/imgusedinweb/bg.png",
    desc: "Our interior design services focus on creating visually stunning, comfortable, and highly functional environments. From residential to commercial spaces, we ensure every detail aligns with your lifestyle, brand identity, and aesthetic goals.",
  },
  {
    id: "03",
    title: "Project Management",
    image: "images/img/imgs_ivory/imgusedinweb/f.png",
    desc: "We provide comprehensive project management solutions to ensure timely delivery, cost-efficiency, and quality control. From concept to completion, our team coordinates all phases of the project to deliver flawless execution and peace of mind.",
  },
  {
    id: "04",
    title: "Urban Planning",
    image: "images/img/imgs_ivory/imgusedinweb/7.png",
    desc: "Our urban planning approach embraces growth, sustainability, and livability. We design community-focused, future-ready urban environments that prioritize infrastructure, mobility, green space, and social well-being for thriving cities.",
  },
  {
    id: "05",
    title: "Landscape Architecture",
    image: "images/img/imgs_ivory/imgusedinweb/service_bg.jpg",
    desc: "We merge the built environment with nature to create harmonious outdoor spaces that promote wellness, biodiversity, and aesthetic value. From gardens to large-scale parks, our designs enhance ecological integrity and user experience.",
  },
  {
    id: "06",
    title: "3D Visualization",
    image: "images/img/imgs_ivory/imgusedinweb/3d.jpg",
    desc: "Our 3D visualization services turn your architectural dreams into immersive visual experiences. Through high-quality renders and animated walkthroughs, we help clients understand spatial dynamics and make informed design decisions before construction begins.",
  },
  {
    id: "07",
    title: "Consultancy Services",
    image: "images/img/imgs_ivory/imgusedinweb/consultation.jpg",
    desc: "We offer strategic consultancy across architecture, design, and planning. Whether you're starting a new project or need expert advice mid-way, our consultants provide insight, clarity, and tailored solutions that drive project success.",
  },
];


export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-12 font-['Charis_SIL']">
      <ul className="divide-y divide-gray-200">
        {services.map((service, index) => (
          <li
            key={service.id}
            className="py-6 md:py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
          >
            <div className="flex items-start gap-4 md:gap-8 w-full md:w-auto">
              <span className="text-red-500 text-sm md:text-xl font-light min-w-[30px] md:min-w-[40px]">
                {service.id}
              </span>
              <div className="flex-1">
                <h2
                  className="text-xl md:text-2xl font-semibold text-black cursor-pointer flex items-center"
                  onClick={() => toggle(index)}
                >
                  {service.title}
                  <span 
                    className={`ml-3 transition-transform `}
                  >{openIndex === index ? <IoIosArrowUp/> : < IoIosArrowDown/>
                    }</span>
                </h2>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full md:w-50 h-50 object-cover rounded shadow-sm"
                    />
                    <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

    </section>
  );
}
