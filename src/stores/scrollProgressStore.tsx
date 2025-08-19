import { create } from 'zustand';

interface ScrollProgressState {
  heroProgress: number;
  experienceProgress: number;
  projectsProgress: number;
  awardsProgress: number;
  setHeroProgress: (progress: number) => void;
  setExperienceProgress: (progress: number) => void;
  setProjectsProgress: (progress: number) => void;
  setAwardsProgress: (progress: number) => void;
  getAllProgress: () => {
    hero: number;
    experience: number;
    projects: number;
    awards: number;
  };
}

export const useScrollProgressStore = create<ScrollProgressState>((set, get) => ({
  heroProgress: 0,
  experienceProgress: 0,
  projectsProgress: 0,
  awardsProgress: 0,
  
  setHeroProgress: (progress: number) => set({ heroProgress: progress }),
  setExperienceProgress: (progress: number) => set({ experienceProgress: progress }),
  setProjectsProgress: (progress: number) => set({ projectsProgress: progress }),
  setAwardsProgress: (progress: number) => set({ awardsProgress: progress }),
  
  getAllProgress: () => {
    const state = get();
    return {
      hero: state.heroProgress,
      experience: state.experienceProgress,
      projects: state.projectsProgress,
      awards: state.awardsProgress,
    };
  },
}));
