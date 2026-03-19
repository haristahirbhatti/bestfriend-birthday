"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  onNext: () => void;
}

export default function Countdown({ onNext }: CountdownProps) {
  // Reset for 12 AM tonight
  const targetDate = new Date("2026-03-17T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setIsReady(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setIsReady(false);
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-[100dvh] bg-[#FFD1DC] p-4 text-center font-sans"
    >
      <motion.div
        animate={isReady ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : { scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-6xl md:text-8xl mb-6"
      >
        {isReady ? "🎁" : "⏳"}
      </motion.div>

      <h2 className="text-2xl md:text-4xl font-bold text-[#D36086] mb-8 px-4">
        {isReady ? "The Wait is Over!" : "Your Surprise Awaits..."}
      </h2>

      {/* Grid for Mobile (2x2) or Flex for Desktop */}
      <div className="grid grid-cols-2 md:flex gap-3 md:gap-4 mb-10 w-full max-w-[350px] md:max-w-none justify-center">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center bg-white/60 backdrop-blur-sm p-3 md:p-4 rounded-2xl min-w-[70px] md:min-w-[85px] shadow-lg border border-white/40">
            <span className="text-2xl md:text-4xl font-bold text-[#D36086]">{value}</span>
            <span className="text-[10px] md:text-xs uppercase font-semibold text-[#D36086]/70 mt-1">{label}</span>
          </div>
        ))}
      </div>

      {isReady ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-[#D36086] text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold shadow-xl active:bg-[#b54a6d] w-full max-w-[280px] md:max-w-none"
        >
          Open Your Surprise ✨
        </motion.button>
      ) : (
        <div className="bg-white/30 text-[#D36086]/60 px-6 py-3 rounded-full border border-[#D36086]/20 italic text-sm md:text-base">
          Unlocks at midnight! 🌙
        </div>
      )}
    </motion.div>
  );
}