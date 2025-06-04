export default function DesignHelp() {
  return (
    <div className="py-20  bg-white text-center">
      <h2 className="text-3xl md:text-4xl text-gray-900 mb-6 font-['Charis_SIL']">
        Get design help today
      </h2>

      <div className="relative">
        <div className="flex justify-center items-center">
          <div className="flex gap-4 justify-center w-[85%] flex-wrap whitespace-nowrap px-4 md:px-8 py-2 transition-all duration-300">
            {[
              { text: "In-Person Design Services", },
              { text: "Interior Designers", },
              { text: "Coastal Interior Design", },
              { text: "Bedroom Design Ideas",  },
              { text: "Moving Checklist",},
              { text: "Modern Design", },
              { text: "Bohemian Design", },
              { text: "Transitional Design" },
              { text: "Midcentury Modern Design", },
              { text: "Rustic Design",  },
              { text: "Design Trends", },
              { text: "Designer Tips", },
              { text: "Performance Fabrics",},
              { text: "Pattern Play",},
              { text: "Accent Furniture", },
            ].map((link, i) => (
              <div
                key={i}
                className="inline-block text-sm bg-[#E8E5DE] hover:bg-[#EFE3D5] text-black font-medium p-3 rounded-[999px] transition whitespace-nowrap"
              >
                {link.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
