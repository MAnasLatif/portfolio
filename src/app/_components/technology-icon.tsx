"use client";

import AdApi from "@mal-icons/react/ad/AdApi";
import DevAws from "@mal-icons/react/dev/DevAws";
import DevLinode from "@mal-icons/react/dev/DevLinode";
import DevMicrosoftAzure from "@mal-icons/react/dev/DevMicrosoftAzure";
import DevPlaywright from "@mal-icons/react/dev/DevPlaywright";
import MsoDesignServices from "@mal-icons/react/mso/MsoDesignServices";
import SiAntdesign from "@mal-icons/react/si/SiAntdesign";
import SiBootstrap from "@mal-icons/react/si/SiBootstrap";
import SiChai from "@mal-icons/react/si/SiChai";
import SiChakraui from "@mal-icons/react/si/SiChakraui";
import SiCplusplus from "@mal-icons/react/si/SiCplusplus";
import SiCss from "@mal-icons/react/si/SiCss";
import SiCypress from "@mal-icons/react/si/SiCypress";
import SiDigitalocean from "@mal-icons/react/si/SiDigitalocean";
import SiDocker from "@mal-icons/react/si/SiDocker";
import SiElectron from "@mal-icons/react/si/SiElectron";
import SiEslint from "@mal-icons/react/si/SiEslint";
import SiExpo from "@mal-icons/react/si/SiExpo";
import SiExpress from "@mal-icons/react/si/SiExpress";
import SiFigma from "@mal-icons/react/si/SiFigma";
import SiFramer from "@mal-icons/react/si/SiFramer";
import SiGithubactions from "@mal-icons/react/si/SiGithubactions";
import SiGo from "@mal-icons/react/si/SiGo";
import SiGooglecloud from "@mal-icons/react/si/SiGooglecloud";
import SiGraphql from "@mal-icons/react/si/SiGraphql";
import SiHeadlessui from "@mal-icons/react/si/SiHeadlessui";
import SiHeroui from "@mal-icons/react/si/SiHeroui";
import SiHtml5 from "@mal-icons/react/si/SiHtml5";
import SiJavascript from "@mal-icons/react/si/SiJavascript";
import SiJenkins from "@mal-icons/react/si/SiJenkins";
import SiJest from "@mal-icons/react/si/SiJest";
import SiKubernetes from "@mal-icons/react/si/SiKubernetes";
import SiMocha from "@mal-icons/react/si/SiMocha";
import SiMongodb from "@mal-icons/react/si/SiMongodb";
import SiMui from "@mal-icons/react/si/SiMui";
import SiNextdotjs from "@mal-icons/react/si/SiNextdotjs";
import SiNodedotjs from "@mal-icons/react/si/SiNodedotjs";
import SiNpm from "@mal-icons/react/si/SiNpm";
import SiPnpm from "@mal-icons/react/si/SiPnpm";
import SiPostgresql from "@mal-icons/react/si/SiPostgresql";
import SiPostman from "@mal-icons/react/si/SiPostman";
import SiPrettier from "@mal-icons/react/si/SiPrettier";
import SiPrisma from "@mal-icons/react/si/SiPrisma";
import SiPython from "@mal-icons/react/si/SiPython";
import SiRadixui from "@mal-icons/react/si/SiRadixui";
import SiReact from "@mal-icons/react/si/SiReact";
import SiRedis from "@mal-icons/react/si/SiRedis";
import SiSass from "@mal-icons/react/si/SiSass";
import SiShadcnui from "@mal-icons/react/si/SiShadcnui";
import SiSketch from "@mal-icons/react/si/SiSketch";
import SiSocketdotio from "@mal-icons/react/si/SiSocketdotio";
import SiTailwindcss from "@mal-icons/react/si/SiTailwindcss";
import SiTerraform from "@mal-icons/react/si/SiTerraform";
import SiTurborepo from "@mal-icons/react/si/SiTurborepo";
import SiTypescript from "@mal-icons/react/si/SiTypescript";
import SiVercel from "@mal-icons/react/si/SiVercel";
import SiVite from "@mal-icons/react/si/SiVite";
import SiVitest from "@mal-icons/react/si/SiVitest";
import TbXd from "@mal-icons/react/tb/TbXd";
import type { ComponentType } from "react";

import type { TechnologyName } from "@/lib/portfolio-content";

type IconComponent = ComponentType<{
  className?: string;
  size?: number | string;
}>;

const technologyIcons = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  Sass: SiSass,
  Python: SiPython,
  "C++": SiCplusplus,
  Go: SiGo,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Hero UI": SiHeroui,
  "Shadcn UI": SiShadcnui,
  "Radix UI": SiRadixui,
  "Chakra UI": SiChakraui,
  "Material UI": SiMui,
  "Ant Design": SiAntdesign,
  "Headless UI": SiHeadlessui,
  Bootstrap: SiBootstrap,
  "Framer Motion": SiFramer,
  "React Native": SiReact,
  Expo: SiExpo,
  Electron: SiElectron,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  REST: AdApi,
  "Socket.io": SiSocketdotio,
  Prisma: SiPrisma,
  GraphQL: SiGraphql,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  ESLint: SiEslint,
  Prettier: SiPrettier,
  Turborepo: SiTurborepo,
  npm: SiNpm,
  Vite: SiVite,
  pnpm: SiPnpm,
  "GitHub Actions": SiGithubactions,
  Vitest: SiVitest,
  Playwright: DevPlaywright,
  Postman: SiPostman,
  Figma: SiFigma,
  "Adobe XD": TbXd,
  Canva: MsoDesignServices,
  Sketch: SiSketch,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  Jenkins: SiJenkins,
  Vercel: SiVercel,
  AWS: DevAws,
  Azure: DevMicrosoftAzure,
  "Google Cloud": SiGooglecloud,
  DigitalOcean: SiDigitalocean,
  Linode: DevLinode,
  Jest: SiJest,
  Mocha: SiMocha,
  Chai: SiChai,
  Cypress: SiCypress,
} satisfies Record<TechnologyName, IconComponent>;

type TechnologyIconProps = Readonly<{
  name: TechnologyName;
}>;

export function TechnologyIcon({ name }: TechnologyIconProps) {
  const Icon = technologyIcons[name];

  return <Icon className="shrink-0 text-white/38" size={18} />;
}
