// ============================================
// PORTFOLIO DATA - Edit this file to update content
// ============================================

export const personalInfo = {
  name: "Shraddha Sahu",
  nameHindi: "श्रद्धा साहू",
  title: "B.Tech Final Year · Computer Science & Engineering",
  institution: "IIIT Bhagalpur",
  tagline: "Currently working as Data Science Intern at Western Digital, Bengaluru.",
  email: "shraddhasahu.work@gmail.com", // Update with actual email
  linkedin: "https://linkedin.com/in/shraddha1558", // Update with actual
  googleScholar: "https://scholar.google.com/citations?user=XXXX", // Update with actual
  github: "https://github.com/shraddha1558", // Update with actual
  resumePath: "/Shraddha_Sahu_Resume.pdf",
};

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: "wd",
    role: "Data Science Intern",
    organization: "Western Digital Corporation",
    location: "Bengaluru, India",
    period: "Oct 2025 – Present",
    bullets: [
      "Built end-to-end ML pipeline predicting HDD defects from 370+ parameters across 300K+ drives using Presto SQL ETL, reducing scrap by 50–70%.",
      "Developed feature-engineered models with VarClusHi selection, logistic regression validation, survival analysis, A/B testing, and a structured Thai–English LLM query system.",
    ],
  },
  {
    id: "iisc",
    role: "Research Intern",
    organization: "Indian Institute of Science",
    location: "Bengaluru, India",
    period: "May 2025 – Jul 2025",
    bullets: [
      "Built Random Forest and XGBoost classifiers with SMOTE/ROS/RUS imbalance handling, improving minority-class F1 by 45%.",
      "Performed statistical validation using paired t-tests, Shapiro–Wilk tests, and significance analysis after reviewing 50+ research papers.",
    ],
  },
  {
    id: "iitp",
    role: "Research Intern",
    organization: "Indian Institute of Technology Patna",
    location: "Patna, India",
    period: "May 2024 – Jul 2024",
    bullets: [
      "Created 10K+ annotated WiFi RSSI dataset for human posture classification.",
      "Trained Random Forest models achieving 85% accuracy, outperforming baselines by 6%.",
    ],
  },
];

export interface Publication {
  id: string;
  code: string;
  title: string;
  venue: string;
  year: number;
  award?: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    id: "w1",
    code: "W.1",
    title: "E-Care: Camera-Free Elderly Activity Monitoring via WiFi RSSI, Audio Sensing, Context-Aware AI Feedback",
    venue: "AAAI EGSAI Workshop, Singapore",
    year: 2026,
    award: "Best Poster",
  },
  {
    id: "c2",
    code: "C.2",
    title: "IntelliSense: A Vision-Driven Sensor Framework with Modeling for Indoor CO Emission Detection",
    venue: "9th IEEE International Conference on ICT (CICT '25)",
    year: 2025,
  },
  {
    id: "c1",
    code: "C.1",
    title: "When You Come In, You Sit, Stand, or Walk: Leveraging RSSI for Tracking and Control in Ubiquitous Systems",
    venue: "21st IEEE India Council International Conference, IIT Kharagpur",
    year: 2024,
    award: "Best Paper",
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  period: string;
}

export const projects: Project[] = [
  {
    id: "quad",
    title: "Autonomous Quadcopter for Surveillance",
    description: "Built low-cost autonomous quadcopter replacing fixed CCTV using onboard vision. Implemented optical-flow + Kalman stabilization with real-time human/activity detection.",
    techStack: ["YOLOv8", "OpenCV", "Python", "Pixhawk"],
    period: "Aug 2025 – Present",
  },
  {
    id: "finance",
    title: "Agentic AI Finance Assistant",
    description: "Multi-agent system retrieving live stock data, indicators, and analyst signals via API orchestration. Automated financial reasoning pipeline with interactive dashboard.",
    techStack: ["LangChain", "FastAPI", "Python", "React.js"],
    period: "Jan – Mar 2025",
  },
  {
    id: "ecowatch",
    title: "EcoWatch: AI Cleanliness Monitoring",
    description: "Full-stack monitoring platform with low-light waste detection, real-time alert logging, and privacy-preserving video analytics.",
    techStack: ["YOLOv5", "Firebase", "PostgreSQL", "React.js", "OpenCV"],
    period: "Sep – Dec 2024",
  },
];

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
}

export const achievements: Achievement[] = [
  { id: "a1", title: "Best UG Poster Award", description: "AAAI EGSAI Workshop, Singapore", year: "2026" },
  { id: "a2", title: "HPAIR Delegate", description: "Harvard Project for Asian and International Relations", year: "2025" },
  { id: "a3", title: "IASc-INSA-IAS Fellow", description: "Focus Area Science & Technology Fellowship, Indian Academy of Sciences", year: "2025" },
  { id: "a4", title: "Best Paper Award", description: "M.V. Chauhan All India Student Paper Contest, IEEE India Council", year: "2024" },
  { id: "a5", title: "Winner: Smart India Hackathon", description: "Grand National Finals (Software Edition)", year: "2024" },
  { id: "a6", title: "Top 0.1% Merit Holder", description: "CBSE National Matriculation Examination", year: "2020" },
  { id: "a7", title: "DSA & Competitive Programming", description: "LeetCode (Max: 1707, Top 12%), CodeChef (Max: 1459)", year: "Ongoing" },
];

export interface NewspaperClip {
  id: string;
  titleEnglish: string;
  titleHindi: string;
  publicationDate: string;
  // Add image paths here when you have them
  imageEnglish?: string;
  imageHindi?: string;
}

export const newspaperClips: NewspaperClip[] = [
  { id: "n1", titleEnglish: "IIIT Student Wins at Smart India Hackathon", titleHindi: "आईआईआईटी छात्रा ने स्मार्ट इंडिया हैकाथॉन जीता", publicationDate: "March 2025" },
  { id: "n2", titleEnglish: "Research Paper Wins Best Paper at IEEE", titleHindi: "शोध पत्र ने IEEE में सर्वश्रेष्ठ पेपर पुरस्कार जीता", publicationDate: "December 2024" },
  { id: "n3", titleEnglish: "Young Researcher Presents at AAAI Singapore", titleHindi: "युवा शोधकर्ता ने AAAI सिंगापुर में प्रस्तुति दी", publicationDate: "February 2026" },
  { id: "n4", titleEnglish: "IASc Fellowship Awarded to BTech Student", titleHindi: "बीटेक छात्रा को IASc फैलोशिप से सम्मानित किया गया", publicationDate: "May 2025" },
  { id: "n5", titleEnglish: "TEDx Event Organized at IIIT Bhagalpur", titleHindi: "आईआईआईटी भागलपुर में TEDx कार्यक्रम का आयोजन", publicationDate: "January 2026" },
  { id: "n6", titleEnglish: "Harvard Selects Indian Student for HPAIR", titleHindi: "हार्वर्ड ने भारतीय छात्रा को HPAIR के लिए चुना", publicationDate: "August 2025" },
];

export interface CommunityActivity {
  id: string;
  title: string;
  role: string;
  description: string;
  // Add image paths here
  image?: string;
}

export const communityActivities: CommunityActivity[] = [
  {
    id: "gs",
    title: "Counselling & Mentorship Board",
    role: "General Secretary",
    description: "Mentored 500+ students through guidance programs and supervised mentor teams. Organized counselling sessions and mental health awareness campaigns.",
  },
  {
    id: "tedx",
    title: "TEDx IIIT Bhagalpur 2026",
    role: "Event Organiser",
    description: "Leading a 50-member organizing team and managing full-cycle event execution including speaker curation, partnerships, and sponsorships.",
  },
];

export const skills = {
  languages: ["Python", "C++", "C", "JavaScript", "SQL"],
  mlAi: ["PyTorch", "TensorFlow", "Scikit-Learn", "LangChain", "Pydantic", "LLM Agents"],
  frameworks: ["FastAPI", "React.js", "Node.js", "Docker", "Kubernetes", "AWS", "Azure"],
  databases: ["PostgreSQL", "SQL Server", "DuckDB", "ETL Pipelines"],
  analytics: ["TIBCO Spotfire", "Statistical Modeling", "DOE", "Regression"],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Press", href: "#newspaper" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];
