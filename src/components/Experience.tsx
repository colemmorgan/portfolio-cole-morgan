import SplitLinesSlideUp from "./motion/SlideUpOnView";

export default function Experience() {
  return (
    <section className="border-dark-200 grid grid-cols-12 gap-3 border-b py-16">
      <p className="text-dark-700 col-span-2 text-xl font-medium">02.</p>
      <div className="col-span-10">
        <h3 className="text-dark-700 border-dark-200 border-b pb-4 text-xl font-bold">
          EXPERIENCE
        </h3>
        <ul>
          <li className="border-dark-200 cursor-pointer border-b">
            <div className="text-dark-600 hover:text-dark-950 py-4 text-[40px] font-semibold transition-all">
              {" "}
              <SplitLinesSlideUp
                loaded={true}
                text="Fullstack Developer Intern - Satlantis"
                fontSize={40}
              />
            </div>
          </li>
          <li className="border-dark-200 cursor-pointer border-b">
            <div className="text-dark-600 hover:text-dark-950 py-4 text-[40px] font-semibold transition-all">
              <SplitLinesSlideUp
                loaded={true}
                text="Software Engineer - SPCB + Capital One"
                fontSize={40}
              />
            </div>
          </li>
          <li className="border-dark-200 cursor-pointer border-b">
            <div className="text-dark-600 hover:text-dark-950 py-4 text-[40px] font-semibold transition-all">
              <SplitLinesSlideUp
                loaded={true}
                text="CS Tutor - University of Florida"
                fontSize={40}
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
