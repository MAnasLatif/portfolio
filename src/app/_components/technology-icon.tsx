"use client";

import { createIcon } from "@mal-icons/react";
import AdAntDesign from "@mal-icons/react/ad/AdAntDesign";
import BxlDigitalocean from "@mal-icons/react/bxl/BxlDigitalocean";
import BxlGoLang from "@mal-icons/react/bxl/BxlGoLang";
import DevElectron from "@mal-icons/react/dev/DevElectron";
import DevGithubActions from "@mal-icons/react/dev/DevGithubActions";
import DevJenkins from "@mal-icons/react/dev/DevJenkins";
import DevKubernetes from "@mal-icons/react/dev/DevKubernetes";
import DevLinode from "@mal-icons/react/dev/DevLinode";
import DevMaterialUi from "@mal-icons/react/dev/DevMaterialUi";
import DevPlaywright from "@mal-icons/react/dev/DevPlaywright";
import DevPostgresql from "@mal-icons/react/dev/DevPostgresql";
import SiBootstrap from "@mal-icons/react/si/SiBootstrap";
import SiChai from "@mal-icons/react/si/SiChai";
import SiChakraui from "@mal-icons/react/si/SiChakraui";
import SiCplusplus from "@mal-icons/react/si/SiCplusplus";
import SiCss from "@mal-icons/react/si/SiCss";
import SiEslint from "@mal-icons/react/si/SiEslint";
import SiFigma from "@mal-icons/react/si/SiFigma";
import SiFramer from "@mal-icons/react/si/SiFramer";
import SiGooglecloud from "@mal-icons/react/si/SiGooglecloud";
import SiGraphql from "@mal-icons/react/si/SiGraphql";
import SiHeadlessui from "@mal-icons/react/si/SiHeadlessui";
import SiHeroui from "@mal-icons/react/si/SiHeroui";
import SiHtml5 from "@mal-icons/react/si/SiHtml5";
import SiJavascript from "@mal-icons/react/si/SiJavascript";
import SiJest from "@mal-icons/react/si/SiJest";
import SiMocha from "@mal-icons/react/si/SiMocha";
import SiNextdotjs from "@mal-icons/react/si/SiNextdotjs";
import SiNodedotjs from "@mal-icons/react/si/SiNodedotjs";
import SiNpm from "@mal-icons/react/si/SiNpm";
import SiPnpm from "@mal-icons/react/si/SiPnpm";
import SiPostman from "@mal-icons/react/si/SiPostman";
import SiPrettier from "@mal-icons/react/si/SiPrettier";
import SiPrisma from "@mal-icons/react/si/SiPrisma";
import SiPython from "@mal-icons/react/si/SiPython";
import SiRadixui from "@mal-icons/react/si/SiRadixui";
import SiRedis from "@mal-icons/react/si/SiRedis";
import SiSass from "@mal-icons/react/si/SiSass";
import SiShadcnui from "@mal-icons/react/si/SiShadcnui";
import SiSketch from "@mal-icons/react/si/SiSketch";
import SiTailwindcss from "@mal-icons/react/si/SiTailwindcss";
import SiTerraform from "@mal-icons/react/si/SiTerraform";
import SiTurborepo from "@mal-icons/react/si/SiTurborepo";
import SiTypescript from "@mal-icons/react/si/SiTypescript";
import SiVercel from "@mal-icons/react/si/SiVercel";
import SiVite from "@mal-icons/react/si/SiVite";
import SiVitest from "@mal-icons/react/si/SiVitest";
import TbApi from "@mal-icons/react/tb/TbApi";
import TbBrandAdobeXd from "@mal-icons/react/tb/TbBrandAdobeXd";
import TbBrandAws from "@mal-icons/react/tb/TbBrandAws";
import TbBrandAzure from "@mal-icons/react/tb/TbBrandAzure";
import TbBrandCypress from "@mal-icons/react/tb/TbBrandCypress";
import TbBrandDocker from "@mal-icons/react/tb/TbBrandDocker";
import TbBrandMongodb from "@mal-icons/react/tb/TbBrandMongodb";
import TbBrandReact from "@mal-icons/react/tb/TbBrandReact";
import TbBrandReactNative from "@mal-icons/react/tb/TbBrandReactNative";
import type { ComponentType } from "react";

import type { TechnologyName } from "@/lib/portfolio-content";

type IconComponent = ComponentType<{
  className?: string;
  size?: number | string;
}>;

// Canva mark from Simple Icons 14.15.0 (CC0); trademark rights remain with Canva.
const CanvaIcon = createIcon("0 0 24 24", [
  [
    "path",
    {
      d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z",
    },
  ],
]);

const ExpressIcon = createIcon("0 0 24 24", [
  [
    "path",
    {
      d: "M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.921 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z",
    },
  ],
]);

const ExpoIcon = createIcon("0 0 24 24", [
  [
    "path",
    {
      d: "M0 20.084c.043.53.23 1.063.718 1.778.58.849 1.576 1.315 2.303.567.49-.505 5.794-9.776 8.35-13.29a.761.761 0 011.248 0c2.556 3.514 7.86 12.785 8.35 13.29.727.748 1.723.282 2.303-.567.57-.835.728-1.42.728-2.046 0-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398 1.542C8.267 3.991.33 18.758 0 19.77Z",
    },
  ],
]);

const SocketIoIcon = createIcon("0 0 24 24", [
  [
    "path",
    {
      d: "M11.9362.0137a12.1694 12.1694 0 00-2.9748.378C4.2816 1.5547.5678 5.7944.0918 10.6012c-.59 4.5488 1.7079 9.2856 5.6437 11.6345 3.8608 2.4179 9.0926 2.3199 12.8734-.223 3.3969-2.206 5.5118-6.2277 5.3858-10.2845-.058-4.0159-2.31-7.9167-5.7588-9.9796C16.354.5876 14.1431.0047 11.9362.0137zm-.063 1.696c4.9448-.007 9.7886 3.8137 10.2815 8.9245.945 5.6597-3.7528 11.4125-9.4875 11.5795-5.4538.544-10.7245-4.0798-10.8795-9.5566-.407-4.4338 2.5159-8.8346 6.6977-10.2995a9.1126 9.1126 0 013.3878-.647zm5.0908 3.2248c-2.6869 2.0849-5.2598 4.3078-7.8886 6.4567 1.2029.017 2.4118.016 3.6208.01 1.41-2.165 2.8589-4.3008 4.2678-6.4667zm-5.6647 7.6536c-1.41 2.166-2.86 4.3088-4.2699 6.4737 2.693-2.0799 5.2548-4.3198 7.9017-6.4557a255.4132 255.4132 0 00-3.6318-.018z",
    },
  ],
]);

const technologyIcons = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  Sass: SiSass,
  Python: SiPython,
  "C++": SiCplusplus,
  Go: BxlGoLang,
  React: TbBrandReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Hero UI": SiHeroui,
  "Shadcn UI": SiShadcnui,
  "Radix UI": SiRadixui,
  "Chakra UI": SiChakraui,
  "Material UI": DevMaterialUi,
  "Ant Design": AdAntDesign,
  "Headless UI": SiHeadlessui,
  Bootstrap: SiBootstrap,
  "Framer Motion": SiFramer,
  "React Native": TbBrandReactNative,
  Expo: ExpoIcon,
  Electron: DevElectron,
  "Node.js": SiNodedotjs,
  "Express.js": ExpressIcon,
  REST: TbApi,
  "Socket.io": SocketIoIcon,
  Prisma: SiPrisma,
  GraphQL: SiGraphql,
  MongoDB: TbBrandMongodb,
  PostgreSQL: DevPostgresql,
  Redis: SiRedis,
  ESLint: SiEslint,
  Prettier: SiPrettier,
  Turborepo: SiTurborepo,
  npm: SiNpm,
  Vite: SiVite,
  pnpm: SiPnpm,
  "GitHub Actions": DevGithubActions,
  Vitest: SiVitest,
  Playwright: DevPlaywright,
  Postman: SiPostman,
  Figma: SiFigma,
  "Adobe XD": TbBrandAdobeXd,
  Canva: CanvaIcon,
  Sketch: SiSketch,
  Docker: TbBrandDocker,
  Kubernetes: DevKubernetes,
  Terraform: SiTerraform,
  Jenkins: DevJenkins,
  Vercel: SiVercel,
  AWS: TbBrandAws,
  Azure: TbBrandAzure,
  "Google Cloud": SiGooglecloud,
  DigitalOcean: BxlDigitalocean,
  Linode: DevLinode,
  Jest: SiJest,
  Mocha: SiMocha,
  Chai: SiChai,
  Cypress: TbBrandCypress,
} satisfies Record<TechnologyName, IconComponent>;

type TechnologyIconProps = Readonly<{
  name: TechnologyName;
}>;

export function TechnologyIcon({ name }: TechnologyIconProps) {
  const Icon = technologyIcons[name];

  return <Icon className="shrink-0 text-white/38" size={18} />;
}
