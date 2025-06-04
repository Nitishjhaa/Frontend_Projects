import React, { useEffect, useRef, useState } from "react";

const brands = [
  "Lulu & Georgia",
  "The Inside",
  "Serena & Lily",
  "Surya",
  "Lulu & Georgia",
  "The Inside",
  "Serena & Lily",
  "Surya",
];

const OurPartners = () => {
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(null);

  useEffect(() => {
    const container = scrollRef.current;
    let offset = 0;

    const animate = () => {
      offset += 0.5;
      container.style.transform = `translateY(-${offset}px)`;

      const items = container.querySelectorAll(".scroll-item");
      const containerRect = container.parentElement.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestIndex = -1;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(itemCenter - containerCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex(closestIndex);

      if (offset >= container.scrollHeight / 2) {
        offset = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <>
      <div className="bg-[#E8E5DD] m-0 p-0 font-[Georgia] ">
        <div className="flex flex-col md:flex-row ">
          {/* Left Column */}
          <div className="md:w-1/2 p-8 sm:p-16 flex flex-col justify-center">
            <p className="text-[12px] font-semibold text-[#3B2F2F] mb-4 tracking-wide">
              OUR PARTNERS IN STYLE
            </p>
            <p className="text-[16px] text-[#3B2F2F] mb-12 max-w-md leading-relaxed">
              Having a hard time finding the perfect piece for your home? We’ve got
              you. Our designers thoughtfully source products from your favorite
              brands (tailored to your style and budget).
            </p>

            {/* JS-driven Scroller */}
            <div className="max-w-md border-b border-t border-[#3B2F2F] overflow-hidden h-[250px] relative">
              <div ref={scrollRef} className="flex flex-col gap-2 will-change-transform">
                {brands.map((brand, i) => (
                  <p
                    key={i}
                    className={`scroll-item text-[40px] leading-[1.1] select-none transition-all duration-300 ${i === centerIndex
                        ? "text-[#3B2F2F] font-normal"
                        : "text-[#B7B1A8] opacity-50"
                      }`}
                  >
                    {brand}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 h-160">
            <img
              className="w-full object-cover h-[100%]"
              src="images/img/imgs_ivory/imgusedinweb/partner.jpg"
              alt="Living room with brown leather sectional"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
      <div className="py-12 px-4 md:px-8 bg-[#9F4E30] text-center">
        <h2 className="text-lg font-semibold capitalize text-white mb-4">
          our happiness guarantee
        </h2>
        <p className="text-sm text-white max-w-2xl mx-auto font-['Charis_SIL']">
          We know designing your home can be an intimidating experience. If you’re not happy with your design for whatever reason, let us know, and we’ll make it right.
        </p>
      </div>

    </>
  );
};

export default OurPartners;
