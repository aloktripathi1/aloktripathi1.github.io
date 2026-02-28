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
    title: "MediHub",
    description:
      "A hospital management web app for managing appointments, patient records, and doctor schedules. Built with Flask, Vue.js, SQLite, and Celery.",
      tags: ["Python", "Flask", "Vue.js", "Bootstrap", "SQLite", "JavaScript", "Celery", "Redis"],
    repoLink: "https://github.com/aloktripathi1/hospital-management-system",
  },
  {
    title: "Learnsy",
    description:
      "A distraction-free, YouTube-powered study platform designed for deep learning, habit-building, and knowledge retention.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Neon DB(PostgreSQL)"],
    sourceLink: "https://learnsy.vercel.app",
    repoLink: "https://github.com/aloktripathi1/Learnsy",
  },
  {
    title: "Deadline Intel",
    description:
      "A deadline-tracking application designed for IIT Madras BS students to help them manage and monitor course deadlines effectively.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    sourceLink: "https://deadline-intel.vercel.app",
    repoLink: "https://github.com/aloktripathi1/deadline-intel",
  },
  {
    title: "GradeGenie",
    description:
      "A precise grade calculator built by an IITM BS student for fellow students.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
    sourceLink: "https://gradegenie.vercel.app",
    repoLink: "https://github.com/aloktripathi1/gradegenie",
  },
  {
    title: "NoteTmp",
    description:
      "A tool for taking quick notes that auto-save in your browser. No sign-up, no distractions—just instant note-taking.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    sourceLink: "https://notetmp.vercel.app",
    repoLink: "https://github.com/aloktripathi1/NoteTmp",
  },
  {
    title: "LLM Viva Assistant",
    description:
      "An AI-powered assistant to help students prepare for viva examinations.",
      tags: ["FastAPI", "ChromaDB", "Python", "sentence-transformers", "Tkinter"],
    repoLink: "https://github.com/aloktripathi1/llm-viva-assistant",
  },
  {
    title: "ChatGPT Organizer",
    description:
      "A free and open-source Chrome extension to organize your ChatGPT chats into custom folders, similar to the 'Projects' feature available only in the paid version of ChatGPT.",
      tags: ["TypeScript", "JavaScript", "Chrome Extension", "HTML", "CSS"],
    repoLink: "https://github.com/aloktripathi1/chatgpt-organizer",
  },
  {
    title: "LaTeX2Obsidian",
    description:
      "A precision tool that converts messy ChatGPT-style LaTeX into clean, Obsidian-compatible MathJax syntax.",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    repoLink: "https://github.com/aloktripathi1/latex2obsidian",
  },
  {
    title: "ParkEase",
    description:
      "A multi-user 4-wheeler parking management system built with Python, Flask, Jinja, Bootstrap and SQLite.",
      tags: ["Flask", "Python", "SQLite", "Bootstrap"],
    repoLink: "https://github.com/aloktripathi1/vehicle-parking-app",
  },
];
