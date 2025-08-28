import { ArrowUpRight } from "lucide-react";
import useTheme from "../hooks/useTheme";
import { projects } from "../content";
import type { Project } from "../types/projects";
import CTAButton from "./buttons/CTAButton";


export default function Projects() {
  return (
    <div className="mx-auto mt-24 pt-12 px-6 sm:px-8" id="work">
      <h3 className="text-foreground-tertiary text-lg font-medium tracking-wide">
        WORK
      </h3>
      <ul className="mt-8 grid gap-16">
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
      <p className="pb-3 text-lg text-balance sm:text-xl font-medium">{project.title}</p>
      <figure>
        <img
          src={`/work-thumbnails/${project.src}-${theme}.webp`}
          alt=""
          className="border-background-tertiary w-full rounded-md border"
        />
      </figure>
      <div className="mt-4">
        <p className="text-foreground-secondary">{project.desc}</p>
        <div className="text-foreground-tertiary col-span-3 mt-2 text-sm">
          Tech: {project.tech.map((word,ind) => {
            if(ind === project.tech.length - 1) {
              return `${word}`
            }
            return `${word}, `
          })}
        </div>
        <div className="mt-4 flex gap-2 items-center">
          {project.liveLink && (
            <CTAButton small={true} link={project.liveLink}>
              <span className="flex items-center gap-1">Live Demo <ArrowUpRight size={18}/></span>
            </CTAButton>
          )}
           {project.githubLink && (
            <a
              href={project.githubLink}
              className="text-foreground-primary text-sm rounded-sm px-4 py-[9px] border font-medium border-background-tertiary transition-all hover:bg-background-secondary"
              target="_blank"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </li>
  );
};
