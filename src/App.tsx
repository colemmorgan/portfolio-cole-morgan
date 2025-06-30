import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import Projects from "./components/Projects";
import Scene from "./components/Scene";
import FooterScene from "./components/ui/FooterScene";
import Footer from "./components/Footer";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setLoaded(true);
        setShowLoader(false);
        document.body.style.overflowY = "auto";
      }, 300); // 1 second delay after full load
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <main className="relative">
      <div className="mx-auto max-w-[1180px] px-10">
        <Nav />
        <Hero loaded={loaded} />
        <Experience />
        <Projects />
        <Footer/>
      </div>
      <AnimatePresence>
        {!loaded && showLoader && (
          <>
            <motion.div
              key="loader"
              className="absolute inset-0 z-10 flex max-h-screen items-center justify-center bg-black text-xl text-white"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <img src="/loading-img.png" alt="" className="opacity-15 w-[500px] h-[500px]" />
              <div className="absolute bottom-6 left-6 z-20 items-start text-start text-8xl font-semibold text-dark-700">
                {progress.toFixed(0)}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
