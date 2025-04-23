"use client";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { useEffect } from "react";

export default function Loading({
  loading = true,
  message = "Processing, please wait...",
}) {
  const [animationState, cycleAnimation] = useCycle("split", "merge");

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        cycleAnimation();
      }, 800); // Reduced total duration of split + merge cycle
      return () => clearInterval(interval);
    }
  }, [loading, cycleAnimation]);

  const boxVariants = {
    initial: { width: 64, height: 64 },
    split: {
      width: 96, // Reduced width to match the new split distance
      height: 64,
      transition: { duration: 0.1, ease: "easeInOut" }, // Faster split
    },
    merge: {
      width: 64,
      height: 64,
      transition: { duration: 0.1, ease: "easeInOut" }, // Faster merge
    },
  };

  const halfVariants = {
    initial: { x: 0 },
    split: (isLeft) => ({
      x: isLeft ? -56 : 56, // Reduced split distance from 52px to 16px
      transition: { duration: 0.4, ease: "easeInOut" }, // Faster transition
    }),
    merge: {
      x: 0,
      transition: { duration: 0.4, ease: "easeInOut" }, // Faster transition
    },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className=" h-[80vh] inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <motion.div
              className="relative flex items-center justify-center"
              variants={boxVariants}
              initial="initial"
              animate={animationState}
            >
              <motion.div
                className="absolute w-16 h-16 bg-gradient-to-tr from-[#c2e9fb] to-[#a1c4fd] rounded-lg shadow-xl"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }} // Slightly faster rotation
              >
                <motion.div
                  className="absolute w-8 h-16 bg-gradient-to-tr from-[#c2e9fb] to-[#a1c4fd] "
                  variants={halfVariants}
                  initial="initial"
                  animate={animationState}
                  custom={true}
                />
                <motion.div
                  className="absolute w-8 h-16 left-8 bg-gradient-to-tr from-[#c2e9fb] to-[#a1c4fd] "
                  variants={halfVariants}
                  initial="initial"
                  animate={animationState}
                  custom={false}
                />
              </motion.div>
            </motion.div>
            <motion.p
              className="text-white mt-3 text-lg font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {message}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
