import { motion } from "framer-motion";

const DURATION = 0.5;
const STAGGER = 0.03;

type NameCharProps = {
  char: string;
  index: number;
  shouldAnimate: boolean;
};

const SplitSlideUp = ({ char, index, shouldAnimate }: NameCharProps) => {
  return (
    <div className="min-w-5 relative overflow-hidden">
      <motion.span
        className="inline-block"
        variants={{
          initial: { y: "0%" },
          animate: { y: "-100%" },
        }}
        initial="initial"
        animate={shouldAnimate ? "animate" : "initial"}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          delay: STAGGER * index,
        }}
      >
        {char}
      </motion.span>
      <motion.span
        className="absolute inset-0 inline-block"
        variants={{
          initial: { y: "100%" },
          animate: { y: "0%" },
        }}
        initial="initial"
        animate={shouldAnimate ? "animate" : "initial"}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          delay: STAGGER * index,
        }}
      >
        {char}
      </motion.span>
    </div>
  );
};

export default SplitSlideUp;
