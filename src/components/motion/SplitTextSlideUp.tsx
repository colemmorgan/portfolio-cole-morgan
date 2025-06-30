import { motion } from "framer-motion";

const DURATION = 0.5;
const STAGGER = 0.03;

type NameCharProps = {
  char: string;
  index: number;
  shouldAnimate: boolean;
};

const SplitSlideUp = ({ char, index, shouldAnimate }: NameCharProps) => {
  if(char === " ") {
    return (
      <div className="w-[18px]"></div>
    )
  }
  return (
    <div className="w-min relative ">
      <motion.span
        className="inline-block"
        variants={{
          initial: { y: "0%", },
          animate: { y: "-110%",  },
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
        className="absolute inset-0"
        variants={{
          initial: { y: "100%",  },
          animate: { y: "-5%", },
        }}
        initial="initial"
        animate={shouldAnimate ? "animate" : "initial"}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          delay: STAGGER * index + 0.05,
        }}
      >
        {char}
      </motion.span>
    </div>
  );
};

export default SplitSlideUp;
