"use client";
import { motion, PanInfo } from "framer-motion";

export default function CakeAction({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-pink-50"
    >
      <h2 className="text-3xl font-bold text-pink-600 mb-12 font-serif">Swipe to cut the cake! 🎂</h2>
      <div className="relative">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_e: any, info: PanInfo) => {
            if (Math.abs(info.offset.x) > 100) onNext();
          }}
          className="w-64 h-64 bg-white rounded-full flex items-center justify-center text-8xl shadow-2xl border-4 border-pink-200 cursor-grab active:cursor-grabbing"
        >
          🎂
        </motion.div>
        <motion.div animate={{ x: [-15, 15, -15] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute -left-16 top-1/2 text-5xl">
          🔪
        </motion.div>
      </div>
    </motion.div>
  );
}