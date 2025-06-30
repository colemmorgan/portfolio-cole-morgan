import { ArrowUpRight } from "lucide-react";
import CTAButton from "./buttons/CTAButton";
import AnimatedFadeUp from "./motion/FadeIn";

export default function Projects() {
  return (
    <section className="border-dark-200 mb-16 border-b py-16">
      <div className="grid grid-cols-12 gap-3">
        <p className="text-dark-700 col-span-2 text-xl font-medium">03.</p>
        <div className="col-span-10">
          <h3 className="text-dark-700 pb-4 text-xl font-bold">PROJECTS</h3>
        </div>
      </div>
      <AnimatedFadeUp threshold={0.3}>
        <div className="mt-8 grid grid-cols-12 gap-3">
          <figure className="border-dark-200 col-span-7 overflow-hidden rounded-md border">
            <img src="/showoff.webp" alt="" />
          </figure>
          <div className="spacer" />
          <div className="col-span-4">
            <p className="text-2xl font-semibold">
              ShowOff - Browser Mockup Creator + Photo Editor
            </p>
            <p className="text-dark-800 mt-2">
              Mockup editor that allows users to quickly create mockups for
              social media, work, and more. Utilizes webgl for complex effects
              in a single click.
            </p>
            <p className="text-dark-700 mt-2 text-sm">
              Tech: React, FastAPI, WebGL, Supabase
            </p>
            <div className="mt-5 flex items-center gap-2">
              <CTAButton link="fix" small={true}>
                Live Demo <ArrowUpRight size={16} />
              </CTAButton>
              <a href="" className="px-6 text-sm">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </AnimatedFadeUp>
      <AnimatedFadeUp threshold={0.3}>
        <div className="mt-8 grid grid-cols-12 gap-3">
          <figure className="border-dark-200 col-span-7 overflow-hidden rounded-md border">
            <img src="/spcb.webp" alt="" />
          </figure>
          <div className="spacer" />
          <div className="col-span-4">
            <p className="text-2xl font-semibold">
              Custom Content Management System + Club Website
            </p>
            <p className="text-dark-800 mt-2">
              Software and website for the Society of PC Building that enables
              admins to update website content without code.
            </p>
            <p className="text-dark-700 mt-2 text-sm">
              Tech: Next.js, TypeScript, Figma, Firebase, Tailwind
            </p>
            <div className="mt-5 flex items-center gap-2">
              <CTAButton link="fix" small={true}>
                Live Demo <ArrowUpRight size={16} />
              </CTAButton>
              <a href="" className="px-6 text-sm">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </AnimatedFadeUp>
      <AnimatedFadeUp threshold={0.3}>
        <div className="mt-8 grid grid-cols-12 gap-3">
          <figure className="border-dark-200 col-span-7 overflow-hidden rounded-md border">
            <img src="/fd.webp" alt="" />
          </figure>
          <div className="spacer" />
          <div className="col-span-4">
            <p className="text-2xl font-semibold">Professional Coaching Site</p>
            <p className="text-dark-800 mt-2">
              Freelance design/development project I created for a client to
              tell a story about his career and create a personal brand.
            </p>
            <p className="text-dark-700 mt-2 text-sm">
              Tech: Nextjs, TypeScript, Figma, Tailwind
            </p>
            <div className="mt-5 flex items-center gap-2">
              <CTAButton link="fix" small={true}>
                Live Demo <ArrowUpRight size={16} />
              </CTAButton>
            </div>
          </div>
        </div>
      </AnimatedFadeUp>
    </section>
  );
}
