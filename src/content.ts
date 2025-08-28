import type { Award } from "./types/award";
import type { Experience } from "./types/experience";
import type { Project } from "./types/projects";

export const projects: Project[] = [
  {
    src: "spcb",
    title: "Custom Content Management System + Club Website",
    tech: ["Next.js", "TypeScript", "Figma", "Firebase", "Tailwind"],
    desc: " Software and website for the Society of PC Building that enables admins to update website content without code.",
    liveLink: "https://www.spcbatuf.org/",
    githubLink: "https://github.com/PCBuilding/SPCBWebsite",
  },
  {
    src: "fd",
    title: "Professional Coaching Site",
    tech: ["Next.js", "TypeScript", "Figma", "Tailwind"],
    desc: "Freelance design/development project I created for a client to tell a story about his career and create a personal brand.",
    liveLink: "https://fionn.pro/",
  },
  {
    src: "prometheus",
    title: "AI Wildfire Alert System",
    tech: ["React", "TypeScript", "Figma", "Python", "FastAPI"],
    desc: "Monitor live national park cameras or upload your own cameras and recieve instant call alerts if fire is detected.",
    githubLink: "https://github.com/kgand/prometheus",
  },
  {
    src: "codecode",
    title: "Coding Question Platform",
    tech: ["React", "Recoil", "Docker", "Firebase", "Tailwind"],
    desc: "A coding question platform with real-time grading and tracking through Firebase and containerized code execution.",
    liveLink: "https://code-code-theta.vercel.app/",
    githubLink: "https://github.com/colemmorgan/CodeCode",
  },
  {
    src: "dsc",
    title: "Google DSC Landing Page",
    tech: ["React", "TypeScript", "Figma", "Tailwind"],
    desc: "Developed and designed a modern landing page for a student organization with micro-interactions using React & Framer Motion.",
    liveLink: "https://ufdsc.org/",
    githubLink: "https://github.com/colemmorgan/ufdsc",
  },
];


export const experience: Experience[] = [
  {
    name: "Software Engineer Intern",
    organization: "Satlantis US",
    year: "2025",
    desc: `At Satlantis I build tools to make satellite spectral imagery more accessible and performant, including a high-performance imagery viewer using React and WebGL. I also develop full-stack solutions with a FastAPI backend for efficient imagery streaming and use Figma to prototype client-facing applications.
    `,
    tags: ["Frontend", "Backend", "UI/UX", "React", "FastAPI"],
  },

  {
    name: "Peer Tutor, CS Department",
    organization: "University of Florida",
    year: "2025",
    desc: `As a Peer Tutor for the CISE department at the University of Florida, I provided one-on-one and group support in discrete mathematics, data structures, programming fundamentals, and software engineering. I taught 
    practical skills such as unit testing and debugging while collaborating with faculty and refining instructional materials based on student feedback.
            `,
    tags: ["C++", "Python", "Unit Testing" ],
  },
  {
    name: "Software Engineer",
    organization: "CapTech University Partnership Program",
    year: "2024",
    desc: `Through the CapTech Partnership Program, I worked as a Software Engineer developing a Next.js, 
    React, and TypeScript website with Firebase integration and a custom admin panel for the Society of PC Building. In this Agile environment, I collaborated with
     designers, received mentorship from senior engineers, and presented deliverables to CapTech leadership for a published feature story.
    `,
    tags: ["Frontend", "Next.js", "Firebase"],
  },
  {
    name: "Freelance Dev + Designer",
    organization: "Freelance",
    year: "2024, 2025",
    desc: `Worked with clients such as professional soccer coaches and university organizations to deliver custom websites
    tailored to their needs.  Conducted regular meetings and calls with clients to ensure alignment on project goals, design aesthetics, and
    functionality.
    `,
    tags: ["Frontend", "Freelance", "Next.js", "Figma"],
  },
];


export const awards: Award[] = [
  {
    desc: `SwamphacksX "Best Use of Auth0"`,
    year: "2025",
    href: "https://devpost.com/software/prometheus-rh7oxz",
  },
  {
    desc: "MediHacks 2024 Hackathon Winner",
    year: "2024",
    href: "https://devpost.com/software/fulfillment",
  },
  {
    desc: "Nurturing Gator Unity Hackathon Winner",
    year: "2024",
    href: "https://devpost.com/software/access-for-all-ymhp6n",
  },
  {
    desc: "KatyYouthHacks Hackathon Winner",
    year: "2024",
    href: "https://devpost.com/software/chroma-qmc9ti",
  },
];


