import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import Projects from "./components/Projects";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setLoaded(true);
        setShowLoader(false);
        document.body.style.overflowY = "auto"
      }, 700); // 1 second delay after full load
      return () => clearTimeout(timeout);
    }
  }, [progress]);

   useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <main className="mx-auto max-w-[1180px] px-10 relative container">
      <Nav />
      <Hero loaded={loaded} />
      <Experience />
      <Projects/>
      <AnimatePresence>
        {!loaded && showLoader && (
          <motion.div
            key="loader"
            className="absolute max-h-screen inset-0 z-50 bg-black flex items-center justify-center text-white text-xl"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            Loading...
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
