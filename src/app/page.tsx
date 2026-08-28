import { HeroHeader } from "./_components/hero-header";
import { SiteHeader } from "./_components/site-header";
import { SpaceBackground } from "./_components/space-background";

export default function HomePage() {
  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-[#03050a] text-white">
      <SpaceBackground />
      <SiteHeader />
      <HeroHeader />
    </main>
  );
}
