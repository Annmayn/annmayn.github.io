export const profile = {
  name: "Neema Tsering",
  title: "Software Engineer",
  headline: "SDE III @ Houzz",
  location: "Canada",
  email: "neematsering333@gmail.com",
  github: "https://github.com/Annmayn",
  linkedin: "https://www.linkedin.com/in/neema-tsering/",
  about:
    "I am a Software Engineer with 4+ years of experience across several domains, specializing in server-side data processing and data pipelines — web crawlers, file parsers, text extractors, task automation, and bash scripting. I'm currently transitioning into a full-stack role.",
};

export const skills = [
  "System Design",
  "Algorithm",
  "Query Optimization",
  "Python",
  "TypeScript",
  "JavaScript",
  "Kotlin",
  "PostgreSQL",
  "Django",
  "Django Rest",
  "FastAPI",
  "Flask",
  "React",
  "Docker",
  "Airflow",
  "Bash",
  "Linux",
];

export const journey = [
  {
    text: "I started as a backend engineer focused on data pipelines, crawlers, and automation.",
  },
  {
    text: "Over time I deepened my work in APIs, databases, and production systems across startups and product companies.",
  },
  {
    text: "Today I'm building full-stack products at Houzz, bringing that server-side foundation into the frontend.",
  },
];

export const education = {
  school: "Tribhuvan University, IOE, Pulchowk Campus",
  degree: "Bachelor of Engineering",
  years: "2015 — 2019",
  notes: [
    "Studied at Nepal's top engineering campus, building a foundation in algorithms, systems, and software design.",
    "Side projects from those years — mazes, genetic algorithms, and attendance systems — still shape how I explore ideas.",
  ],
};

export const experience = [
  {
    company: "Rara Labs",
    role: "Software Engineer",
    years: "2019 — 2021",
    logo: "raralabs",
    description:
      "Early career role focused on server-side processing, scripting, and product engineering. Managed to get the product to production in top 5 banks of Nepal",
  },
  {
    company: "Codavatar Tech",
    role: "Software Engineer",
    years: "2021 — 2022",
    logo: "codavatar",
    description:
      "Worked on time series data processing, and enterprise integrations.",
  },
  {
    company: "Promoty",
    role: "Full Stack Developer",
    years: "2022 — 2024",
    logo: "promoty",
    description:
      "Owned end to end development of the influencer marketing platform. Company exited in 2024.",
  },
  {
    company: "Logicurv",
    role: "Senior Software Engineering Consultant",
    years: "2022 — 2025",
    logo: "logicurv",
    description:
      "Consulted on software delivery for product and engineering for a travel booking platform.",
  },
  {
    company: "Houzz",
    role: "Full Stack Developer · SDE III",
    years: "2024 — Present",
    logo: "houzz",
    description:
      "Building full-stack features for the home remodeling and improvement platform on the documents team.",
  },
];

export type Project = {
  name: string;
  year: string;
  description: string;
  github: string;
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Dizzy Maze V2",
    year: "2024",
    description: "A rewrite of Dizzy Maze in React, TypeScript, and Tailwind.",
    github: "https://github.com/Annmayn/dizzy_maze",
    url: "https://annmayn.github.io/dizzy_maze/",
  },
  {
    name: "HTML2EXCEL",
    year: "2021",
    description: "Parses HTML tables from files and converts them to Excel.",
    github: "https://github.com/Annmayn/html2excel",
    url: "https://pypi.org/project/html2excel/",
  },
  {
    name: "Automated Attendance System",
    year: "2019",
    description:
      "EigenFace-based attendance system that recognizes faces with minimal intervention.",
    github: "https://github.com/Annmayn/EigenFace",
  },
  {
    name: "Roster Management",
    year: "2018",
    description:
      "Genetic algorithm that generates routines from constraints and requirements.",
    github:
      "https://github.com/Annmayn/Roster-management-using-genetic-algorithm",
  },
  {
    name: "Dizzy Maze",
    year: "2017",
    description:
      "Playable maze generated with depth-first search as a search-algorithm demo.",
    github: "https://github.com/Annmayn/Dizzy-Maze",
  },
];

export const languages = [
  { name: "English", level: "Native or bilingual" },
  { name: "Nepali", level: "Native or bilingual" },
  { name: "French", level: "Intermediate · DELF B2" },
];

export const scores = [
  { name: "DELF B2", score: "80", date: "Sep 2024" },
  { name: "IELTS", score: "8.5", date: "Aug 2026" },
];

export const certifications = [
  {
    name: "Introduction to TensorFlow for AI, ML, and DL",
    issuer: "Coursera",
    issued: "Nov 2020",
    url: "https://www.coursera.org/account/accomplishments/certificate/QMEC5JHU9GV3",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera",
    issued: "Oct 2020",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/VERSV8FEKTZA",
  },
  {
    name: "Sequence Models",
    issuer: "Coursera",
    issued: "Oct 2020",
    url: "https://www.coursera.org/account/accomplishments/certificate/694ZHAGM3RN4",
  },
  {
    name: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    issued: "Sep 2020",
    url: "https://www.hackerrank.com/certificates/bb2c7ebd6a49",
  },
  {
    name: "Convolutional Neural Networks",
    issuer: "Coursera",
    issued: "Jul 2020",
    url: "https://www.coursera.org/account/accomplishments/certificate/LKQW7F2WEGN2",
  },
  {
    name: "Sentiment Analysis with scikit-learn",
    issuer: "Coursera",
    issued: "Jun 2020",
    url: "https://www.coursera.org/account/accomplishments/certificate/JHW6XY5EK7MJ",
  },
  {
    name: "Improving Deep Neural Networks",
    issuer: "Coursera",
    issued: "May 2020",
    url: "https://www.coursera.org/account/accomplishments/certificate/RUZLR8S2H69D",
  },
  {
    name: "Structuring Machine Learning Projects",
    issuer: "Coursera",
    issued: "May 2020",
    url: "https://www.coursera.org/account/accomplishments/certificate/9DQUH4CYJZPU",
  },
  {
    name: "Neural Networks and Deep Learning",
    issuer: "Coursera",
    issued: "Apr 2020",
    url: "https://www.coursera.org/account/accomplishments/certificate/7ZEMHE8UL6C4",
  },
  {
    name: "CSMM.101x: Artificial Intelligence",
    issuer: "edX",
    issued: "Dec 2019",
    url: "https://courses.edx.org/certificates/7ab1bdaf14924fdbaa23e34de247aa29",
  },
];
