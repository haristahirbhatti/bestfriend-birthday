"use client";
import { motion, PanInfo } from "framer-motion";
import { useState } from "react";

interface MemoryProps {
  onNext: () => void;
}

const photoList = [
  { id: 1, src: "/photo1.jpg" },
  { id: 2, src: "/photo2.jpg" },
  { id: 3, src: "/photo3.jpg" },
];

export default function MemoryStack({ onNext }: MemoryProps) {
  const [cards, setCards] = useState(photoList);

  const swap = () => {
    setCards((prev) => {
      const newArray = [...prev];
      const first = newArray.shift();
      if (first) newArray.push(first);
      return newArray;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-pink-100"
    >
      <h2 className="text-3xl font-serif text-pink-500 mb-10 text-center">
        Swipe cards to see <br /> our memories! ✨
      </h2>

      <div className="relative w-64 h-80">
        {cards.map((photo, index) => (
          <motion.div
            key={photo.id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            // FIX: Explicitly typing _e and info
            onDragEnd={(_e: any, info: PanInfo) => {
              if (Math.abs(info.offset.x) > 100) {
                swap();
              }
            }}
            animate={{
              scale: 1 - index * 0.05,
              y: index * -15,
              zIndex: cards.length - index,
              opacity: 1 - index * 0.2,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute inset-0 bg-white p-2 shadow-2xl rounded-2xl border-4 border-white cursor-grab active:cursor-grabbing"
          >
            <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={photo.src}
                alt="Memory"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="mt-24 bg-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-pink-600 transition"
      >
        Read My Message ✉️
      </motion.button>
    </motion.div>
  );
}