import useTheme from "../hooks/useTheme";

type Project = {
  src: string;
  title: string;
  desc: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
};

const projects: Project[] = [
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
    tech: ["Nextjs", "TypeScript", "Figma", "Tailwind"],
    desc: "Freelance design/development project I created for a client to tell a story about his career and create a personal brand.",
    liveLink: "https://fionn.pro/",
  },
  // {
  //   src: "/projects/prometheus.webp",
  //   title: "AI Wildfire Alert System",
  //   tech: ["React", "TypeScript", "Figma", "Python", "FastAPI"],
  //   desc: "Monitor live national park cameras or upload your own cameras and recieve instant call alerts if fire is detected.",
  //   githubLink: "https://github.com/kgand/prometheus",
  // },
  // {
  //   src: "/projects/cc.webp",
  //   title: "Coding Question Platform",
  //   tech: ["React", "Recoil", "Docker", "Firebase", "Tailwind"],
  //   desc: "A coding question platform with real-time grading and tracking through Firebase and containerized code execution.",
  //   liveLink: "https://code-code-theta.vercel.app/",
  //   githubLink: "https://github.com/colemmorgan/CodeCode",
  // },
  // {
  //   src: "/projects/dsc2.webp",
  //   title: "Google DSC Landing Page",
  //   tech: ["React", "TypeScript", "Figma", "Tailwind"],
  //   desc: "Developed and designed a modern landing page for a student organization with micro-interactions using React & Framer Motion.",
  //   liveLink: "https://ufdsc.org/",
  //   githubLink: "https://github.com/colemmorgan/ufdsc",
  // },

  // {
  //   src: "/projects/fufillment.webp",
  //   title: "Medical Microcredentialing App",
  //   tech: ["React", "Recoil", "TypeScript", "Firebase"],
  //   desc: "A full-stack web app that rewards users for expanding their medical knowledge through live trivia, courses, and notecards.",
  //   liveLink: "https://fufillment-n5cn.vercel.app/",
  //   githubLink: "https://github.com/colemmorgan/Medihacks2024",
  // },
];

export default function Projects() {
  return (
    <div className="mx-auto mt-24 pt-12" id="work">
      <h3 className="text-foreground-tertiary text-lg font-medium tracking-wide">
        WORK
      </h3>
      <ul className="grid gap-16 mt-8">
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </ul>
    </div>
  );
}

type ProjectProps = {
  project: Project;
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { theme } = useTheme();
  return (
    <li className="">
      <p className="pb-3 text-xl font-medium">{project.title}</p>
      <figure>
        <img
          src={`/work-thumbnails/${project.src}-${theme}.webp`}
          alt=""
          className="border-background-tertiary w-full rounded-md border"
        />
      </figure>
      <div className="mt-4 grid grid-cols-6">
        <p className="text-foreground-secondary col-span-4">{project.desc}</p>
        <div className="col-span-2"></div>
        <div className="text-foreground-secondary col-span-3 mt-2 text-sm">
          Tech: Next.js, TypeScript, Figma, Firebase, Tailwind
        </div>
      </div>
    </li>
  );
};
