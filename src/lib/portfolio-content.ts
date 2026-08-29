export const skills = [
  {
    name: "Languages & frameworks",
    technologies: [
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Sass",
      "Python",
      "C++",
      "Go",
    ],
  },
  {
    name: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Hero UI",
      "Shadcn UI",
      "Radix UI",
      "Chakra UI",
      "Material UI",
      "Ant Design",
      "Headless UI",
      "Bootstrap",
      "Framer Motion",
    ],
  },
  {
    name: "Mobile app",
    technologies: ["React Native", "Expo"],
  },
  {
    name: "Desktop app",
    technologies: ["Electron"],
  },
  {
    name: "Backend",
    technologies: [
      "Node.js",
      "Express.js",
      "Next.js",
      "REST",
      "Socket.io",
      "Prisma",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    name: "Tooling",
    technologies: [
      "ESLint",
      "Prettier",
      "Turborepo",
      "npm",
      "Vite",
      "pnpm",
      "GitHub Actions",
      "Vitest",
      "Playwright",
      "Postman",
    ],
  },
  {
    name: "Design & prototyping",
    technologies: ["Figma", "Adobe XD", "Canva", "Sketch"],
  },
  {
    name: "DevOps & CI/CD",
    technologies: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Terraform",
      "Jenkins",
    ],
  },
  {
    name: "Cloud & hosting",
    technologies: [
      "Vercel",
      "AWS",
      "Azure",
      "Google Cloud",
      "DigitalOcean",
      "Linode",
    ],
  },
  {
    name: "Testing",
    technologies: ["Jest", "Mocha", "Chai", "Cypress"],
  },
] as const;

export type TechnologyName = (typeof skills)[number]["technologies"][number];

export const favoriteTechnologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Docker",
  "AWS",
] as const satisfies readonly TechnologyName[];

export const projects = [
  {
    name: "Atlas Commerce",
    eyebrow: "Commerce platform",
    description:
      "A demo storefront and operations workspace designed around fast product discovery, clear order handling, and maintainable commerce workflows.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Demo project",
  },
  {
    name: "Relay AI Workspace",
    eyebrow: "AI productivity",
    description:
      "A demo workspace for organizing assisted research, reusable prompts, and reviewable AI workflows without losing human context.",
    technologies: ["React", "Node.js", "AI"],
    status: "Demo project",
  },
  {
    name: "Pulse Operations",
    eyebrow: "Operations dashboard",
    description:
      "A demo command center that turns service health, team activity, and operational priorities into one focused daily view.",
    technologies: ["Next.js", "PostgreSQL", "Docker"],
    status: "Demo project",
  },
] as const;

export const articles = [
  {
    slug: "designing-software-as-a-system",
    title: "Designing software as a system, not a screen",
    summary:
      "A practical way to connect interface decisions, domain boundaries, and operating constraints before implementation begins.",
    category: "Product engineering",
    readTime: "6 min",
  },
  {
    slug: "useful-ai-agents-need-boundaries",
    title: "Useful AI agents need boundaries",
    summary:
      "Why explicit tools, evidence, validation, and stopping conditions matter more than an impressive prompt.",
    category: "AI engineering",
    readTime: "5 min",
  },
  {
    slug: "developer-tools-should-disappear",
    title: "The best developer tools almost disappear",
    summary:
      "Notes on reducing friction in local environments, command-line tools, and the routines around shipping software.",
    category: "Developer experience",
    readTime: "4 min",
  },
] as const;

export const principles = [
  {
    number: "01",
    title: "Evidence before confidence",
    text: "Inspect the system, name the uncertainty, and let a focused check decide what happens next.",
  },
  {
    number: "02",
    title: "Small surfaces, complete outcomes",
    text: "Keep each change narrow enough to understand while carrying the user workflow all the way to done.",
  },
  {
    number: "03",
    title: "Design is operational",
    text: "A product is shaped as much by its defaults, failures, and maintenance as by its first impression.",
  },
] as const;
