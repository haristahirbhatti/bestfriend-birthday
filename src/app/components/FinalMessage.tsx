"use client";
import { motion } from "framer-motion";

export default function FinalMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center min-h-screen p-6 bg-[#FFC0CB]"
    >
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[40px] shadow-2xl border-t-8 border-[#D36086] text-center">
        <motion.h2
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-[#D36086] mb-8 font-serif"
        >
          To my favorite person,     Happy Birthday! ❤️
        </motion.h2>

        <div className="space-y-6 text-[#b54a6d] text-lg md:text-xl italic leading-relaxed font-medium font-serif">
          <p>
            "Log kehte hain ke waqt ke saath log badal jaate hain, lekin tumhare saath guzra
            har saal mujhe ye batata hai ke asli dosti kabhi nahi badalti."
          </p>

          <p>
            "Tumhare saath bitaya har lamha mere liye ek memory hai. Tum sirf ek dost nahi ho,
            tum ek sukoon ho, aur main bas itna kehna chahta hoon ke tumhari jagah
            meri life mein koi nahi le sakta."
          </p>

          <p>
            "Shukriya hamesha saath dene ke liye, meri fizool baatein sunne ke liye aur mujhe
            hamesha samajhne ke liye."
          </p>

          <p>
            "Aaj jab tum apni life ka ek naya chapter shuru kar rahe ho, toh meri bas yahi dua hai
            ke tum wo sab hasil karo jiske tum khwab dekhte ho."
          </p>

          <p className="font-bold not-italic text-[#D36086]">
            "You truly make the world a better place just by being in it. Hamesha haste muskurate raho,
            kyunki tumhari smile hi meri khushi hai!"
          </p>
        </div>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-10 text-5xl"
        >
          ✨💖✨
        </motion.div>

        <p className="mt-8 text-[#D36086] font-bold text-xl tracking-widest uppercase">
          — Hamesha Tumhara Dost(Hanu)
        </p>
      </div>
    </motion.div>
  );
}