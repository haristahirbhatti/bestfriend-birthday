"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";

// Relative Imports
import Countdown from "./components/Countdown";
import Loading from "./components/Loading";
import Intro from "./components/Intro";
import CakeAction from "./components/CakeAction";
import MemoryStack from "./components/MemoryStack";
import FinalMessage from "./components/FinalMessage";

export default function BirthdaySurprise() {
  const [step, setStep] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const nextStep = () => {
    // Jab Cake cut ho (Step 3), tab confetti chale
    if (step === 3) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ff69b4", "#ff1493", "#ffffff"],
      });
    }
    setStep((prev) => prev + 1);
  };

  if (!hasMounted) return null;

  return (
    <main className="relative min-h-screen bg-[#FFD1DC] overflow-hidden">
      {/* Floating Hearts Background */}
      {hasMounted && [...Array(15)].map((_, i) => (
        <div key={i} className="heart" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          fontSize: `${Math.random() * 20 + 10}px`
        }}>❤️</div>
      ))}

      <AnimatePresence mode="wait">
        {/* Step 0: Countdown Page */}
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Countdown onNext={nextStep} />
          </motion.div>
        )}

        {/* Step 1: New Loading Page (Hello Kitty) */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Loading onNext={nextStep} />
          </motion.div>
        )}

        {/* Step 2: Intro Page */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Intro onNext={nextStep} />
          </motion.div>
        )}

        {/* Step 3: Cake Page */}
        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <CakeAction onNext={nextStep} />
          </motion.div>
        )}

        {/* Step 4: Memories Page */}
        {step === 4 && (
          <motion.div key="step4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MemoryStack onNext={nextStep} />
          </motion.div>
        )}

        {/* Step 5: Final Message */}
        {step === 5 && (
          <motion.div key="step5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <FinalMessage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}