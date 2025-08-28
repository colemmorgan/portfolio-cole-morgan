"use client";
import { motion, type Variants, AnimatePresence } from "motion/react";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function HeroPhotos() {
  const [isAnyImageHovered, setIsAnyImageHovered] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const photos: { src: string; rotate: number; desc: string }[] = [
    { src: "/hero-1.png", rotate: -10, desc: "My Cat!" },
    { src: "/hero-2.png", rotate: 10, desc: "Gators 2025 Bball Champs" },
    { src: "/hero-3.png", rotate: 5, desc: "The Swamp" },
    { src: "/hero-4.png", rotate: -5, desc: "Florida Sunsets" },
    { src: "/hero-5.png", rotate: 3, desc: "Barcelona" },
  ];

  const container: Variants = {
    rest: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const photo = (rotate: number, i: number): Variants => ({
    rest: {
      width: 64,
      height: 64,
      rotate,
      marginLeft: i === 0 ? 0 : -32,
      transition: { duration: 0.225, ease: "easeInOut" },
    },
    hover: {
      width: 96,
      height: 96,
      rotate: 0,
      marginLeft: i === 0 ? 0 : 8,
      transition: { duration: 0.225, ease: "easeInOut" },
    },
  });

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? photos.length - 1 : selectedImageIndex - 1,
      );
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === photos.length - 1 ? 0 : selectedImageIndex + 1,
      );
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedImageIndex(null);
    }
  };

  return (
    <>
      <motion.div
        className="mt-10 flex h-24 w-fit"
        initial="rest"
        animate={isAnyImageHovered ? "hover" : "rest"}
        variants={container}
        onHoverStart={() => setIsAnyImageHovered(true)}
        onHoverEnd={() => setIsAnyImageHovered(false)}
      >
        {photos.map((p, i) => (
          <motion.div
            key={i}
            className="bg-background-tertiary cursor-pointer overflow-hidden rounded-lg shadow-xl"
            variants={photo(p.rotate, i)}
            onClick={() => setSelectedImageIndex(i)}
          >
            <motion.img
              src={`/hero-thumbnails${p.src}`}
              alt={`hero-${i + 1}`}
              className="object-cover"
              variants={{
                rest: { width: 64, height: 64 },
                hover: { width: 96, height: 96 },
              }}
              transition={{ duration: 0.225, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </motion.div>

      {selectedImageIndex !== null &&
        createPortal(
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-[rgba(0,0,0,0.75)] backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleModalClick}
              transition={{ duration: 0.225 }}
            >
              <div className="relative flex flex-col items-center gap-4">
                {/* Image */}
                <motion.img
                  key={selectedImageIndex}
                  src={`/hero-photos-full${photos[selectedImageIndex].src}`}
                  alt={`hero-${selectedImageIndex + 1}`}
                  className="h-96 rounded-sm object-contain"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />

                {/* Description */}
                <motion.p
                  key={`${selectedImageIndex}-text`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-white text-sm font-medium text-center bg-[rgba(40,40,40,0.55)] py-3 px-6 rounded-sm w-fit"
                >
                  {photos[selectedImageIndex].desc}
                </motion.p>

                {/* Navigation Arrows */}
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={handlePrevious}
                    className="text-white hover:text-gray-300 cursor-pointer"
                    aria-label="Previous image"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="15,18 9,12 15,6"></polyline>
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="text-white hover:text-gray-300 cursor-pointer"
                    aria-label="Next image"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Close button stays top-right */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-4 right-4 cursor-pointer text-white transition-colors hover:text-gray-300"
                aria-label="Close modal"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
