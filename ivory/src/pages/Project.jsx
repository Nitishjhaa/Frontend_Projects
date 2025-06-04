import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TapToTop from "../components/TapToTop";

const tabs = [
  "Hotels Design",
  "Interior Design",
  "Project Management",
  "Sofas",
  "Furniture",
  "Videos",
];

const imagesByTab = {
  "Hotels Design": [
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/hotels/Hotel_services_1.png" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/hotels/Hotel_services_2.png" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/hotels/Hotel_services_3.png" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/hotels/Hotel_services_4.png" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/hotels/Hotel_services_5.png" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/hotels/Hotel_services_6.png" },
  ],
  "Interior Design": [
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/interior/int_1.jpg" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/interior/int_2.jpg" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/interior/int_3.jpg" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/interior/int_4.jpg" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/interior/int_5.jpg" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/interior/int_6.jpg" },
  ],
  "Project Management": [
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/Project/project_1.png" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/Project/project_2.jpeg" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/Project/project_3.jpeg" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/Project/project_4.jpeg" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/Project/project_5.jpeg" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/Project/project_5.png" },
  ],
  "Sofas": [
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/sofas/sofas_1.jpg" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/sofas/sofas_2.jpeg" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/sofas/sofas_3.jpeg" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/sofas/sofas_4.jpeg" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/sofas/sofas_5.jpeg" },
  ],
  "Furniture": [
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/furniture/chairs_services_2.png" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/furniture/chairs_services_6.png" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/furniture/chairs_services_3.png" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/furniture/chairs_services_4.png" },
    { type: "image", src: "images/img/imgs_ivory/imgusedinweb/furniture/chairs_services_5.png" },
  ],
  "Videos": [
    { type: "video", src: "images/img/imgs_ivory/imgusedinweb/video/video_1.mp4" },
    { type: "video", src: "images/img/imgs_ivory/imgusedinweb/video/video_2.mp4" },
    { type: "video", src: "images/img/imgs_ivory/imgusedinweb/video/video_3.mp4" },
    { type: "video", src: "images/img/imgs_ivory/imgusedinweb/video/video_4.mp4" },
    { type: "video", src: "images/img/imgs_ivory/imgusedinweb/video/video_5.mp4" },
    { type: "video", src: "images/img/imgs_ivory/imgusedinweb/video/video_6.mp4" },

  ],
};

export default function ArchitectureDesign() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <Navbar />
      <div className="h-16"></div>
      <div className="w-[85%] mx-auto">
        <div className="mt-10 text-right text-2xl font-['Charis_SIL']">
          Project
        </div>

        <section className="relative w-full">
          {/* Header */}
          <div className="flex justify-between items-start">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-['Charis_SIL']">
              Our Work And <span className="text-gray-300">/</span>
            </h1>
          </div>

          {/* Banner */}
          <div className="relative w-full">
            <img
              src="images/img/imgs_ivory/imgusedinweb/service_bg.jpg"
              alt="Building"
              className="w-full h-[300px] md:h-[600px] object-fit"
            />
            <h2 className="absolute font-['Charis_SIL'] top-0 left-[20%] flex items-center justify-center text-white text-3xl md:text-6xl font-semibold">
              Portfolio
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white min-h-screen">
            <nav className="max-w-7xl mx-auto px-4 pt-20 pb-10 sm:px-6 md:px-12 lg:px-16 xl:px-20">
              <ul className="flex flex-wrap sm:flex-nowrap justify-start gap-x-6 gap-y-2 border-b border-gray-300 text-gray-900 text-base font-normal overflow-x-auto scrollbar-hide font-['Charis_SIL']">
                {tabs.map((tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`relative inline-block py-3 whitespace-nowrap ${activeTab === tab ? "active-underline" : ""
                        }`}
                      style={
                        activeTab === tab
                          ? { boxShadow: "inset 0 -4px 0 0 #4b5563" }
                          : {}
                      }
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Tab Label */}
            <div className="hidden 2xl:block">
              {tabs.map((tab) => (
                <span key={tab}>
                  <div className="absolute top-[46%] pt-5 text-2xl font-['Charis_SIL'] ml-22">
                    {activeTab === tab ? tab : ""}
                  </div>
                </span>
              ))}
            </div>

            {/* Media Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-30">
              {imagesByTab[activeTab].map((media, i) =>
                media.type === "image" ? (
                  <img
                    key={i}
                    src={media.src}
                    alt={`${activeTab} image ${i + 1}`}
                    className="!w-120 object-cover rounded-md"
                  />
                ) : (
                  <video
                    key={i}
                    src={media.src}
                    controls
                    muted
                    loop
                    className="!w-120 h-90 object-cover rounded-md"
                  />
                )
              )}
            </main>
          </div>
        </section>

        <TapToTop />
      </div>
      <Footer />
    </div>
  );
}
