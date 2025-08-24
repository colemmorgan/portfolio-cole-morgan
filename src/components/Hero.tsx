import CTAButton from "../buttons/CTAButton";
import { ArrowUpRight } from "lucide-react";
import HeroPhotos from "./ui/HeroPhotos";

export default function Hero() {
  return (
    <div className="pt-12"   id="hero">
      <h1 className="font-instrument text-5xl italic">Cole Morgan</h1>
      <p className="mt-3 max-w-[700px] text-xl font-semibold">
        Hi! I'm a front-end focused full stack developer studying CS at the
        University of Florida.{" "}
        <span className="text-foreground-secondary">
          {" "}
          I currently work as a software engineering intern for Satlantis where
          I create software to help visualize and analyze satellite imagery.
        </span>
      </p>
      <div className="mt-5 flex">
        <CTAButton link="https://www.linkedin.com/in/cole-morgan-/">
          <p className="font-medium">Let's get in touch!</p>{" "}
          <ArrowUpRight size={18} />
        </CTAButton>
      </div>
      <HeroPhotos/>
     
    </div>
  );
}
