import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  /** ms between each word */
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

/**
 * Splits text into words and slides each one up from a hidden overflow mask.
 * Gives that premium "type-reveal" look used on high-end portfolios.
 */
export function AnimatedText({
  text,
  className = "",
  delay = 0,
  stagger = 0.09,
  as: Tag = "span",
}: Props) {
  const words = text.split(" ");

  return (
    <Tag className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "105%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: delay + i * stagger,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
