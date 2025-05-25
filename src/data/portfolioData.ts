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

export interface Achievement {
  id: string;
  title: string;
  description: string;
  type: "talk" | "award" | "competition";
  link?: string;
  event?: string;
  year?: string;
  details?: string;
  icon: string;
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
  title: "Senior Software Engineer",
  bio: "Passionate Software Engineer with a knack for building blazing-fast, beautiful, and scalable user interfaces. I specialize in React, TypeScript, and modern UI architecture. I love clean code, scalable design systems, and driving meaningful product decisions.",
  location: "Delhi, India",
  email: "yashpreetbathla@gmail.com",
  linkedin: "https://www.linkedin.com/in/yashpreetbathla/",
  github: "https://github.com/yashpreetbathla",
  profileImage: "../CAM00614_Original.jpeg",
};

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "React Nexus Speaker",
    description:
      "Delivered a talk on innovative approaches to CSR, SSR, and server components in modern web applications",
    type: "talk",
    event: "React Nexus",
    link: "https://www.youtube.com/watch?v=Dyu3h06Sy1A&t=18s&ab_channel=reactify",
    details:
      "Explored cutting-edge rendering strategies and their impact on web performance and user experience",
    icon: "🎤",
  },
  {
    id: "2",
    title: "Google DevFest Delhi Speaker",
    description:
      "Presented 'From Client to Server: But Why?' exploring the role of SSR in enhancing user experiences",
    type: "talk",
    event: "Google DevFest Delhi 2024",
    link: "https://gdg.community.dev/events/details/google-gdg-new-delhi-presents-devfest-new-delhi-2024/cohost-gdg-new-delhi",
    details:
      "Deep dive into server-side rendering benefits and implementation strategies for modern web applications",
    icon: "🎙️",
  },
  {
    id: "3",
    title: "Superstar Engineer Award",
    description:
      "Recognized for exceptional engineering contributions and leadership at Tessell",
    type: "award",
    event: "Tessell",
    year: "2024",
    details:
      "Single-handedly revitalized the outdated DEMO website, aligning it with the Tessell App. Devised a novel coding architecture enabling seamless addition of new features within a day. Implemented Service Details page for Vector DB services with configurable UI framework. Actively engages in PR reviews, addresses critical staging and production bugs, and provides valuable assistance to team members.",
    icon: "🏆",
  },
  {
    id: "4",
    title: "Social Geek Award",
    description:
      "Recognized for outstanding social and technical contributions during tenure at Yugabyte",
    type: "award",
    event: "Yugabyte Annual Award Function",
    year: "2023",
    details:
      "Awarded for exceptional collaboration, knowledge sharing, and positive impact on team culture",
    icon: "🏅",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "CodEngine - Interactive Online Judge",
    description:
      "A modern online judge platform leveraging the CodeChef API to provide a seamless and interactive coding experience with responsive UI and syntax-highlighted code editor.",
    technologies: ["React", "JavaScript", "CodeChef API", "CSS3", "HTML5"],
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/CodEngine/tree/master",
    featured: true,
  },
  {
    id: "2",
    title: "SplitUp Web – Expense Management App",
    description:
      "A full-featured expense tracking and bill-splitting app built with React and Redux Toolkit for friends, roommates, or group travelers with real-time summaries.",
    technologies: [
      "React",
      "Redux Toolkit",
      "TailwindCSS",
      "DaisyUI",
      "JavaScript",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/splitUp-web",
    featured: true,
  },
  {
    id: "3",
    title: "SplitUp Backend",
    description:
      "The backend logic that powers the SplitUp Web App with robust APIs, JWT-based authentication, and real-time balance updates with clean RESTful APIs.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/splitup",
    featured: false,
  },
  {
    id: "4",
    title: "DevTinder – Developer Networking App",
    description:
      "A real-time networking platform for developers to connect and collaborate based on interests and skills – inspired by Tinder with Socket.IO integration.",
    technologies: ["Node.js", "Socket.IO", "MongoDB", "Express.js", "JWT"],
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/devTinder",
    featured: false,
  },
  {
    id: "5",
    title: "DevTinder Web",
    description:
      "The frontend for DevTinder providing a sleek, interactive interface to explore and connect with developers with Tinder-style swiping and real-time messaging.",
    technologies: [
      "React",
      "DaisyUI",
      "TailwindCSS",
      "Socket.IO",
      "TypeScript",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/devTinder-web",
    featured: true,
  },
];

export const skills: Skill[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "React",
      "Redux",
      "Node.js",
    ],
  },
  {
    category: "Styling & UI",
    items: [
      "Tailwind CSS",
      "Material UI",
      "DaisyUI",
      "SASS",
      "Responsive Design",
    ],
  },
  {
    category: "Testing & Tools",
    items: ["Jest", "Cypress", "Cucumber", "Webpack", "Vite", "Git"],
  },
  {
    category: "APIs & Database",
    items: [
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Socket.IO",
      "OpenAPI",
    ],
  },
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
      "Developed BDD-style test infrastructure using Cypress & Cucumber",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Cypress",
      "Cucumber",
    ],
  },
  {
    id: "2",
    company: "Yugabyte",
    position: "Software Engineer",
    duration: "Oct 2022 - Apr 2023",
    description: [
      "Implemented Role-based access control across YBM Cloud UI",
      "Developed an intuitive promo-code engine integrated with the CMS and frontend",
      "Enhanced user experience through modern React patterns and TypeScript",
    ],
    technologies: ["React", "TypeScript", "GraphQL", "REST APIs"],
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
      "Collaborated with cross-functional teams to deliver high-quality solutions",
    ],
    technologies: ["React", "Redux", "TypeScript", ".NET", "Azure"],
  },
  {
    id: "4",
    company: "Amazon",
    position: "Software Development Engineer Intern",
    duration: "Jan 2021 - Jul 2021",
    description: [
      "Worked with Prime Videos X-Ray Team on sports visualization for rugby and football",
      "Designed and implemented notification system for CVAT job creation using AWS CDK, SNS, Lambda, and Slack/Chime bot",
      "Created document for better understanding of CVAT and implemented multiple functionalities in the open source tool",
      "Built a generic player component with pluggable and extendable design using ReactJS that provides functionality of changing scrubbing speed and key binding",
    ],
    technologies: ["React", "Redux"],
  },
  {
    id: "5",
    company: "ShareChat",
    position: "Software Development Engineer Intern",
    duration: "Sep 2020 - Dec 2020",
    description: [
      "Worked with web creation pod team responsible for developing and maintaining Jeet11 app",
      "Implemented features and services for CMS tools internal to organization",
      "Followed best practices like TDD and maintained high quality code for 100K production users",
    ],
    technologies: ["React", "Redux", "Next.js"],
  },
];
