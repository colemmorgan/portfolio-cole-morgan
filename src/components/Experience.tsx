import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { experience } from "../content";
import type { Experience } from "../types/experience";

export default function Experience() {
  return (
    <section className="mt-12 pt-12 px-6 sm:px-8">
      <h3 className="text-foreground-tertiary text-lg font-semibold tracking-wide">
        EXPERIENCE
      </h3>
      <div className="hidden sm:grid text-foreground-tertiary border-background-tertiary mt-6 grid-cols-6 border-b pb-2 text-sm">
        <span className="col-span-2">Position</span>
        <span className="col-span-3">Organization</span>
        <span className="text-end">Year</span>
      </div>
      <ul>
        {experience.map((exp,i) => (
          <ExperienceItem exp={exp} key={i}/>
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
          className="group hover:bg-background-secondary grid cursor-pointer grid-cols-6 items-center py-3  text-sm font-medium transition-all"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="col-span-2 transition-all group-hover:pl-3">
            {exp.name}
          </div>
          <div className="col-span-3">{exp.organization}</div>
          <div className="col-span-1 flex justify-end transition-all group-hover:pr-3 text-foreground-secondary">
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
                    className="text-foreground-primary bg-background-tertiary rounded-full px-4 py-1 text-sm"
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
            <span className="text-foreground-secondary text-sm ">{exp.year}</span>
          </p>
          <p className="text-foreground-secondary flex items-center justify-between gap-3 pt-4 text-sm">
            <span className="whitespace-nowrap">{exp.organization}</span>
            <span className="flex justify-end text-[11px] text-foreground-tertiary">
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
              <div className="border-background-tertiary mt-3 border-t py-3">
                <p className="text-lg sm:text-2xl">{exp.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 pb-3">
                {exp.tags.map((tag) => (
                  <span
                    className="bg-background-tertiary rounded-full px-4 py-1 text-xs"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="bg-background-tertiary mt-4 h-px w-full" />
      </li>
    </>
  );
};
