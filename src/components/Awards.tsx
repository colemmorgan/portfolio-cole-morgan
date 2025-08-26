
type award = {
  desc: string;
  year: string;
  href: string;
};

const awards: award[] = [
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

export default function Awards() {
  return (
    <div
      className="mt-24 pt-12"
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
  award: award;
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