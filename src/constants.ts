import { Project, SkillCategory, TimelineItem } from './types';

export const PERSONAL_INFO = {
  name: "Madan",
  role: "Machine Learning Intern | Agentic AI Developer | LLM & RAG Systems",
  education: "IT Student (5th Semester)",
  mission: "Build intelligent AI systems, automation tools, and AI agents that solve real-world problems and help businesses scale using artificial intelligence.",
  email: "madanlalmegh2@gmail.com",
  phone: "03292861251",
  github: "https://github.com/madan-genai",
  linkedin: "https://www.linkedin.com/in/madanlal-agenticai/",
  about: "I am a passionate AI Engineer and IT student with a deep interest in building intelligent systems that can reason and act autonomously. My journey in technology is driven by a fascination with how machine learning and neural networks can be leveraged to solve complex real-world challenges. With a strong foundation in Python and data science, I specialize in developing Agentic AI systems and AI automation tools. I am currently exploring new frontiers in LangGraph, LangChain, and CrewAI to create impactful solutions for businesses and individuals alike."
};

export const SKILLS: SkillCategory[] = [
  {
    category: "AI / Machine Learning",
    skills: ["LangGraph", "LangChain", "CrewAI", "Machine Learning", "Neural Networks", "CNN", "Logistic Regression", "Naive Bayes", "Gradient Descent", "AdaBoost", "Agentic AI"]
  },
  {
    category: "Programming",
    skills: ["Python", "SQL", "Pandas", "NumPy", "Data Science", "Data Structures", "Algorithms"]
  },
  {
    category: "Tools & Tech",
    skills: ["Git", "GitHub", "Docker", "Streamlit", "VS Code", "Jupyter Notebook"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Agentic AI Blog Writing Agent",
    description: "Developed an autonomous blog-writing agent using LangGraph with a graph-based workflow for research, outlining, drafting, and refining SEO-optimized content.",
    tech: ["LangGraph", "AI Agents", "Python", "LangChain"],
    github: "https://github.com/madan-genai",
    live: "#",
    image: "https://picsum.photos/seed/blog/600/400"
  },
  {
    title: "AI Chatbot with RAG",
    description: "Developed a document-based chatbot using LangChain and vector search. Implemented embeddings and semantic retrieval to improve answer accuracy.",
    tech: ["LangChain", "RAG", "Vector Search", "Embeddings"],
    github: "https://github.com/madan-genai",
    live: "#",
    image: "https://picsum.photos/seed/chatbot/600/400"
  },
  {
    title: "Patient Management System",
    description: "A comprehensive system for managing patient records, appointments, and medical history with a focus on efficiency and data security.",
    tech: ["Python", "SQL", "Data Management"],
    github: "https://github.com/madan-genai",
    live: "#",
    image: "https://picsum.photos/seed/patient/600/400"
  },
  {
    title: "Laptop Price Prediction",
    description: "Built a machine learning model to predict laptop prices based on features like RAM, CPU, GPU, and weight. Achieved high accuracy using advanced regression techniques.",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    github: "https://github.com/madan-genai",
    live: "#",
    image: "https://picsum.photos/seed/laptop/600/400"
  },
  {
    title: "Cold Email Generator",
    description: "An AI-powered tool that generates personalized cold emails based on prospect data and business offerings.",
    tech: ["Python", "NLP", "GPT-4", "Pandas"],
    github: "https://github.com/madan-genai",
    live: "#",
    image: "https://picsum.photos/seed/email/600/400"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2023",
    title: "Learning Python",
    description: "Started the journey with Python, mastering fundamentals and data manipulation."
  },
  {
    year: "2023",
    title: "Studying Machine Learning",
    description: "Deep dived into ML algorithms, regression, and classification techniques."
  },
  {
    year: "2024",
    title: "Neural Networks & CNN",
    description: "Explored deep learning architectures and computer vision applications."
  },
  {
    year: "2024",
    title: "Building AI Tools",
    description: "Started developing practical AI agents and automation systems."
  },
  {
    year: "2025",
    title: "Agentic AI Systems",
    description: "Focusing on autonomous agents and complex AI workflows."
  }
];
