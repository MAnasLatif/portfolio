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

export const projects = [
  {
    name: "File Manager",
    eyebrow: "Developer tooling",
    description:
      "A TypeScript monorepo for a reusable file-management package, command-line interface, and working examples.",
    technologies: ["TypeScript", "CLI", "Monorepo"],
    href: "https://github.com/MAnasLatif/file-manager",
    stars: 3,
  },
  {
    name: "WhatsApp AI Assistant",
    eyebrow: "Applied AI",
    description:
      "An open-source assistant project exploring practical AI workflows through a familiar messaging surface.",
    technologies: ["TypeScript", "AI", "Automation"],
    href: "https://github.com/MAnasLatif/whatsapp-ai-assistant",
    stars: 1,
  },
  {
    name: "MAL UI",
    eyebrow: "Design systems",
    description:
      "An open-source React component system with hooks, forms, charts, rich text, file uploads, and a shared MAL brand theme.",
    technologies: ["React", "Mantine", "TypeScript"],
    href: "https://github.com/MAnasLatif/mal-ui",
    stars: 0,
  },
  {
    name: "Password Manager",
    eyebrow: "Web application",
    description:
      "A password-management application focused on organizing credentials, generating passwords, and keeping sensitive information usable.",
    technologies: ["TypeScript", "Security", "Web"],
    href: "https://github.com/MAnasLatif/password-manager",
    stars: 0,
  },
  {
    name: "CTO Skill",
    eyebrow: "AI engineering",
    description:
      "An evidence-driven agent skill that routes technical leadership work across architecture, security, product, delivery, and operations.",
    technologies: ["Python", "Agents", "Architecture"],
    href: "https://github.com/MAnasLatif/CTO",
    stars: 0,
  },
  {
    name: "Node Devbox",
    eyebrow: "Infrastructure",
    description:
      "A reusable Node.js 24 development environment distributed with Docker Compose and GitHub Container Registry.",
    technologies: ["Node.js", "Docker", "GHCR"],
    href: "https://github.com/MAnasLatif/node-devbox",
    stars: 0,
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
