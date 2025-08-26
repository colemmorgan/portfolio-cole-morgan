import {
  AppWindow,
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Award,
  Briefcase,
  File,
  Home,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";
import { motion, AnimatePresence } from "motion/react";
import { useScrollProgressStore } from "../stores/scrollProgressStore";

type LinkType = "navigation" | "download" | "mailto";

type ContactLink = {
  icon: React.ReactNode;
  name: string;
  href: string;
  type: LinkType;
};

type SectionAnchor = {
  icon: React.ReactNode;
  name: string;
  href: string;
  progressKey: 'heroProgress' | 'experienceProgress' | 'projectsProgress' | 'awardsProgress';
};

const contactLinks: ContactLink[] = [
  {
    icon: <Mail size={15} />,
    name: "Email",
    href: "colemmorgann@gmail.com",
    type: "mailto",
  },
  {
    icon: <RiLinkedinBoxLine className="-mx-px h-[18px] w-[18px]" />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/cole-morgan-/",
    type: "navigation",
  },
  {
    icon: <RiGithubLine className="-mx-px h-[18px] w-[18px]" />,
    name: "GitHub",
    href: "https://github.com/colemmorgan",
    type: "navigation",
  },
  {
    icon: <File size={15} />,
    name: "Resume",
    href: "ColeMorgan_Resume.pdf",
    type: "download",
  },
];

const sectionAnchors: SectionAnchor[] = [
  {
    icon: <Home size={15} />,
    name: "Home",
    href: "hero",
    progressKey: "heroProgress",
  },
  {
    icon: <Briefcase size={15} />,
    name: "Experience",
    href: "experience",
    progressKey: "experienceProgress",
  },
  {
    icon: <AppWindow size={15} />,
    name: "Work/Projects",
    href: "projects",
    progressKey: "projectsProgress",
  },
  {
    icon: <Award size={15} />,
    name: "Awards",
    href: "awards",
    progressKey: "awardsProgress",
  },
];

// Custom scroll function for the scroll container
const scrollToSection = (sectionId: string) => {
  const scrollContainer = document.querySelector('.scroll-container');
  const targetSection = document.getElementById(sectionId);
  
  if (!scrollContainer || !targetSection) {
    console.warn(`Could not find scroll container or section: ${sectionId}`);
    return;
  }

  // Get the position of the target section relative to the scroll container
  const containerRect = scrollContainer.getBoundingClientRect();
  const sectionRect = targetSection.getBoundingClientRect();
  
  // Calculate the scroll position needed, accounting for the 56px sticky ActionBar
  const actionBarHeight = 56;
  const scrollTop = scrollContainer.scrollTop + (sectionRect.top - containerRect.top) - actionBarHeight;

  // Smooth scroll to the section
  scrollContainer.scrollTo({
    top: scrollTop,
    behavior: 'smooth'
  });
};

type NavProps = {
  showSidebar: boolean;
  hasLoaded: boolean;
};

export function Nav({ showSidebar, hasLoaded }: NavProps) {
  const scrollProgress = useScrollProgressStore();

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
          className="overflow-hidden"
        >
          <nav className="hidden lg:block bg-background-secondary border-background-tertiary h-screen w-60 border-r p-2">
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
  type: LinkType;
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