"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface LoadingProps {
  onNext: () => void;
}

export default function Loading({ onNext }: LoadingProps) {
  useEffect(() => {
    // 4 seconds baad auto next
    const timer = setTimeout(() => {
      onNext();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFC0CB] text-center p-6 font-sans">
      {/* Central Card with Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#FFF44F] p-4 rounded-lg shadow-xl mb-12 relative"
      >
        <img
          src="/duck.png"
          alt="Cute Duck"
          className="w-48 h-48 object-contain"
        />
      </motion.div>

      {/* Loading Text - Exact Style */}
      <h2 className="text-4xl font-bold text-[#D36086] mb-10 tracking-tight">
        Loading your surprise...
      </h2>

      {/* Progress Bar Container - White with Pink Fill */}
      <div className="w-80 h-8 bg-white rounded-full p-1.5 shadow-sm overflow-hidden relative">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear" }}
          className="h-full bg-[#D36086] rounded-full relative"
        >
          {/* Heart Icon on top of the bar */}
          <div className="absolute right-0 -top-1 translate-x-1/2 text-lg">❤️</div>
        </motion.div>
      </div>

      {/* Subtext - Pink and Italic */}
      <p className="mt-12 text-[#D36086] text-xl italic font-medium opacity-80">
        Preparing something magical for you...
      </p>
    </div>
  );
}