import {
  Moon,
  PanelRightClose,
  PanelRightOpen,
  Sun,
} from "lucide-react";
import useTheme from "../hooks/useTheme";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Nav } from "../components/Nav";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <main className="flex">
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={hasLoaded ? { width: 0 } : { width: 240 }}
            animate={{ width: 240 }}
            exit={{ width: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <Nav />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-h-screen flex-1 overflow-y-auto scroll-container">
        <ActionBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {children}
      </div>
    </main>
  );
}



function ActionBar({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: (state: boolean) => void;
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-background-secondary border-background-tertiary sticky top-0 z-50 h-14 w-full items-center border-b p-2">
      <div className="flex h-full items-center">
        <button
          className="text-foreground-secondary hover:bg-background-tertiary cursor-pointer rounded-sm p-2 transition-colors"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? (
            <PanelRightOpen size={20} />
          ) : (
            <PanelRightClose size={20} />
          )}
        </button>
        <button
          onClick={toggleTheme}
          className="text-foreground-secondary hover:bg-background-tertiary cursor-pointer rounded-sm p-2 transition-colors"
        >
          {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </div>
  );
}
