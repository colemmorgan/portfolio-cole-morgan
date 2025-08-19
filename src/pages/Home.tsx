import Footer from "../components/Footer";
import Gridlines from "../components/ui/Gridlines";
import HomeLayout from "../layouts/HomeLayout";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import { useHomeScrollProgress } from '../hooks/useHomeScrollProgress';

export default function Home() {

 const { heroRef, experienceRef, projectsRef, awardsRef } = useHomeScrollProgress();

  return (
    <HomeLayout>
      <div className="relative mx-auto min-h-screen max-w-6xl px-8 pb-6">
        <Gridlines/>
        <div className="relative z-20">
          <div ref={heroRef}>
            <Hero/>
          </div>
          <div ref={experienceRef} id="experience">
            <Experience/>
          </div>
          <div ref={projectsRef} id="projects">
            <Projects/>
          </div>
          <div ref={awardsRef} id="awards">
            <Footer />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}