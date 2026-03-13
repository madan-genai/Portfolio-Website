import { Project, SkillCategory, TimelineItem } from './types';

export const PERSONAL_INFO = {
  name: "Madan Lal",
  role: "Agentic AI Developer | LLM & RAG Systems | ML Engineer",
  education: "BS in Information Technology (5th Semester)",
  mission: "Aspiring Machine Learning Engineer and Agentic AI Developer with hands-on experience in Python, large language models (LLMs), and modern AI frameworks. Skilled in building RAG systems, AI automation workflows, NLP pipelines, and machine learning models.",
  email: "madanlalmegh2@gmail.com",
  phone: "03292861251",
  github: "https://github.com/madan-genai",
  linkedin: "https://www.linkedin.com/in/madanlal-agenticai/",
  location: "Hyderabad",
  about: "I am a passionate AI Engineer and IT student at the University of Sindh. I specialize in developing retrieval-augmented generation (RAG) systems, AI automation workflows, and machine learning models. Currently focused on building autonomous agents and intelligent neural systems."
};

export const SKILLS: SkillCategory[] = [
  {
    category: "AI / Machine Learning",
    skills: ["LangGraph", "LangChain", "CrewAI", "Scikit-learn", "TensorFlow", "PyTorch", "Keras", "RAG Systems", "AI Agents", "LLM APIs"]
  },
  {
    category: "Deep Learning",
    skills: ["Neural Networks", "CNNs", "RNN", "LSTM", "GRU", "Transformers", "Gradient Descent"]
  },
  {
    category: "Programming & Data",
    skills: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Data Preprocessing", "Model Evaluation"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Streamlit", "NLP", "ML Workflows"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Agentic AI Blog Writing Agent",
    description: "Developed an autonomous blog-writing agent using LangGraph with a graph-based workflow for research, outlining, drafting, and refining SEO-optimized content. Integrated LLMs, prompt engineering, and external knowledge retrieval.",
    tech: ["LangGraph", "AI Agents", "Python", "LangChain"],
    github: "https://github.com/madan-genai",
    live: "#",
    image: "https://picsum.photos/seed/blog/600/400"
  },
  {
    title: "AI Chatbot with RAG",
    description: "Developed a document-based chatbot using LangChain and vector search. Implemented embeddings and semantic retrieval to improve answer accuracy. Designed workflow for document ingestion and intelligent query responses.",
    tech: ["LangChain", "RAG", "Vector Search", "Embeddings"],
    github: "https://github.com/madan-genai",
    live: "#",
    image: "https://picsum.photos/seed/chatbot/600/400"
  },
  {
    title: "Patient Management System",
    description: "A comprehensive system for managing patient records, appointments, and medical history, designed for efficiency and ease of use in healthcare settings.",
    tech: ["Python", "SQL", "Streamlit", "Data Management"],
    github: "https://github.com/madan-genai",
    live: "#",
    image: "https://picsum.photos/seed/medical/600/400"
  },
  {
    title: "Cold Email Generator",
    description: "An AI-powered tool that generates personalized cold emails based on recipient profiles and business goals, leveraging LLMs for natural and persuasive communication.",
    tech: ["Python", "LLMs", "Prompt Engineering", "LangChain"],
    github: "https://github.com/madan-genai",
    live: "#",
    image: "https://picsum.photos/seed/email/600/400"
  },
  {
    title: "Laptop Price Prediction",
    description: "Built a machine learning model to predict laptop prices based on features like RAM, CPU, GPU, and weight. Achieved high accuracy using advanced regression techniques.",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    github: "https://github.com/madan-genai",
    live: "#",
    image: "https://picsum.photos/seed/laptop/600/400"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "Present",
    title: "Agentic AI Development",
    description: "Developing autonomous AI agents and intelligent systems using LangGraph, CrewAI, and advanced RAG architectures."
  },
  {
    year: "2024 - 2025",
    title: "ML and GenAI",
    description: "Focused on Machine Learning and Generative AI, building predictive models and AI-powered applications."
  },
  {
    year: "2023",
    title: "Foundation",
    description: "Started BS in Information Technology at University of Sindh and mastered Python fundamentals."
  }
];
