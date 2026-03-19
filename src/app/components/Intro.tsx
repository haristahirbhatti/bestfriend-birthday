"use client";
import { motion } from "framer-motion";

interface IntroProps {
  onNext: () => void;
}

export default function Intro({ onNext }: IntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-[#FFC0CB]"
    >
      {/* Nayi Cat Image Yahan Ayegi */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mb-8"
      >
        <img
          src="/new_cat.png"
          alt="Birthday Cat"
          className="w-48 h-auto drop-shadow-xl rounded-2xl"
        />
      </motion.div>

      <h1 className="text-4xl font-bold text-[#D36086] mb-8 font-serif leading-tight">
        My best friend was born <br /> 22 years ago today! 🎂
      </h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        className="bg-[#D36086] text-white px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-[#b54a6d] transition-colors"
      >
        See the Surprise 🎁
      </motion.button>
    </motion.div>
  );
}