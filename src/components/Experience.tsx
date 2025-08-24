import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Experience = {
  name: string;
  organization: string;
  year: string;
  desc: string;
  tags: string[];
  href: string;
};

const experience = [
  {
    name: "Software Engineer Intern",
    organization: "Satlantis US",
    year: "2025",
    desc: `At Satlantis I build tools to make satellite spectral imagery more accessible and performant, including a high-performance imagery viewer using React and WebGL. I also develop full-stack solutions with a FastAPI backend for efficient imagery streaming and use Figma to prototype client-facing applications.
    `,
    tags: ["Frontend", "Freelance", "Next.js", "Design"],
    href: "spcb",
  },

  {
    name: "Peer Tutor, CS Department",
    organization: "University of Florida",
    year: "2025",
    desc: `As a Peer Tutor for the CISE department at the University of Florida, I provided one-on-one and group support in discrete mathematics, data structures, programming fundamentals, and software engineering. I taught 
    practical skills such as unit testing and debugging while collaborating with faculty and refining instructional materials based on student feedback.
            `,
    tags: ["Frontend", "Individual", "React", "Design"],
    href: "dsc",
  },
  {
    name: "Software Engineer",
    organization: "CapTech University Partnership Program",
    year: "2024",
    desc: `Through the CapTech Partnership Program, I worked as a Software Engineer developing a Next.js, 
    React, and TypeScript website with Firebase integration and a custom admin panel for the Society of PC Building. In this Agile environment, I collaborated with
     designers, received mentorship from senior engineers, and presented deliverables to CapTech leadership for a published feature story.
    `,
    tags: ["Fullstack", "Team", "Next.js", "Firebase"],
    href: "spcb",
  },
  {
    name: "Freelance Dev + Designer",
    organization: "Freelance",
    year: "2024, 2025",
    desc: `Worked with clients such as professional soccer coaches and university organizations to deliver custom websites
    tailored to their needs.  Conducted regular meetings and calls with clients to ensure alignment on project goals, design aesthetics, and
    functionality.
    `,
    tags: ["Frontend", "Freelance", "Next.js", "Design"],
    href: "spcb",
  },
];

export default function Experience() {
  return (
    <section className="mt-12 pt-12">
      <h3 className="text-foreground-tertiary text-lg font-semibold tracking-wide">
        EXPERIENCE
      </h3>
      <div className="text-foreground-tertiary border-background-tertiary mt-6 grid grid-cols-6 border-b pb-2 text-sm">
        <span className="col-span-2">Position</span>
        <span className="col-span-3">Organization</span>
        <span className="text-end">Year</span>
      </div>
      <ul>
        {experience.map((exp) => (
          <ExperienceItem exp={exp} />
        ))}
      </ul>
    </section>
  );
}

type ExperienceItemProps = {
  exp: Experience;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Desktop View */}
      <li className="hidden sm:block">
        <div
          className="group hover:bg-background-secondary grid cursor-pointer grid-cols-6 items-center py-3 font-medium transition-all"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="col-span-2 transition-all group-hover:pl-3">
            {exp.name}
          </div>
          <div className="col-span-3">{exp.organization}</div>
          <div className="col-span-1 flex justify-end transition-all group-hover:pr-3">
            {exp.year}
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-3 sm:pt-6">
                <p className="text-lg sm:text-2xl">{exp.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 pb-6">
                {exp.tags.map((tag) => (
                  <span
                    className="text-foreground-secondary bg-background-tertiary rounded-full px-4 py-1 text-sm"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="bg-background-tertiary h-px w-full" />
      </li>

      {/* Mobile View */}
      <li className="mt-8 sm:hidden">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer"
        >
          <p className="flex items-end justify-between">
            <span>{exp.name}</span>
            <span className="text-dull text-sm">{exp.year}</span>
          </p>
          <p className="text-dull flex items-center justify-between gap-3 pt-4 text-sm">
            <span className="whitespace-nowrap">{exp.organization}</span>
            <span className="flex justify-end text-[11px]">
              Click to {isOpen ? "collapse" : "expand"}.
            </span>
          </p>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border-background-100 mt-3 border-t py-3">
                <p className="text-lg sm:text-2xl">{exp.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 pb-3">
                {exp.tags.map((tag) => (
                  <span
                    className="bg-background-200 rounded-full px-4 py-1 text-xs text-black"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="bg-background-100 mt-4 h-px w-full" />
      </li>
    </>
  );
};
