import { motion, useScroll, useSpring } from "framer-motion";

/** Thin progress bar pinned to the very top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100000] bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
      style={{ scaleX }}
    />
  );
}
