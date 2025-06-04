import React, { useState } from 'react';

const slides = [
  {
    quote: `“Surprisingly easy and enjoyable, and a process I am looking forward to repeating!”`,
    image: '/images/quote1.png',
    logos: [
      'https://placehold.co/120x40?text=VOGUE&font=serif&color=cccccc',
      'https://placehold.co/140x40?text=The+New+York+Times&font=serif&color=bbbbbb',
      'https://placehold.co/140x40?text=House+Beautiful&font=serif&color=bbbbbb',
    ],
  },
  {
    quote: `“Working with this team was a dream — their design instincts are unmatched.”`,
    image: '/images/quote2.png',
    logos: [
      'https://placehold.co/100x40?text=People&font=serif&color=cc7f66&border=1px+solid+cc7f66',
      'https://placehold.co/140x40?text=Apartment+Therapy&font=serif&color=bbbbbb',
      'https://placehold.co/130x40?text=Elle&font=serif&color=999999',
    ],
  },
  {
    quote: `“Exceptional from start to finish. Their attention to detail is top-tier.”`,
    image: '/images/quote3.png',
    logos: [
      'https://placehold.co/120x40?text=Forbes&font=serif&color=bbbbbb',
      'https://placehold.co/140x40?text=Fast+Company&font=serif&color=cccccc',
      'https://placehold.co/130x40?text=Bloomberg&font=serif&color=aaaaaa',
    ],
  },
];

const QuoteFrame = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const { quote, image, logos } = slides[index];

  return (
    <div className="bg-white text-black font-serif py-16 px-6 sm:px-10 md:px-16 lg:px-24 max-w-7xl mx-auto flex flex-col items-center  overflow-hidden">
      {/* Quote Headline */}
      <p className="text-center text-[22px] leading-[32px] max-w-3xl mb-12">
        {quote}
      </p>

      {/* Image */}
     

      {/* Logos */}
      <div className="w-full flex justify-between max-w-5xl mb-16 gap-4">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Logo ${i + 1}`}
            className="max-h-10 object-contain flex-1"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="w-full max-w-5xl flex justify-between items-center  pt-3">
        <button
          onClick={prev}
          className="mr-5 text-xs font-semibold tracking-widest uppercase hover:text-[9f4e30]"
        >
          Prev
        </button>
        <div className="flex-grow border-t-2 border"></div>
        <button
          onClick={next}
          className=" ml-5 text-xs font-semibold tracking-widest uppercase hover:text-[9f4e30]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuoteFrame;
