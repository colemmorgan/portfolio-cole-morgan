import { awards } from "../content";
import type { Award } from "../types/award";

export default function Awards() {
  return (
    <div
      className="mt-24 pt-12 px-6 sm:px-8"
      id="awards"
    >
      <p className="text-foreground-tertiary tracking-wide font-medium text-lg">AWARDS</p>
      <div className="grid grid-cols-6 mt-6 pb-3 border-b border-background-tertiary">
        <p className="text-sm text-foreground-tertiary col-span-5">Description</p>
        <p className="text-sm text-foreground-tertiary col-span-1 flex justify-end">Year</p>
      </div>
      {awards.map((award) => (
        <Award key={award.desc} award={award} />
      ))}
    </div>
  );
}

type AwardProps = {
  award: Award;
};

const Award: React.FC<AwardProps> = ({ award }) => {

  return (
    <a
      href={award.href}
      target="_blank"
      className="grid grid-cols-6 py-3 border-b border-background-tertiary text-sm relative  hover:bg-background-secondary transition-all hover:px-3"
    >
      <p className="text-xs sm:text-sm col-span-5">{award.desc}</p>
      <p className="text-xs sm:text-sm col-span-1 flex justify-end">
        {award.year}
      </p>
    </a>
  );
};