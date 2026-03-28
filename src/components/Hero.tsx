import React, { useRef } from "react";
import { ArrowDown, ExternalLink } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { BackForthTyping } from "./BackForthTyping";
import profileImage from "../assets/CAM00614_Original.jpeg";
import { ViewIndicator } from "./ViewIndicator";

interface HeroProps {
  className?: string;
  showViews?: boolean;
}

/** Spring-magnetic pull for buttons */
function useMagnetic(strength = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 28 });
  const sy = useSpring(y, { stiffness: 300, damping: 28 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return { ref, sx, sy, onMove, onLeave };
}

const container = {
  hidden: {},
  visible: { transition: { delayChildren: 0.2, staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

export const Hero: React.FC<HeroProps> = ({
  className = "",
  showViews = import.meta.env.VITE_FIREBASE_ENABLE_VIEW_COUNTER === "true",
}) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [10, -10]), { stiffness: 260, damping: 22 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-10, 10]), { stiffness: 260, damping: 22 });

  const learnMore = useMagnetic(0.35);
  const github = useMagnetic(0.35);

  const onImageMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const r = imageRef.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left - r.width / 2) / r.width);
    rawY.set((e.clientY - r.top - r.height / 2) / r.height);
  };

  const scrollToAbout = () =>
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16 overflow-hidden ${className}`}
    >
      {/* ── Animated background blobs ── */}
      <motion.div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-300/25 dark:bg-blue-600/10 blur-3xl pointer-events-none"
        animate={{ x: [0, 40, -20, 0], y: [0, -50, 25, 0], scale: [1, 1.12, 0.94, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-indigo-400/20 dark:bg-indigo-500/10 blur-3xl pointer-events-none"
        animate={{ x: [0, -30, 20, 0], y: [0, 40, -30, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-violet-300/15 dark:bg-violet-500/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.25, 0.88, 1], rotate: [0, 120, 240, 360] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center space-y-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Profile image — 3-D tilt */}
          <motion.div variants={item} className="relative inline-block">
            <motion.div
              ref={imageRef}
              onMouseMove={onImageMove}
              onMouseLeave={() => { rawX.set(0); rawY.set(0); }}
              style={{ rotateX, rotateY, transformPerspective: 800 }}
              whileHover={{ scale: 1.07 }}
              transition={{ scale: { type: "spring", stiffness: 280, damping: 22 } }}
              className="relative inline-block"
            >
              <img
                src={personalInfo.profileImageUrl || profileImage}
                alt={personalInfo.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-white dark:border-gray-700 shadow-xl object-cover"
              />
              {/* Orbit ring */}
              <motion.div
                className="absolute inset-[-10px] rounded-full border border-blue-300/40 dark:border-blue-500/30 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500" />
              </motion.div>
              {/* Glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                initial={{ boxShadow: "0 0 0px 0px rgba(59,130,246,0)" }}
                whileHover={{ boxShadow: "0 0 0px 10px rgba(59,130,246,0.15)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            {showViews && (
              <div className="absolute -bottom-2 -right-2">
                <ViewIndicator />
              </div>
            )}
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Typing title */}
          <motion.div variants={item} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            <BackForthTyping text={personalInfo.title} speed={100} pauseDuration={3000} className="font-medium" />
          </motion.div>

          {/* Bio */}
          <motion.p variants={item} className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {personalInfo.bio}
          </motion.p>

          {/* CTA buttons — magnetic pull */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              ref={learnMore.ref as React.RefObject<HTMLButtonElement>}
              onClick={scrollToAbout}
              onMouseMove={learnMore.onMove}
              onMouseLeave={learnMore.onLeave}
              style={{ x: learnMore.sx, y: learnMore.sy }}
              className="group px-8 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center space-x-2 shadow-md"
              whileHover={{ scale: 1.06, boxShadow: "0 12px 32px -8px rgba(37,99,235,0.6)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <span>Learn More</span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.span>
            </motion.button>

            <motion.a
              ref={github.ref as React.RefObject<HTMLAnchorElement>}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={github.onMove}
              onMouseLeave={github.onLeave}
              style={{ x: github.sx, y: github.sy }}
              className="group px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium flex items-center space-x-2"
              whileHover={{ scale: 1.06, boxShadow: "0 8px 24px -6px rgba(0,0,0,0.14)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <motion.span whileHover={{ rotate: 14 }} transition={{ duration: 0.2 }}>
                <ExternalLink className="w-4 h-4" />
              </motion.span>
              <span>GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
