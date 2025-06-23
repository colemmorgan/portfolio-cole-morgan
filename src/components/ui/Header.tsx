import { useRef } from "react";
import { useInView } from "framer-motion";
import SplitSlideUp from "../motion/SplitTextSlideUp";


type Props = {
  text: string;
  loaded: boolean;
};

export const AnimatedHeader = ({ text, loaded }: Props) => {
  const wrapperRef = useRef(null);
  const isInView = useInView(wrapperRef);

  const shouldAnimate = loaded && isInView;

  return (
    <h1
      ref={wrapperRef}
      className="text-7xl font-bold flex overflow-hidden"
    >
      {text.split("").map((char, index) => (
        <SplitSlideUp key={index} char={char} index={index} shouldAnimate={shouldAnimate} />
      ))}
    </h1>
  );
};
