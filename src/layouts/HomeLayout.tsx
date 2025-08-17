import {
  Mail,
  Moon,
  PanelRightClose,
  PanelRightOpen,
  Sun,
  File,
  Home,
  Briefcase,
  AppWindow,
  Award
} from "lucide-react";
import useTheme from "../hooks/useTheme";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RiLinkedinBoxLine, RiGithubLine} from "react-icons/ri";


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  // Set hasLoaded to true after the initial render
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
              ease: "easeInOut"
            }}
            className="overflow-hidden"
          >
            <Nav />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-h-screen flex-1 overflow-y-auto">
        <ActionBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {children}
      </div>
    </main>
  );
}



export function Nav() {
  return (
      <nav className="bg-background-secondary border-background-tertiary h-screen w-60 border-r p-2">
        <div className="flex items-center gap-2 px-3 py-1">
          <figure>
            <img
              src="/icon.png"
              alt=""
              className="border-background-tertiary h-8 w-8 rounded-full border"
            />
          </figure>
          <p className="text-sm font-semibold">Cole Morgan</p>
        </div>
        <div className="mt-2 pt-3">
          <p className="text-foreground-tertiary pl-3 text-xs">Contact</p>
          <ul className="mt-2 grid gap-1 text-sm">
            <li>
              <a
                href=""
                target="_blank"
                className="text-foreground-tertiary hover:bg-background-tertiary hover:text-foreground-secondary transition-colors flex items-center gap-2 rounded-sm px-3 py-1.5 font-medium"
              >
                <Mail size={15} /> <span>Email</span>
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                className="text-foreground-tertiary hover:bg-background-tertiary hover:text-foreground-secondary transition-colors flex items-center gap-2 rounded-sm px-3 py-1.5 font-medium"
              >
                <RiLinkedinBoxLine className="w-[18px] h-[18px]"/> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/colemmorgan"
                target="_blank"
                className="text-foreground-tertiary hover:bg-background-tertiary hover:text-foreground-secondary transition-colors flex items-center gap-2 rounded-sm px-3 py-1.5 font-medium"
              >
                <RiGithubLine className="w-[18px] h-[18px]"/> GitHub
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                className="text-foreground-tertiary hover:bg-background-tertiary hover:text-foreground-secondary transition-colors flex items-center gap-2 rounded-sm px-3 py-1.5 font-medium"
              >
                <File size={15} /> Resume
              </a>
            </li>
          </ul>
        </div>
          <div className="mt-2 pt-3">
          <p className="text-foreground-tertiary pl-3 text-xs">Sections</p>
          <ul className="mt-2 grid gap-1 text-sm">
            <li>
              <a
                href=""
                target="_blank"
                className="text-foreground-tertiary hover:bg-background-tertiary hover:text-foreground-secondary transition-colors flex items-center gap-2 rounded-sm px-3 py-1.5 font-medium"
              >
                <Home size={15} /> <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                className="text-foreground-tertiary hover:bg-background-tertiary hover:text-foreground-secondary transition-colors flex items-center gap-2 rounded-sm px-3 py-1.5 font-medium"
              >
                <Briefcase size={15} /> <span>Experience</span>
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                className="text-foreground-tertiary hover:bg-background-tertiary hover:text-foreground-secondary transition-colors flex items-center gap-2 rounded-sm px-3 py-1.5 font-medium"
              >
                <AppWindow size={15} /> Work/Projects
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                className="text-foreground-tertiary hover:bg-background-tertiary hover:text-foreground-secondary transition-colors flex items-center gap-2 rounded-sm px-3 py-1.5 font-medium"
              >
                <Award size={15} /> Awards
              </a>
            </li>
          </ul>
        </div>
      </nav>
  )
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
