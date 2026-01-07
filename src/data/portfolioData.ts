import {
    Briefcase,
    Code,
    Database,
    Layout,
    Server,
    Smartphone,
    Wrench,
    Github,
    Linkedin,
    Mail,
    FileText,
} from "lucide-react";

export const PORTFOLIO_DATA = {
    about: {
        title: "Arunkumar R",
        subtitle: "Building scalable microservices for centralised crypto exchange platforms with expertise in MERN stack",
        resume_url: "/Arun_mern_dev.pdf",
    },
    social_links: [
        {
            id: 1,
            platform: "github",
            url: "https://github.com/githubuserarun",
        },
        {
            id: 2,
            platform: "linkedin",
            url: "https://www.linkedin.com/in/arunkumar-ravi-1514b11b2/",
        },
        // Add email if publicly available, scraped data said "arunkumar@example.com" which looks like a placeholder
    ],
    skills: [
        // Frontend
        { id: 1, category: "Frontend", name: "React" },
        { id: 2, category: "Frontend", name: "Redux" },
        { id: 3, category: "Frontend", name: "JavaScript (ES6+)" },
        { id: 4, category: "Frontend", name: "TypeScript" },
        { id: 5, category: "Frontend", name: "HTML5 & CSS3" },
        { id: 6, category: "Frontend", name: "Tailwind CSS" },
        { id: 7, category: "Frontend", name: "Bootstrap" },
        // Backend
        { id: 8, category: "Backend", name: "Node.js" },
        { id: 9, category: "Backend", name: "Express.js" },
        { id: 10, category: "Backend", name: "RESTful APIs" },
        { id: 11, category: "Backend", name: "Microservices" },
        { id: 12, category: "Backend", name: "WebSocket" },
        // Database
        { id: 13, category: "Database", name: "MongoDB" },
        { id: 14, category: "Database", name: "Redis" },
        // Tools
        { id: 16, category: "Tools", name: "Git & GitHub" },
        { id: 17, category: "Tools", name: "Docker" },
        { id: 18, category: "Tools", name: "VS Code" },
        { id: 19, category: "Tools", name: "Postman" },
        { id: 20, category: "Tools", name: "Figma" },
    ],
    experiences: [
        {
            id: 1,
            company: "WeAlwin Technologies",
            role: "Full Stack Developer",
            start_date: "Aug 2024",
            end_date: "Present",
            location: "Madurai, Tamil Nadu",
            description: "Developing scalable microservices for Xway crypto exchange platform using Node.js and MongoDB.",
            achievements: [
                "Developed microservices for crypto exchange operations including deposits, withdrawals, and trading features",
                "Integrated external APIs for trading views and cryptocurrency data aggregation",
                "Implemented WebSocket-based real-time updates for live trading data",
                "Created responsive admin dashboards using React with Tailwind CSS",
                "Developed secure wallet management systems with multi-signature support",
            ],
        },
    ],
    projects: [
        {
            id: 1,
            title: "Xway – Crypto Exchange Platform",
            description: "A comprehensive cryptocurrency exchange platform enabling users to trade, deposit, and withdraw digital assets with real-time market data and secure wallet management.",
            tech_stack: ["Node.js", "Express.js", "MongoDB", "React", "Redux", "Redis",],
            features: [
                "Real-time trading with WebSocket integration",
                "Secure multi-signature wallet system",
                "Automated liquidity management bots",
                "P2P escrow for secure peer-to-peer transactions"
            ],
            github_url: "", // No specific link found
            live_url: "", // No specific link found
        },
    ],
    education: [
        {
            id: 1,
            degree: "B.E. – Electronics & Communication Engineering",
            institution: "Sree Sowdambika College of Engineering",
            year: "2023", // Inferred or placeholder, scraped data didn't have year
            result: "CGPA: 8.14"
        },
        {
            id: 2,
            degree: "Full Stack Development Certification",
            institution: "NXTWAVE",
            year: "",
            description: "Intensive full-stack development program covering MERN stack"
        },
        {
            id: 3,
            degree: "Crypto Exchange Development",
            institution: "WeAlwin Technologies",
            year: "",
            description: "Specialized in blockchain and centralised cryptocurrency exchange development"
        }
    ]
};
