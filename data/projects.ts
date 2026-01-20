export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Optional link to the live site */
  sourceLink?: string;
  /** Optional link to the GitHub repo */
  repoLink?: string;
};

export const projects: Project[] = [
  {
    title: "GradeGenie",
    description:
      "A precise grade calculator built by an IITM BS student for fellow students.",
    tags: ["Web App", "Grade Calculator", "Student Tools"],
    sourceLink: "https://gradegenie.vercel.app",
    repoLink: "https://github.com/aloktripathi1/gradegenie",
  },
  {
    title: "Learnsy",
    description:
      "A distraction-free, YouTube-powered study platform designed for deep learning, habit-building, and knowledge retention.",
    tags: ["Next.js", "YouTube API", "Education", "Study Platform"],
    sourceLink: "https://learnsy.vercel.app",
    repoLink: "https://github.com/aloktripathi1/Learnsy",
  },
  {
    title: "Hospital Management System",
    description:
      "A hospital management web app for managing appointments, patient records, and doctor schedules. Built with Flask, Vue.js, SQLite, and Celery.",
    tags: ["Flask", "Vue.js", "SQLite", "Celery", "IIT Madras Project"],
    repoLink: "https://github.com/aloktripathi1/hospital-management-system",
  },
  {
    title: "LLM Viva Assistant",
    description:
      "An AI-powered assistant to help students prepare for viva examinations.",
    tags: ["LLM", "AI", "Education"],
    repoLink: "https://github.com/aloktripathi1/llm-viva-assistant",
  },
  {
    title: "ChatGPT Organizer",
    description:
      "A free and open-source Chrome extension to organize your ChatGPT chats into custom folders, similar to the 'Projects' feature available only in the paid version of ChatGPT.",
    tags: ["Chrome Extension", "JavaScript", "ChatGPT"],
    repoLink: "https://github.com/aloktripathi1/chatgpt-organizer",
  },
  {
    title: "LaTeX2Obsidian",
    description:
      "A precision tool that converts messy ChatGPT-style LaTeX into clean, Obsidian-compatible MathJax syntax.",
    tags: ["Python", "LaTeX", "Obsidian", "Productivity"],
    repoLink: "https://github.com/aloktripathi1/latex2obsidian",
  },
  {
    title: "Vehicle Parking App",
    description:
      "A multi-user 4-wheeler parking management system built with Flask and SQLite.",
    tags: ["Flask", "SQLite", "Web App"],
    repoLink: "https://github.com/aloktripathi1/vehicle-parking-app",
  },
];
