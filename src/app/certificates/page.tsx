import TbExternalLink from "@mal-icons/react/tb/TbExternalLink";
import type { Metadata } from "next";

import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = {
  title: "Certificates & Evidence | M. Anas Latif",
  description:
    "Public credentials and inspectable evidence of M. Anas Latif's software engineering work.",
};

const evidence = [
  {
    label: "Source code",
    title: "Public GitHub profile",
    description: "Repositories, history, and current open-source work.",
    href: "https://github.com/MAnasLatif",
  },
  {
    label: "Design systems",
    title: "MAL UI",
    description: "A React component system published under the MIT license.",
    href: "https://github.com/MAnasLatif/mal-ui",
  },
  {
    label: "Technical leadership",
    title: "CTO Skill",
    description: "A public, evidence-driven workflow for technical decisions.",
    href: "https://github.com/MAnasLatif/CTO",
  },
] as const;

export default function CertificatesPage() {
  return (
    <main className="relative z-10">
      <PageIntro
        index="06"
        eyebrow="Credentials"
        title="Certificates & evidence"
        description="No certificates are currently listed on the public profiles reviewed for this portfolio. Verified credentials can be added here when available."
      />

      <section className="mx-auto max-w-360 px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="border-t border-white/12 py-10">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
                Evidence of practice
              </p>
              <p className="mt-5 max-w-sm leading-7 text-white/42">
                In the meantime, these public artifacts let visitors inspect the
                work directly instead of relying on unsupported claims.
              </p>
            </div>
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {evidence.map((item, index) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-80 flex-col bg-[#03050a] p-7"
                >
                  <span className="flex justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/25">
                    <span>0{index + 1}</span>
                    <span className="inline-flex items-center gap-2">
                      {item.label}
                      <TbExternalLink size={12} />
                    </span>
                  </span>
                  <h2 className="mt-auto text-2xl font-bold text-white/80 transition-colors group-hover:text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 leading-7 text-white/40">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
