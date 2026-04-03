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
    title: "Deadline Intel",
    description:
      "A deadline-tracking application designed for IIT Madras BS students to help them manage and monitor course deadlines effectively.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "IITM BS"],
    sourceLink: "https://deadline-intel.vercel.app",
    repoLink: "https://github.com/aloktripathi1/deadline-intel",
  },
  {
    title: "TDS Project 1",
    description:
      "Project 1 work for Tools in Data Science (Jan 2026).",
    tags: ["Python", "Tools in Data Science", "IITM BS"],
    repoLink: "https://github.com/aloktripathi1/tds-project-1",
  },
  {
    title: "Messy Mashup Deployment",
    description:
      "Music genre classifier using a 3-model ensemble (EfficientNet, AST, ResNet-50) deployed on Hugging Face.",
    tags: ["Python", "Machine Learning", "Hugging Face"],
    sourceLink: "https://huggingface.co/spaces/aloktripathi/music-genre-classifier",
    repoLink: "https://github.com/aloktripathi1/messy-mashup-deployment",
  },
  {
    title: "TDS Jan 2026",
    description:
      "Coursework and projects from the Tools in Data Science course, focused on hands-on data engineering and reproducible workflows.",
    tags: ["Python", "Data Engineering", "Tools in Data Science"],
    repoLink: "https://github.com/aloktripathi1/tds-jan-2026",
  },
  {
    title: "TDS Course Analysis",
    description:
      "An analysis of the TDS course over past terms across graded assignments and ROE.",
    tags: ["JavaScript", "Data Analysis", "Tools in Data Science"],
    sourceLink: "https://tds-course-analysis.vercel.app",
    repoLink: "https://github.com/aloktripathi1/tds-course-analysis",
  },
  {
    title: "Thoracic Pathology Detection Xray",
    description:
      "Automated chest X-ray classification into 20 thoracic pathologies using ConvNeXt-Base with cost-sensitive learning.",
    tags: ["Python", "Deep Learning", "Computer Vision", "Medical AI"],
    repoLink: "https://github.com/aloktripathi1/thoracic-pathology-detection-xray",
  },
  {
    title: "GradeGenie",
    description:
      "A precise grade calculator built by an IITM BS student for fellow students.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
    sourceLink: "https://gradegenie.vercel.app",
    repoLink: "https://github.com/aloktripathi1/gradegenie",
  },
  {
    title: "NoteTmp",
    description:
      "A minimalist tool for taking quick notes that auto-save in browser localStorage.",
    tags: ["TypeScript", "React", "Tailwind CSS"],
    sourceLink: "https://notetmp.vercel.app",
    repoLink: "https://github.com/aloktripathi1/NoteTmp",
  },
  {
    title: "MediHub",
    description:
      "A hospital management web app for managing appointments, patient records, and doctor schedules.",
    tags: ["Python", "Flask", "Vue.js", "SQLite", "Celery", "Redis"],
    repoLink: "https://github.com/aloktripathi1/Medihub",
  },
  {
    title: "PropManager",
    description:
      "A property maintenance management app for tenants, managers, and technicians.",
    tags: ["TypeScript", "React", "Supabase", "Tailwind CSS"],
    sourceLink: "https://the-propmanager.vercel.app",
    repoLink: "https://github.com/aloktripathi1/PropManager",
  },
  {
    title: "Learnsy",
    description:
      "A distraction-free, YouTube-powered study platform designed for deep learning and knowledge retention.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
    sourceLink: "https://learnsy.vercel.app",
    repoLink: "https://github.com/aloktripathi1/Learnsy",
  },
];
