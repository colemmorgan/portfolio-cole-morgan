"use client";
import { motion, type Variants } from "motion/react";

export default function HeroPhotos() {
  const photos: { src: string; rotate: number }[] = [
    { src: "/hero-1.png", rotate: -10 },
    { src: "/hero-2.png", rotate: 10 },
    { src: "/hero-3.png", rotate: 5 },
    { src: "/hero-4.png", rotate: -5 },
    { src: "/hero-5.png", rotate: 3 },
  ];

  // parent container handles stagger
  const container: Variants = {
    rest: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1, // reverse order when going back
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1, // forward order on hover
      },
    },
  };

  // each photo variant
  const photo = (rotate: number, i: number): Variants => ({
    rest: {
      width: 64,
      height: 64,
      rotate,
      marginLeft: i === 0 ? 0 : -32,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
    hover: {
      width: 96,
      height: 96,
      rotate: 0,
      marginLeft: i === 0 ? 0 : 8,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  });

  return (
    <motion.div
      className="mt-8 flex h-24"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={container}
    >
      {photos.map((p, i) => (
        <motion.div
          key={i}
          className="bg-background-tertiary overflow-hidden rounded-lg shadow-xl"
          variants={photo(p.rotate, i)}
        >
          <motion.img
            src={p.src}
            alt={`hero-${i + 1}`}
            className="object-cover"
            variants={{
              rest: { width: 64, height: 64 },
              hover: { width: 96, height: 96 },
            }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
