import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const faqData = [
  {
    id: 1,
    question: "What services do architects provide?",
    answer:
      "Architects provide a range of services including conceptual design, planning, project management, and overseeing construction to ensure your vision becomes reality."
  },
  {
    id: 2,
    question: "What is the timeline for a typical project?",
    answer:
      "Project timelines vary based on scope and complexity, but typically range from a few months for small projects to over a year for large-scale developments."
  },
  {
    id: 3,
    question: "How do I find the right architect for my project?",
    answer:
      "Look for architects with experience relevant to your project type, strong portfolios, good communication skills, and positive client references."
  },
  {
    id: 4,
    question: "Don't architects add substantial cost to a project?",
    answer:
      "While architects add to the upfront cost, their expertise often saves money in the long run by avoiding costly mistakes and ensuring efficient design."
  },
  {
    id: 5,
    question: "How much does a project cost?",
    answer:
      "Project costs vary widely depending on size, materials, and complexity. Architects typically work within your budget to maximize value."
  }
];

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-white text-black min-h-screen py-12 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-10  font-['Charis_SIL']">
        FAQ
      </div>
      <div className="space-y-8 mt-10">
        {faqData.map(({ id, question, answer }) => {
          const isExpanded = expandedId === id;
          return (
            <div
              onClick={() => toggleExpand(id)}
              key={id}
              className="border-b border-gray-200 pb-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <span className="text-gray-400 text-sm select-none">
                    {id.toString().padStart(2, "0")}
                  </span>
                  <p className="text-xl font-normal">{question}</p>
                </div>
                <button
                  aria-label={`Toggle question ${id}`}
                  onClick={() => toggleExpand(id)}
                  className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 focus:outline-none transition-transform ${isExpanded ? "rotate-180" : ""
                    }`}
                >
                  <IoIosArrowUp size={20} />
                </button>
              </div>
              {isExpanded && (
                <p className="mt-4 text-gray-600 max-w-4xl ml-10 max-md:ml-0">{answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
