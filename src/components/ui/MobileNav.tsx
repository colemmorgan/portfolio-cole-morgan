import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import useTheme from "../../hooks/useTheme";
import { AnimatePresence, motion } from "motion/react";
import { contactLinks, sectionAnchors } from "../../NavContent";


export default function MobileNav() {
  const { theme, toggleTheme } = useTheme();
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileNav]);

  const handleContactClick = (link: typeof contactLinks[0]) => {
    setShowMobileNav(false);
    
    // Use the same logic as DesktopNav
    if (link.type === "mailto") {
      window.location.href = `mailto:${link.href}`;
    } else if (link.type === "navigation") {
      window.open(link.href, "_blank", "noopener,noreferrer");
    } else if (link.type === "download") {
      const a = document.createElement("a");
      a.href = link.href;
      a.download = link.href;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <>
      <div className="bg-background-secondary border-background-tertiary fixed top-0 w-full z-50 flex justify-between border-b px-6 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <figure>
            <img
              src="/icon.png"
              alt=""
              className="border-background-tertiary h-9 w-9 rounded-full border"
            />
          </figure>
          <p className="hidden text-sm font-semibold sm:block">Cole Morgan</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={toggleTheme}
            className="text-foreground-secondary hover:bg-background-tertiary cursor-pointer rounded-sm p-2 transition-colors"
          >
            {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            className="border-background-tertiary hover:bg-background-tertiary cursor-pointer rounded-sm border p-2 transition-all"
            onClick={() => setShowMobileNav(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showMobileNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeIn" }}
            className="bg-background-primary fixed inset-0 z-[100]"
          >
            <div className="relative flex h-full flex-col justify-end p-6 text-4xl md:text-5xl">
              <button
                onClick={() => setShowMobileNav(false)}
                className="absolute top-4 right-4 cursor-pointer p-2 text-sm"
              >
                Close
              </button>
              
              {/* Section Navigation */}
              <ul className="flex flex-col justify-end gap-4 pb-4 font-semibold">
                {sectionAnchors.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#${section.href}`}
                      onClick={() => setShowMobileNav(false)}
                      className="hover:text-foreground-secondary transition-colors block"
                    >
                      {section.name.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Contact Links */}
              <ul className="border-background-tertiary flex w-fit flex-col justify-end gap-4 border-t pt-4 font-semibold">
                {contactLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleContactClick(link)}
                      className="hover:text-foreground-secondary transition-colors text-left"
                    >
                      {link.name.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}