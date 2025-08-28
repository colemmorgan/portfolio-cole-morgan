import { useEffect, useRef, useState } from 'react';
import { useScroll } from 'framer-motion';
import { useScrollProgressStore } from '../stores/scrollProgressStore';

interface UseScrollProgressReturn {
  heroRef: React.RefObject<HTMLDivElement | null>;
  experienceRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  awardsRef: React.RefObject<HTMLDivElement | null>;
}

export const useHomeScrollProgress = (): UseScrollProgressReturn => {
  // Create refs for each element we want to track
  const heroRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  
  // State to hold the scroll container reference
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null);
  
  // Zustand store actions
  const {
    setHeroProgress,
    setExperienceProgress,
    setProjectsProgress,
    setAwardsProgress,
  } = useScrollProgressStore();

  // Find the scroll container after component mounts
  useEffect(() => {
    const container = document.querySelector('.scroll-container') as HTMLElement;
    if (container) {
      setScrollContainer(container);
    } 
  }, []);

  // Track scroll progress for each element with the scroll container
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    container: scrollContainer ? { current: scrollContainer } : undefined,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: experienceProgress } = useScroll({
    target: experienceRef,
    container: scrollContainer ? { current: scrollContainer } : undefined,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: projectsProgress } = useScroll({
    target: projectsRef,
    container: scrollContainer ? { current: scrollContainer } : undefined,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: awardsProgress } = useScroll({
    target: awardsRef,
    container: scrollContainer ? { current: scrollContainer } : undefined,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    if (!scrollContainer) return;

    const unsubscribeHero = heroProgress.on("change", (progress) => {
      setHeroProgress(progress);
    });

    const unsubscribeExperience = experienceProgress.on("change", (progress) => {
      setExperienceProgress(progress);
    });

    const unsubscribeProjects = projectsProgress.on("change", (progress) => {
      setProjectsProgress(progress);
    });

    const unsubscribeawards = awardsProgress.on("change", (progress) => {
      setAwardsProgress(progress);
    });

    return () => {
      unsubscribeHero();
      unsubscribeExperience();
      unsubscribeProjects();
      unsubscribeawards();
    };
  }, [
    scrollContainer,
    heroProgress,
    experienceProgress,
    projectsProgress,
    awardsProgress,
    setHeroProgress,
    setExperienceProgress,
    setProjectsProgress,
    setAwardsProgress,
  ]);

  return {
    heroRef,
    experienceRef,
    projectsRef,
    awardsRef,
  };
};