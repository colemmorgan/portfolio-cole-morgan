import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedFadeUpProps = {
  children: React.ReactNode;
  threshold?: number;
};

const AnimatedFadeUp: React.FC<AnimatedFadeUpProps> = ({
  children,
  threshold,
}) => {
  const ref = useRef(null);
  const amt = threshold ? threshold : 0.6;
  const isInView = useInView(ref, { amount: amt, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedFadeUp;
