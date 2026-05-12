import {
  Brain,
  ChartNoAxesCombined,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Network,
  Server,
  Sparkles,
  Terminal,
  Wrench
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface Project {
  title: string;
  category: "Frontend" | "Backend" | "Full Stack" | "Open Source";
  description: string;
  longDescription: string;
  image: string;
  blurDataUrl: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const profile = {
  name: "Shubham Gupta",
  role: "AI/ML Engineer",
  location: "Noida, India",
  email: "in.sg5447@gmail.com",
  phone: "+91 73791 51898",
  resumeUrl: "/resume/Shubham_Gupta_Resume.pdf",
  avatar: "/images/avatar-shubham.jpg",
  statement:
    "Final-year Computer Science student specializing in Data Science, building AI systems that connect machine learning, scalable backends, and interfaces people can actually use."
};

export const roles = ["AI/ML Developer", "LLM Builder", "Data Problem Solver", "Product Engineer"];

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / ML",
    icon: Brain,
    items: ["PyTorch", "TensorFlow", "Keras", "Transformers", "Explainable AI"]
  },
  {
    title: "LLM Systems",
    icon: Network,
    items: ["LangChain", "RAG Pipelines", "Hybrid Search", "FAISS", "Prompt Engineering"]
  },
  {
    title: "Backend & Data",
    icon: Server,
    items: ["FastAPI", "REST APIs", "MySQL", "MongoDB", "Pandas", "NumPy"]
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["GitHub", "Power BI", "Excel", "Docker", "Google Colab", "Streamlit"]
  }
];

export const marqueeSkills = [
  "Python",
  "PyTorch",
  "LangChain",
  "FAISS",
  "TensorFlow",
  "FastAPI",
  "Streamlit",
  "Power BI",
  "MongoDB",
  "MySQL",
  "Docker",
  "Plotly"
];

const shimmer =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQwMCcgaGVpZ2h0PSc5MDAnIHZpZXdCb3g9JzAgMCAxNDAwIDkwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTQwMCcgaGVpZ2h0PSc5MDAnIGZpbGw9JyMwMDAwMDAnLz48cmVjdCB4PScwJyB5PScwJyB3aWR0aD0nMTQwMCcgaGVpZ2h0PSc5MDAnIGZpbGw9JyMxMTExMTEnIG9wYWNpdHk9Jy40Jy8+PC9zdmc+";

export const projects: Project[] = [
  {
    title: "HEALBOT",
    category: "Full Stack",
    description: "Multimodal healthcare diagnosis and Q&A system with Hybrid RAG.",
    longDescription:
      "Built a bilingual healthcare AI system using EfficientNetV2-L, ConvNeXt-Base, FAISS, BM25, RRF, XAI overlays, safety guardrails, and FastAPI-ready inference modules.",
    image: "/images/project-healbot.jpg",
    blurDataUrl: shimmer,
    stack: ["PyTorch", "LangChain", "FAISS", "Streamlit", "FastAPI"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/Shubham-Gupta7",
    featured: true
  },
  {
    title: "Stock Price Trend Forecaster",
    category: "Full Stack",
    description: "BiLSTM forecasting dashboard for short-term market trend prediction.",
    longDescription:
      "Engineered ETL-style time-series preprocessing, rolling-window features, technical indicators, RMSE evaluation, and Plotly visualizations.",
    image: "/images/project-stocks.jpg",
    blurDataUrl: shimmer,
    stack: ["Python", "Keras", "BiLSTM", "Yahoo Finance", "Plotly"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/Shubham-Gupta7"
  },
  {
    title: "Waste Classification System",
    category: "Open Source",
    description: "Transfer learning app that classifies 6 waste categories in real time.",
    longDescription:
      "Created a deep learning classifier with EfficientNetV2B2, MobileNetV3Small, and ResNet50, reaching 91% validation accuracy with a Streamlit interface.",
    image: "/images/project-waste.jpg",
    blurDataUrl: shimmer,
    stack: ["TensorFlow", "Keras", "Streamlit", "Transfer Learning"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/Shubham-Gupta7"
  }
];

export const experiences: ExperienceEntry[] = [
  {
    company: "Edulyt India",
    role: "Data Analyst Intern",
    dates: "May 2025 - June 2025",
    bullets: [
      "Analyzed customer segmentation and banking transaction records with Python, MySQL, Excel, and Power BI.",
      "Applied machine learning workflows that improved data processing and predictive accuracy by 25%."
    ]
  },
  {
    company: "Edunet Foundation with AICTE & Shell",
    role: "AI/ML Intern",
    dates: "July 2025",
    bullets: [
      "Developed an end-to-end garbage classification system for 6 waste types using transfer learning.",
      "Reached 91% validation accuracy and shipped a Streamlit app for real-time predictions."
    ]
  },
  {
    company: "Amity University Uttar Pradesh",
    role: "B.Tech CSE, Data Science",
    dates: "2022 - Present",
    bullets: ["Final-year undergraduate with 8.3 CGPA and a focus on AI, data science, and LLM systems."]
  },
  {
    company: "CodeCampers Club",
    role: "Head of Promotions & General Management",
    dates: "2023 - 2024",
    bullets: ["Led promotions and operations for technical community activity and innovation-focused events."]
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Shubham brings a rare mix of model-building depth and practical delivery thinking to AI projects.",
    name: "Project Mentor",
    role: "AI/ML Reviewer",
    avatar: "/images/avatar-shubham.jpg"
  },
  {
    quote:
      "He turns complex data workflows into clean, understandable products with strong ownership.",
    name: "Analytics Lead",
    role: "Internship Collaborator",
    avatar: "/images/avatar-shubham.jpg"
  },
  {
    quote:
      "A dependable teammate for hackathons and applied AI builds, especially when the problem is ambiguous.",
    name: "Team Collaborator",
    role: "Hackathon Peer",
    avatar: "/images/avatar-shubham.jpg"
  }
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Shubham-Gupta7", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/shubham-gupta777", icon: Linkedin },
  { label: "Email", href: "mailto:in.sg5447@gmail.com", icon: Mail },
  { label: "Terminal", href: "#work", icon: Terminal }
];

export const stats = [
  { label: "CGPA", value: "8.3" },
  { label: "Waste classifier accuracy", value: "91%" },
  { label: "HEALBOT AUC-ROC", value: "97.66%" }
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const iconMap = {
  Code2,
  Database,
  ChartNoAxesCombined,
  Sparkles
};
