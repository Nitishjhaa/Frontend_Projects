import React, { useEffect, useState } from "react";
import { BsArrow90DegUp } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";



const TapToTop = () => {

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200)
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 90 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="fixed right-6 bottom-10 w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:text-black transition hover:scale-105 shadow-lg z-50"
                    >
                        <BsArrow90DegUp />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    )
}

export default TapToTop
