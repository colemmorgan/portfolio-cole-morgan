import CTAButton from "./buttons/CTAButton";
import { MessageSquareText } from "lucide-react";
import Scene from "./Scene";
import { AnimatedHeader } from "./ui/Header";
import SplitLinesSlideUp from "./motion/SlideUpOnView";

type HeroProps = {
  loaded: boolean;
};

export default function Hero({ loaded }: HeroProps) {
  return (
    <section
      id="home"
      className="border-dark-200 grid grid-cols-12 gap-3 border-b pt-24 pb-16"
    >
      <p className="text-dark-700 col-span-2 text-xl font-medium">01.</p>
      <div className="col-span-10">
        <AnimatedHeader loaded={loaded} text="COLE MORGAN" />

        <h2 className="text-dark-800 mt-4 text-2xl font-semibold">
          <SplitLinesSlideUp
            fontSize={24}
            loaded={loaded}
            text={`Hi! I'm a front-end focused full stack developer studying CS at the University of Florida. I currently work as a software engineering intern for Satlantis where I create software to help visualize and analyze satellite imagery.`}
          />
        </h2>

        <div className="mt-8 flex items-center gap-5 font-medium">
          <CTAButton link="https://www.linkedin.com/in/cole-morgan-/">
            Let's get in touch! <MessageSquareText size={18} />
          </CTAButton>

          <a href="https://www.linkedin.com/in/cole-morgan-/" target="_blank">
            <img src="/icons/linkedin.svg" alt="" />
          </a>
          <a href="https://github.com/colemmorgan" target="_blank">
            <img src="/icons/github.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="bg-dark-50 border-dark-100 col-span-12 mt-16 h-[350px] w-full rounded-md border">
        <Scene />
      </div>
    </section>
  );
}
