export const profile = {
  name: "Karthikeyan",
  roles: [
    "Software Engineer",
    "Flutter Developer",
    "Backend Engineer",
    "AI Engineer",
  ],
  tagline:
    "I build production mobile and backend systems — Flutter apps, Java/Vert.x services, and Node.js APIs backed by PostgreSQL — and I've shipped a working RAG system into production.",
  location: "Tamil Nadu, India",
  email: "karthi.app.developer@gmail.com",
  phone: "+91 63858 97474",
  github: "https://github.com/Karthikeyan7474",
  linkedin: "https://www.linkedin.com/in/karthikeyan-k-27a246252",
  resumeUrl: "/resume.pdf",
};

export const stats = [
  { label: "Projects Shipped", value: 5, suffix: "+" },
  { label: "APIs Built", value: 30, suffix: "+" },
  { label: "Users Served", value: 100, suffix: "+" },
  { label: "Years Experience", value: 2, suffix: "+" },
];

export const aboutStats = [
  { label: "Mobile Development", detail: "Flutter apps shipped to production, including a live UK marketplace" },
  { label: "Backend Engineering", detail: "Java/Vert.x services and Node.js APIs backed by PostgreSQL" },
  { label: "AI Systems", detail: "Built a working RAG pipeline into a production app" },
  { label: "Continuous Learning", detail: "Currently deepening Express.js, React, and TypeScript" },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  { title: "Core Stack", skills: ["Flutter", "Dart", "Java", "Vert.x", "Node.js", "PostgreSQL"] },
  { title: "AI / RAG", skills: ["Retrieval-Augmented Generation", "Vector Search", "Prompt Engineering"] },
  { title: "Currently Learning", skills: ["Express.js", "React", "TypeScript"] },
];

export type Project = {
  id: string;
  name: string;
  summary: string;
  description: string;
  tags: string[];
  highlights: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "tiffit",
    name: "Tiffit",
    summary: "Home-cooked food delivery marketplace, live in the UK.",
    description:
      "A three-sided marketplace connecting home cooks, customers, and delivery partners for home-cooked meal delivery — three separate apps (Customer, Cook, Delivery Partner), currently live in the UK.",
    tags: ["Flutter", "Node.js", "PostgreSQL", "RAG"],
    highlights: [
      "Three dedicated apps: Customer, Cook, and Delivery Partner",
      "Built a RAG system into the Cook app",
      "Live in production in the UK market",
    ],
  },
  {
    id: "ip-climb",
    name: "IP Climb",
    summary: "IP rights management platform for the media industry.",
    description:
      "A platform helping media industry rights holders track and manage intellectual property ownership and licensing.",
    tags: ["Flutter", "Node.js", "PostgreSQL"],
    highlights: [
      "IP ownership and licensing management for media companies",
      "Built for the media and entertainment industry",
    ],
  },
  {
    id: "flutter-fintech",
    name: "Flutter Fintech App",
    summary: "Wallet, cards, and payments — mobile-first.",
    description:
      "A fintech mobile application covering digital wallets, card management, QR payments, and transaction history with a secure API backend.",
    tags: ["Flutter", "Payments", "QR", "Wallet"],
    highlights: ["Digital wallet and card management", "QR-based payments", "Transaction history and receipts"],
  },
  {
    id: "seginus",
    name: "Seginus",
    summary: "Freelance Flutter app for medical representatives to showcase products.",
    description:
      "A freelance mobile app that lets medical representatives present their own company's medicine catalog to doctors and clients, with clear, structured explanations for each product.",
    tags: ["Flutter", "Freelance", "Product Catalog", "Mobile"],
    highlights: [
      "Company-branded medicine catalog",
      "Structured product explanations for client-facing use",
      "Built and delivered as an independent freelance project",
    ],
  },
];

export const aiPipeline = [
  { step: "User", detail: "Sends a natural-language query" },
  { step: "Prompt", detail: "Structured with system + user context" },
  { step: "Embedding Model", detail: "Converts text into vector representation" },
  { step: "Vector Database", detail: "pgvector similarity search" },
  { step: "Retriever", detail: "Fetches top-k relevant chunks" },
  { step: "Context Builder", detail: "Assembles grounded context window" },
  { step: "Gemini", detail: "Generates the grounded response" },
  { step: "Response", detail: "Returned to the user, permission-filtered" },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  projects: string[];
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    org: "Swomb Technologies",
    period: "2025 — Present",
    description:
      "Building Flutter apps and backend services end to end — from schema design to production release, including a RAG system shipped into a live product.",
    projects: ["Food Delivery Platform", "IP Rights management", "Medical", "Finance Applications "],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Voc. Software Development",
    institution: "Arumugam Pillai Seethai Ammal College (Alagappa University), Thirupathur, Sivaganga Dt.",
    period: "2019 — 2022",
    detail: "University Rank Holder",
  },
  {
    degree: "HSC (Class 12)",
    institution: "Government Higher Secondary School, Sivaganga Dt.",
    period: "",
    detail: "68%",
  },
  {
    degree: "SSLC (Class 10)",
    institution: "Government Higher Secondary School, Sivaganga Dt.",
    period: "",
    detail: "90%",
  },
];

export const services = [
  { title: "Flutter App Development", detail: "Cross-platform mobile apps with native-feeling polish, shipped to production." },
  { title: "Backend API Development", detail: "Java & Vert.x services and Node.js APIs built for correctness and scale." },
  { title: "Database Design", detail: "PostgreSQL schemas that hold up under real production load." },
  { title: "AI / RAG Integration", detail: "Retrieval-augmented generation grounded in your own data." },
  { title: "Full-Stack Web Development", detail: "Building toward React, TypeScript, and Express.js as I deepen the web stack." },
];
