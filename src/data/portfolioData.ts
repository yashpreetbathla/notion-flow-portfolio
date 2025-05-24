
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
  name: "Alex Johnson",
  title: "Full Stack Developer",
  bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love creating beautiful, user-friendly interfaces and robust backend systems.",
  location: "San Francisco, CA",
  email: "alex.johnson@email.com",
  linkedin: "https://linkedin.com/in/alexjohnson",
  github: "https://github.com/alexjohnson",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
};

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/alexjohnson/ecommerce",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application inspired by Notion and Trello. Built with React and Firebase for real-time updates.",
    technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    liveUrl: "https://taskapp-demo.com",
    githubUrl: "https://github.com/alexjohnson/taskapp",
    featured: true
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts, interactive maps, and data visualization charts.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/alexjohnson/weather-dashboard",
    featured: false
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    liveUrl: "https://alexjohnson.dev",
    githubUrl: "https://github.com/alexjohnson/portfolio",
    featured: false
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "SASS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Express.js", "Django", "REST APIs", "GraphQL"]
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest", "Cypress"]
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechFlow Inc.",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    description: [
      "Led development of microservices architecture serving 100K+ daily users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
  },
  {
    id: "2",
    company: "StartupXYZ",
    position: "Frontend Developer",
    duration: "2020 - 2022",
    description: [
      "Built responsive web applications using React and Vue.js",
      "Collaborated with UX/UI designers to implement pixel-perfect designs",
      "Optimized application performance achieving 95+ Lighthouse scores"
    ],
    technologies: ["React", "Vue.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "3",
    company: "Digital Agency Co.",
    position: "Junior Developer",
    duration: "2019 - 2020",
    description: [
      "Developed custom WordPress themes and plugins",
      "Created interactive web experiences for client projects",
      "Learned modern JavaScript frameworks and best practices"
    ],
    technologies: ["JavaScript", "PHP", "WordPress", "jQuery", "Bootstrap"]
  }
];
