const projects = [
  {
    id: "homehero",
    name: "HomeHero",
    image: "/src/assets/heroimg.png",
    tech: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
    shortDesc: "A local household service booking platform.",
    description:
      "HomeHero is a full-stack web application that connects users with trusted local service providers like electricians, plumbers, and cleaners.",
    live: "https://homehero-a10.netlify.app/",
    github: "https://github.com/Parvez-hasan/HomeHero-Client",
    challenges: [
      "User authentication & role management",
      "Responsive UI for all devices",
      "Service booking flow design",
    ],
    future: [
      "Online payment integration",
      "Admin dashboard",
      "Review & rating system",
    ],
  },
  {
    id: "BookCourier",
    name: "BookCourier",
    image: "/src/assets/bookimg.png",
    tech: ["React", "Firebase", "Tailwind", "node.js", "express.js", "mongoDB"],
    shortDesc: "An online book management platform.",
    description:
      "BookCourier allows users to manage, add, and explore books with authentication and real-time database support.",
    live: "https://book-librariary-a-11.netlify.app/",
    github: "https://github.com/Parvez-hasan/book-library-client",
    challenges: [
      "Firebase authentication",
      "Protected routes",
      "Data validation",
    ],
    future: [
      "Advanced search",
      "Wishlist system",
      "Admin control panel",
    ],
  },
  {
    id: "taskflow",
    name: "TaskFlow",
    image: "/src/assets/protimg.png",
    tech: ["React", "Tailwind"],
    shortDesc: "A simple task management application.",
    description:
      "TaskFlow is a productivity-focused task manager that helps users organize daily activities efficiently.",
    live: "https://your-live-link.com",
    github: "https://github.com/your-github/taskflow-client",
    challenges: [
      "State management",
      "Reusable components",
    ],
    future: [
      "User authentication",
      "Cloud sync",
    ],
  },
];

export default projects;
