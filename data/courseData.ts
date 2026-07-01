import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: 1,
    title: "Data Analysis Masterclass",
    description:
      "Learn Excel, SQL, Power BI, and Python for real-world data analysis.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    price: "â‚¦500",
    lessons: 35,
    duration: "8 Hours",
    rating: 4.9,
    category: "Data Analysis",

    objectives: [
      "Understand data analysis fundamentals",
      "Clean and prepare datasets",
      "Analyze data using Excel and SQL",
      "Create interactive Power BI dashboards",
      "Use Python for data analysis",
      "Build a portfolio-ready analytics project",
    ],

    curriculum: [
      {
        title: "Module 1 - Introduction",
        lessons: [
          { id: 0, title: "Welcome" },
          { id: 0, title: "Course Overview" },
          { id: 0, title: "Setting Up Your Tools" },
        ],
      },
      {
        title: "Module 2 - Excel Essentials",
        lessons: [
          { id: 0, title: "Working with Data" },
          { id: 0, title: "Formulas" },
          { id: 0, title: "Charts" },
        ],
      },
      {
        title: "Module 3 - SQL Basics",
        lessons: [
          { id: 0, title: "SELECT" },
          { id: 0, title: "WHERE" },
          { id: 0, title: "JOIN" },
        ],
      },
    ],

    instructor: {
      name: "Mustapha Adamu",
      role: "Founder & Lead Instructor",
      avatar: "https://i.pravatar.cc/300?img=12",
      bio: "Full Stack Developer, Data Analyst and Digital Skills Trainer helping Africans build job-ready technology skills through practical learning.",
      students: 1250,
      courses: 18,
      rating: 4.9,
    },
  },

  {
    id: 2,
    title: "Complete Web Development",
    description:
      "Learn React, Next.js, Laravel and MySQL from beginner to advanced.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    price: "â‚¦2,500",
    lessons: 80,
    duration: "25 Hours",
    rating: 5,
    category: "Web Development",

    objectives: [
      "Build modern websites",
      "Learn React",
      "Master Next.js",
      "Build Laravel APIs",
      "Deploy full-stack apps",
      "Create portfolio projects",
    ],

    curriculum: [
      {
        title: "Module 1",
        lessons: [{ id: 0, title: "HTML" }, { id: 0, title: "CSS" }, { id: 0, title: "JavaScript" }],
      },
      {
        title: "Module 2",
        lessons: [{ id: 0, title: "React" }, { id: 0, title: "Hooks" }, { id: 0, title: "State" }],
      },
      {
        title: "Module 3",
        lessons: [{ id: 0, title: "Laravel" }, { id: 0, title: "API" }, { id: 0, title: "Authentication" }],
      },
    ],

    instructor: {
      name: "Mustapha Adamu",
      role: "Founder & Lead Instructor",
      avatar: "https://i.pravatar.cc/300?img=12",
      bio: "Experienced Full Stack Developer building scalable web applications using Laravel, React and Next.js.",
      students: 1250,
      courses: 18,
      rating: 5,
    },
  },

  {
    id: 3,
    title: "Cybersecurity Fundamentals",
    description:
      "Understand ethical hacking and modern cybersecurity practices.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    price: "â‚¦1,500",
    lessons: 42,
    duration: "12 Hours",
    rating: 4.8,
    category: "Cybersecurity",

    objectives: [
      "Understand security concepts",
      "Network protection",
      { id: 0, title: "Ethical Hacking" },
      "Threat analysis",
      "Password security",
      "Cyber hygiene",
    ],

    curriculum: [
      {
        title: "Module 1",
        lessons: [{ id: 0, title: "Security Basics" }, { id: 0, title: "Threats" }],
      },
      {
        title: "Module 2",
        lessons: [{ id: 0, title: "Ethical Hacking" }, { id: 0, title: "Recon" }],
      },
      {
        title: "Module 3",
        lessons: [{ id: 0, title: "Firewalls" }, { id: 0, title: "VPN" }],
      },
    ],

    instructor: {
      name: "Mustapha Adamu",
      role: "Founder & Lead Instructor",
      avatar: "https://i.pravatar.cc/300?img=12",
      bio: "Cybersecurity educator focused on practical defensive security and ethical hacking.",
      students: 1250,
      courses: 18,
      rating: 4.8,
    },
  },
];
