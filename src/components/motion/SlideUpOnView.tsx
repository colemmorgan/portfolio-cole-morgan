import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  text: string;
  loaded: boolean;
  className?: string;
  fontSize: number;
};

type WordPosition = {
  word: string;
  top: number;
  element: HTMLSpanElement;
};

export default function SplitLinesSlideUp({
  fontSize,
  text,
  loaded,
  className,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [lines, setLines] = useState<WordPosition[][]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const wordSpans = Array.from(
      containerRef.current.querySelectorAll("span[data-word]"),
    ) as HTMLSpanElement[];

    const wordData: WordPosition[] = wordSpans.map((el) => ({
      word: el.dataset.word || "",
      top: el.offsetTop,
      element: el,
    }));

    // Group words by top offset (visual lines)
    const grouped: WordPosition[][] = [];
    let currentLine: WordPosition[] = [];
    let lastTop: number | null = null;

    for (const word of wordData) {
      if (lastTop === null || Math.abs(word.top - lastTop) < 2) {
        currentLine.push(word);
        lastTop = word.top;
      } else {
        grouped.push(currentLine);
        currentLine = [word];
        lastTop = word.top;
      }
    }
    if (currentLine.length) grouped.push(currentLine);
    setLines(grouped);
  }, [text]);

  const shouldAnimate = loaded && isInView;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {lines.length === 0 ? (
        <div className="invisible flex flex-wrap overflow-hidden">
          {text.split(" ").map((word, i) => (
            <span
              key={i}
              data-word={word}
              className="inline-block whitespace-nowrap"
              style={{marginRight: fontSize / 4}}
            >
              {word}
            </span>
          ))}
        </div>
      ) : (
        // After measurement: animate per line
        <div className="flex flex-col overflow-hidden">
          {lines.map((line, i) => (
            <div className="overflow-hidden" key={i} style={{ maxHeight: fontSize * 1.5 }}>
              <motion.div
                initial={{ y: 64 }}
                animate={shouldAnimate ? { y: 0 } : { y: 64 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: i * 0.1 + 0.05,
                }}
                className=""
              >
                {line.map((word, j) => (
                  <span key={j} className="inline-block" style={{marginRight: fontSize / 4}}>
                    {word.word}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
