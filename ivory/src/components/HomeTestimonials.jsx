import { useRef, useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useDrag } from "@use-gesture/react";
import { FooterNav } from "./FootNav"; // If unused, feel free to remove

const reviews = [
  {
    author: "Ritika Sharma",
    title: "Exceeded all expectations",
    text: "Choosing this team was the best decision we made for our home renovation. The design, execution, and attention to detail were simply outstanding. They listened patiently and delivered more than we imagined.",
  },
  {
    author: "Amit Verma",
    title: "Truly professional",
    text: "Right from the first consultation to the final handover, everything was smooth and transparent. Their professionalism and creativity really made a difference in our office design project.",
  },
  {
    author: "Sneha Iyer",
    title: "Highly recommended!",
    text: "I’m extremely happy with the outcome. The team transformed a plain space into a beautiful, functional living area that reflects my personality. They were always open to feedback and made the process fun.",
  },
  {
    author: "Rahul Mehta",
    title: "Reliable and efficient",
    text: "They handled our restaurant interiors flawlessly. The blend of aesthetics and practicality was spot-on. Their commitment to timelines and quality is commendable. Definitely recommend them.",
  },
  {
    author: "Priya Nair",
    title: "Outstanding service",
    text: "From design ideation to execution, the entire process was well-managed and enjoyable. Their ideas were fresh and modern, and they incorporated every requirement we had. Truly impressed!",
  },
  {
    author: "Arjun Kapoor",
    title: "Worth every penny",
    text: "We hired them for our villa project and the results are stunning. The team is talented, communicative, and extremely passionate about their work. Great value for money and fantastic experience overall.",
  },
  {
    author: "Deepika Joshi",
    title: "They understood my vision",
    text: "I had a very specific idea in mind for my studio apartment, and they nailed it! The use of space, color palette, and materials were perfect. I felt heard and understood throughout.",
  },
  {
    author: "Karan Malhotra",
    title: "Creative and dependable",
    text: "Their team was great to work with. They brought creative ideas while being very practical about budgets and timelines. Our space now feels elevated and functional. Couldn’t be happier.",
  },
];


export default function ReviewsSection() {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const CARD_WIDTH = 300; // card width + margin

  const slideTo = (i) => {
    controls.start({ x: `-${i * CARD_WIDTH}px` });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % reviews.length;
      setCurrentIndex(nextIndex);
      slideTo(nextIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const bind = useDrag(({ down, movement: [mx], direction: [dx] }) => {
    if (!down && Math.abs(mx) > 100) {
      let newIndex = currentIndex + (dx < 0 ? 1 : -1);
      newIndex = Math.max(0, Math.min(reviews.length - 1, newIndex));
      setCurrentIndex(newIndex);
      slideTo(newIndex);
    }
  });

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    slideTo(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(reviews.length - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    slideTo(newIndex);
  };

  return (
    <div className="flex justify-center items-center bg-[#1b3d49] text-white">
      <div className="w-[90%] max-w-screen-xl">
        <section className="px-6 py-20 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 font-serif">
          {/* Left Text */}
          <div className="flex flex-col justify-center max-w-xl">
            <span className="text-xs font-semibold tracking-widest mb-4 block">REVIEWS</span>
            <h2 className="text-5xl leading-[1.1] font-normal mb-10">
              Over 100,000 designs completed <br /> for happy clients.
            </h2>
           
          </div>

          {/* Carousel */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-4"
              animate={controls}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              {...bind()}
              style={{ cursor: "grab", touchAction: "pan-y" }}
            >
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white text-[#1b3d49] rounded-lg p-8 min-w-[320px] max-w-[320px] flex-shrink-0"
                >
                  <p className="text-xs mb-3 font-normal">by {review.author}</p>
                  <div className="flex mb-3 text-yellow-400 space-x-1">
                    {[...Array(5)].map((_, j) => (
                      <i className="fas fa-star" key={j}></i>
                    ))}
                  </div>
                  <h3 className="text-2xl font-normal mb-3">{review.title}</h3>
                  <p className="text-xs font-normal leading-tight">{review.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Prev/Next Buttons */}
        <footer className="mx-auto px-6 pb-12 bg-[#1b3d49]">
          <div className="flex items-center text-white text-xs font-semibold tracking-widest">
            <span
              onClick={handlePrev}
              className="pr-4 cursor-pointer hover:opacity-80 transition"
            >
              PREV
            </span>
            <div className="flex-grow border-t-2 border-white"></div>
            <span
              onClick={handleNext}
              className="pl-4 cursor-pointer hover:opacity-80 transition"
            >
              NEXT
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
