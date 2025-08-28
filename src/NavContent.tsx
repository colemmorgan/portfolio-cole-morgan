import { AppWindow, Award, Briefcase, File, Home, Mail } from "lucide-react";
import { RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";


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
  progressKey:
    | "heroProgress"
    | "experienceProgress"
    | "projectsProgress"
    | "awardsProgress";
};

export const contactLinks: ContactLink[] = [
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

export const sectionAnchors: SectionAnchor[] = [
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