import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CustomCursor — desktop-only dual cursor (dot + ring).
 * - Dot: 8px filled circle, follows instantly
 * - Ring: 32px stroke circle, springs behind with lag
 * - On hovering links/buttons: ring expands to 44px + color deepens
 * - Hidden on touch devices and on mouse leave
 */
/** Returns true for any device that has no precise pointer (touch / stylus-only). */
function isTouchOnlyDevice() {
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(hover: none)").matches
  );
}

export function CustomCursor() {
  // Initialise synchronously — no flash / stray dot on first render on mobile
  const [isTouch] = useState<boolean>(isTouchOnlyDevice);
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const dotX = useSpring(mouseX, { stiffness: 2000, damping: 80, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 2000, damping: 80, mass: 0.1 });
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 24, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 24, mass: 0.5 });

  useEffect(() => {
    // Skip all listeners if this is a touch device
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsPointer(
        !!el.closest("a, button, [role='button'], input, select, textarea, label") ||
          window.getComputedStyle(el).cursor === "pointer"
      );
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [isTouch, mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      {/* Dot — snappy, always on top */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-blue-600"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isPointer ? 5 : 8,
          height: isPointer ? 5 : 8,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.12 }}
      />

      {/* Ring — lags behind, expands on interactive elements */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-[1.5px]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isPointer ? 44 : 32,
          height: isPointer ? 44 : 32,
          opacity: visible ? 1 : 0,
          borderColor: isPointer
            ? "rgba(37, 99, 235, 0.7)"
            : "rgba(59, 130, 246, 0.45)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
    </>
  );
}
