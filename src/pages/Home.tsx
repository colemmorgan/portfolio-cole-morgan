import { ArrowUpRight } from "lucide-react";
import CTAButton from "../buttons/CTAButton";
import Footer from "../components/Footer";
import Gridlines from "../components/ui/Gridlines";
import HomeLayout from "../layouts/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <div className="relative mx-auto min-h-screen max-w-6xl px-6 pt-12 pb-6">
        <Gridlines/>
        <div className="relative z-20">
          <div className="">
            <h1 className="font-instrument text-5xl italic">Cole Morgan</h1>
            <p className="mt-3 max-w-[700px] text-xl font-semibold">
              Hi! I'm a front-end focused full stack developer studying CS at
              the University of Florida.{" "}
              <span className="text-foreground-secondary">
                {" "}
                I currently work as a software engineering intern for Satlantis
                where I create software to help visualize and analyze satellite
                imagery.
              </span>
            </p>
            <div className="mt-4 flex">
              <CTAButton link="https://www.linkedin.com/in/cole-morgan-/">
                <p className="font-medium">Let's get in touch!</p> <ArrowUpRight size={18}/>
              </CTAButton>
            </div>
            <div className="mt-8 flex">
              <div className="bg-background-tertiary rounded-lg overflow-hidden rotate-[-10deg]">
                <img src="/hero-1.png" alt="" className="h-16 w-16"/>
              </div>
              <div className="bg-background-tertiary rounded-lg overflow-hidden -ml-8 rotate-[10deg]">
                <img src="/hero-2.png" alt="" className="h-16 w-16"/>
              </div>
              <div className="bg-background-tertiary h-16 w-16 rounded-lg overflow-hidden -ml-8 rotate-[5deg]"></div>
              <div className="bg-background-tertiary h-16 w-16 rounded-lg overflow-hidden -ml-8  rotate-[-5deg]"></div>
              <div className="bg-background-tertiary h-16 w-16 rounded-lg overflow-hidden -ml-8"></div>
            </div>
          </div>
          <div className="mt-24 pt-12">
            <h3 className="text-xl font-semibold text-foreground-tertiary">EXPERIENCE</h3>
          </div>
          <div className="mt-64"></div>
          <Footer />
        </div>
      </div>
    </HomeLayout>
  );
}
