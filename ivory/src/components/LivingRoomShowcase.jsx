import React, { useState } from "react";

const data = {
  "Living Room": {
    tabs: [
      {
        id: "laura",
        label: "Kitchen",
        before: "images/img/imgs_ivory/imgusedinweb/b.png",
        after: "images/img/imgs_ivory/imgusedinweb/lmc.png",
        description: "Living room with large arched window, beige curtains, and green plants",
      },
      {
        id: "heather",
        label: "Living Room",
        before: "images/img/imgs_ivory/imgusedinweb/hotels/Hotel_services_1.png",
        after: "images/img/imgs_ivory/imgusedinweb/hotels/Hotel_services_3.png",
        description: "Heather’s cozy living room makeover",
      },
    ],
  },
  "Dining Room": {
    tabs: [
      {
        id: "dining1",
        label: "Modern Dining Room",
        before: "images/img/imgs_ivory/imgusedinweb/5.png",
        after: "images/img/imgs_ivory/imgusedinweb/hotels/Hotel_services_6.png",
        description: "Sleek dining area transformation",
      },
    ],
  },
  Bedroom: {
    tabs: [
      {
        id: "bedroom1",
        label: "Cozy Bedroom",
        before: "images/img/imgs_ivory/imgusedinweb/bed.jpeg",
        after: "images/img/imgs_ivory/imgusedinweb/az.jpeg",
        description: "Warm and inviting bedroom makeover",
      },
    ],
  },
  "Explore More": {
    tabs: [
      {
        id: "more1",
        label: "Creative Space",
        before: "images/img/imgs_ivory/imgusedinweb/a.jpg",
        after: "images/img/imgs_ivory/imgusedinweb/about.jpg",
        description: "Innovative multi-purpose room design",
      },
    ],
  },
};

// Helper component for Before/After slider
const BeforeAfterSlider = ({ before, after, alt }) => {
  const [sliderPos, setSliderPos] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleMove = (clientX, element) => {
    if (!isDragging) return; // Only move slider if dragging
    let rect = element.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  };

  return (
    <div
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={(e) => handleMove(e.clientX, e.currentTarget)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchCancel={() => setIsDragging(false)}
      onTouchMove={(e) => {
        if (e.touches.length > 0) {
          handleMove(e.touches[0].clientX, e.currentTarget);
        }
      }}
      className="relative w-full max-h-[700px] cursor-ew-resize select-none"
      style={{ aspectRatio: "16/9" }}
    >
      {/* Before image */}
      <img
        src={before}
        alt={`Before - ${alt}`}
        className="absolute top-0 left-0 w-full h-full object-cover"
        draggable={false}
      />
      {/* After image clipped */}
      <img
        src={after}
        alt={`After - ${alt}`}
        className="absolute top-0 left-0 h-full object-cover"
        draggable={false}
        style={{ width: `${sliderPos}%`, clipPath: `inset(0 0 0 0)` }}
      />
      {/* Slider handle */}
      <div
        style={{ left: `${sliderPos}%` }}
        className="absolute top-0 bottom-0 w-1 bg-[#a87f5f]/80 pointer-events-none"
      ></div>
    </div>
  );
};

export default function LivingRoomShowcase() {
  const categories = Object.keys(data);
  const [selectedCategory, setSelectedCategory] = useState("Living Room");
  const [selectedTabId, setSelectedTabId] = useState(data["Living Room"].tabs[0].id);

  const tabs = data[selectedCategory].tabs;
  const selectedTab = tabs.find((t) => t.id === selectedTabId);

  return (
    <div className="bg-[#f3efe8] text-[#3a2f2a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <h1 className="text-center text-4xl sm:text-5xl font-normal leading-tight mb-2 font-serif">
          What’s the best that could happen?
        </h1>
        <p className="text-center text-sm sm:text-base font-normal mb-10">
          Explore real client before & afters.
        </p>

        {/* Category buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-14 font-serif">
          {categories.map((cat) => {
            const isSelected = cat === selectedCategory;
            const baseTextColor = isSelected ? "#a87f5f" : "#3a2f2a";
            const baseBg = isSelected ? "#f3e5d7" : "white";

            // Icons mapping (Font Awesome classes)
            const icons = {
              "Living Room": "fa-couch",
              "Dining Room": "fa-utensils",
              Bedroom: "fa-bed",
              "Explore More": "fa-plus",
            };

            return (
              <button
                key={cat}
                aria-pressed={isSelected}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedTabId(data[cat].tabs[0].id);
                }}
                className={`flex items-center gap-2 rounded-full px-6 py-2 text-sm sm:text-base font-normal transition-colors duration-200`}
                style={{ backgroundColor: baseBg, color: baseTextColor }}
              >
                <i className={`fas ${icons[cat]}`} style={{ color: baseTextColor }}></i>
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tabs for selected category */}
        <nav
          aria-label={`${selectedCategory} tabs`}
          className="flex justify-start gap-10 border-b border-[#a89f97] pb-2 mb-6 overflow-x-auto no-scrollbar text-xs sm:text-sm"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === selectedTabId;
            return (
              <a
                key={tab.id}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedTabId(tab.id);
                }}
                aria-current={isActive ? "page" : undefined}
                className={`whitespace-nowrap pb-1 ${
                  isActive
                    ? "font-semibold text-[#3a2f2a] border-b-4 border-[#3a2f2a]"
                    : "text-[#a89f97]"
                }`}
              >
                {tab.label}
              </a>
            );
          })}
        </nav>

        {/* Before / After Image Slider */}
        {selectedTab && (
          <BeforeAfterSlider
            before={selectedTab.before}
            after={selectedTab.after}
            alt={selectedTab.description}
          />
        )}
      </div>
    </div>
  );
}
