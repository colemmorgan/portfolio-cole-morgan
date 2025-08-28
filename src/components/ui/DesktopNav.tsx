import React, { useEffect, useState } from "react";
import { useScrollProgressStore } from "../../stores/scrollProgressStore";
import { AnimatePresence, motion } from "motion/react";
import { contactLinks, sectionAnchors } from "../../NavContent";
import scrollToSection from "../../utils/scrollToSection";
import { ArrowDown, ArrowUp, ArrowUpRight } from "lucide-react";

export default function DesktopNav({ showSidebar }: { showSidebar: boolean }) {
  const scrollProgress = useScrollProgressStore();
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
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
          className="hidden overflow-hidden lg:block"
        >
          <nav className="bg-background-secondary border-background-tertiary hidden h-screen w-60 border-r p-2 lg:block">
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
                {contactLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    icon={link.icon}
                    name={link.name}
                    href={link.href}
                    type={link.type}
                  />
                ))}
              </ul>
            </div>
            <div className="mt-2 pt-3">
              <p className="text-foreground-tertiary pl-3 text-xs">Sections</p>
              <ul className="mt-2 grid gap-1 text-sm">
                {sectionAnchors.map((section, index) => (
                  <NavSectionAnchor
                    key={index}
                    icon={section.icon}
                    name={section.name}
                    href={section.href}
                    progress={scrollProgress[section.progressKey]}
                    onNavigate={() => scrollToSection(section.href)}
                  />
                ))}
              </ul>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type NavLinkProps = {
  icon: React.ReactNode;
  name: string;
  href: string;
  type: "navigation" | "download" | "mailto";
};

const NavLink: React.FC<NavLinkProps> = ({ icon, name, href, type }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const getHref = () => {
    switch (type) {
      case "mailto":
        return `mailto:${href}`;
      default:
        return href;
    }
  };

  const getProps = () => {
    switch (type) {
      case "download":
        return { download: href };
      case "navigation":
        return { target: "_blank", rel: "noopener noreferrer" };
      default:
        return {};
    }
  };

  return (
    <li>
      <a
        href={getHref()}
        {...getProps()}
        className="text-foreground-tertiary hover:bg-background-tertiary hover:text-foreground-secondary flex items-center gap-2 rounded-sm px-3 py-1.5 font-medium transition-colors"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-5 items-center overflow-hidden">
          <motion.div initial={{ y: 0 }} animate={{ y: isHovered ? -20 : 0 }}>
            <span className="grid h-5 items-center">{icon}</span>
            <span className="grid h-5 items-center">
              <ArrowUpRight size={15} />
            </span>
          </motion.div>
        </div>
        {name}
      </a>
    </li>
  );
};

type NavSectionAnchorProps = {
  icon: React.ReactNode;
  name: string;
  href: string;
  progress: number;
  onNavigate: () => void;
};

const NavSectionAnchor: React.FC<NavSectionAnchorProps> = ({
  icon,
  name,
  href,
  progress,
  onNavigate,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate();
  };

  return (
    <li>
      <a
        href={`#${href}`}
        onClick={handleClick}
        className="text-foreground-tertiary hover:bg-background-tertiary hover:text-foreground-secondary flex items-center gap-2 rounded-sm px-3 py-1.5 font-medium transition-colors"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-5 items-center overflow-hidden">
          <motion.div initial={{ y: 0 }} animate={{ y: isHovered ? -20 : 0 }}>
            <span className="grid h-5 items-center">{icon}</span>
            <span className="grid h-5 items-center">
              {progress > 0 ? <ArrowUp size={15} /> : <ArrowDown size={15} />}
            </span>
          </motion.div>
        </div>
        {name}
      </a>
    </li>
  );
};
