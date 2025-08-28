import { ArrowUpRight } from "lucide-react";
import HeroPhotos from "./ui/HeroPhotos";
import CTAButton from "./buttons/CTAButton";

export default function Hero() {
  return (
    <div className="pt-[119px] lg:pt-12 px-6 sm:px-8"  id="hero">
      <p className="max-w-[960px] text-2xl md:text-3xl xl:text-4xl font-semibold leading-normal md:leading-[1.32]">
        Hi! I'm Cole Morgan, a front-end focused software engineer at the
        University of Florida.{" "}
        <span className="text-foreground-tertiary">
          {" "}
          I currently work as a fullstack intern at Satlantis where
          I create software to help search, discover, and analyze satellite imagery.
        </span>
      </p>
      <div className="mt-6 flex">
        <CTAButton link="https://www.linkedin.com/in/cole-morgan-/">
          <p className="font-medium">Let's get in touch!</p>{" "}
          <ArrowUpRight size={18} />
        </CTAButton>
      </div>
      <HeroPhotos/>
     
    </div>
  );
}
