import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const useAboutContent = () => {
  return {
    data: PORTFOLIO_DATA.about,
    isLoading: false,
    error: null,
  };
};

export const useExperiences = () => {
  return {
    data: PORTFOLIO_DATA.experiences,
    isLoading: false,
    error: null,
  };
};

export const useProjects = () => {
  return {
    data: PORTFOLIO_DATA.projects,
    isLoading: false,
    error: null,
  };
};

export const useSkills = () => {
  return {
    data: PORTFOLIO_DATA.skills,
    isLoading: false,
    error: null,
  };
};

export const useEducation = () => {
  return {
    data: PORTFOLIO_DATA.education,
    isLoading: false,
    error: null,
  };
};

export const useSocialLinks = () => {
  return {
    data: PORTFOLIO_DATA.social_links,
    isLoading: false,
    error: null,
  };
};
