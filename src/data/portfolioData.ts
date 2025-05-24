
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  profileImage: string;
}

export const personalInfo: PersonalInfo = {
  name: "Yashpreet Bathla",
  title: "Senior Frontend Engineer",
  bio: "Passionate Frontend Engineer with a knack for building blazing-fast, beautiful, and scalable user interfaces. I specialize in React, TypeScript, and modern UI architecture. I love clean code, scalable design systems, and driving meaningful product decisions.",
  location: "Delhi, India",
  email: "yashpreetbathla@gmail.com",
  linkedin: "https://www.linkedin.com/in/yashpreetbathla/",
  github: "https://github.com/yashpreetbathla",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
};

export const projects: Project[] = [
  {
    id: "1",
    title: "CodEngine - Interactive Online Judge",
    description: "A modern online judge platform leveraging the CodeChef API to provide a seamless and interactive coding experience with responsive UI and syntax-highlighted code editor.",
    technologies: ["React", "JavaScript", "CodeChef API", "CSS3", "HTML5"],
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/CodEngine/tree/master",
    featured: true
  },
  {
    id: "2",
    title: "SplitUp Web – Expense Management App",
    description: "A full-featured expense tracking and bill-splitting app built with React and Redux Toolkit for friends, roommates, or group travelers with real-time summaries.",
    technologies: ["React", "Redux Toolkit", "TailwindCSS", "DaisyUI", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/splitUp-web",
    featured: true
  },
  {
    id: "3",
    title: "SplitUp Backend",
    description: "The backend logic that powers the SplitUp Web App with robust APIs, JWT-based authentication, and real-time balance updates with clean RESTful APIs.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/splitup",
    featured: false
  },
  {
    id: "4",
    title: "DevTinder – Developer Networking App",
    description: "A real-time networking platform for developers to connect and collaborate based on interests and skills – inspired by Tinder with Socket.IO integration.",
    technologies: ["Node.js", "Socket.IO", "MongoDB", "Express.js", "JWT"],
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/devTinder",
    featured: false
  },
  {
    id: "5",
    title: "DevTinder Web",
    description: "The frontend for DevTinder providing a sleek, interactive interface to explore and connect with developers with Tinder-style swiping and real-time messaging.",
    technologies: ["React", "DaisyUI", "TailwindCSS", "Socket.IO", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/devTinder-web",
    featured: false
  }
];

export const skills: Skill[] = [
  {
    category: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "React", "Redux", "Node.js"]
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Material UI", "DaisyUI", "SASS", "Responsive Design"]
  },
  {
    category: "Testing & Tools",
    items: ["Jest", "Cypress", "Cucumber", "Webpack", "Vite", "Git"]
  },
  {
    category: "APIs & Database",
    items: ["REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Socket.IO", "OpenAPI"]
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tessell",
    position: "Senior Member of Technical Staff",
    duration: "Apr 2023 - Present",
    description: [
      "Revamped the Demo site architecture, aligning it with core app UX standards",
      "Built a shared NPM library improving code reuse & UI performance",
      "Designed the Personas data governance feature, enabling fine-grained app access",
      "Reduced frontend bundle size by 40% by redesigning the network layer",
      "Developed BDD-style test infrastructure using Cypress & Cucumber"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Cypress", "Cucumber"]
  },
  {
    id: "2",
    company: "Yugabyte",
    position: "Software Engineer",
    duration: "Oct 2022 - Apr 2023",
    description: [
      "Implemented Role-based access control across YBM Cloud UI",
      "Developed an intuitive promo-code engine integrated with the CMS and frontend",
      "Enhanced user experience through modern React patterns and TypeScript"
    ],
    technologies: ["React", "TypeScript", "GraphQL", "REST APIs"]
  },
  {
    id: "3",
    company: "Microsoft",
    position: "Software Engineer",
    duration: "Aug 2021 - Oct 2022",
    description: [
      "Rewrote legacy tools for the Volume Licensing Platform with React + Redux",
      "Set up live monitoring dashboards for production metrics",
      "Proactively handled production bugs as part of the on-call engineering team",
      "Collaborated with cross-functional teams to deliver high-quality solutions"
    ],
    technologies: ["React", "Redux", "TypeScript", ".NET", "Azure"]
  }
];
