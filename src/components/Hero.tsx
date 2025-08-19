import React from "react";
import CTAButton from "../buttons/CTAButton";
import { ArrowUpRight } from "lucide-react";

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
      <div className="mt-4 flex">
        <CTAButton link="https://www.linkedin.com/in/cole-morgan-/">
          <p className="font-medium">Let's get in touch!</p>{" "}
          <ArrowUpRight size={18} />
        </CTAButton>
      </div>
      <div className="mt-8 flex">
        <div className="bg-background-tertiary rotate-[-10deg] overflow-hidden rounded-lg shadow-xl">
          <img src="/hero-1.png" alt="" className="h-16 w-16" />
        </div>
        <div className="bg-background-tertiary -ml-8 rotate-[10deg] overflow-hidden rounded-lg shadow-xl">
          <img src="/hero-2.png" alt="" className="h-16 w-16" />
        </div>
        <div className="bg-background-tertiary -ml-8 h-16 w-16 rotate-[5deg] overflow-hidden rounded-lg"></div>
        <div className="bg-background-tertiary -ml-8 h-16 w-16 rotate-[-5deg] overflow-hidden rounded-lg"></div>
        <div className="bg-background-tertiary -ml-8 h-16 w-16 overflow-hidden rounded-lg"></div>
      </div>
    </div>
  );
}
