// Craft Imports
import { Section, Container, Prose } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Next.js Imports
import Link from "next/link";

// Icons
import { File, Pen, Tag, Diamond, User, Folder } from "lucide-react";
import { WordPressIcon } from "@/components/icons/wordpress";
import { NextJsIcon } from "@/components/icons/nextjs";

// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <Section>
      <Container>
        <ToDelete />
      </Container>
    </Section>
  );
}

// This is just some example TSX
const ToDelete = () => {
  return (
    <main className="space-y-12">
      <section className="text-center space-y-6">
        {/* Ikone */}
        <div className="flex justify-center gap-4">
          <WordPressIcon className="text-primary" width={36} height={36} />
          <NextJsIcon className="text-primary" width={36} height={36} />
        </div>

        {/* Naslov */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
          <Balancer>
            Welcome to ArnautCode — Custom WordPress & Web Solutions
          </Balancer>
        </h1>

        {/* Uvodni tekst */}
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
         Test Hello! 👋 I&apos;m <strong>Marko Arnautovic</strong>, a top-rated developer
          and verified partner on <strong>Upwork</strong> and <strong>Freelancer.com</strong>.
        </p>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We specialize in high-performance WordPress development, PHP-based custom solutions,
          theme/plugin creation, malware removal, bug fixing &amp; blazing-fast site speed.
        </p>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          What we do is not just work — it&apos;s our passion. That&apos;s why we&apos;ve been building
          long-term partnerships with clients from all over the world.
        </p>

        {/* CTA dugme */}
        <div className="pt-4">
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow hover:scale-[1.03] transition-transform font-semibold"
          >
            FREE CONSULTATIONS
          </a>
        </div>
      </section>

      {/* Usluge */}
      <section className="grid md:grid-cols-3 gap-6 text-left">
        <ServiceCard
          title="WordPress & PHP"
          description="Custom plugins, headless CMS, and advanced integrations built for performance and flexibility."
          icon={<Pen className="text-primary" size={28} />}
        />
        <ServiceCard
          title="Bug Fixing & Malware Removal"
          description="Fast resolution of critical issues. We fix broken code and clean up compromised sites."
          icon={<Folder className="text-primary" size={28} />}
        />
        <ServiceCard
          title="Site Speed & UX"
          description="Optimization for speed and user experience that drives engagement and conversions."
          icon={<Diamond className="text-primary" size={28} />}
        />
      </section>
    </main>
  );
};

const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="border bg-accent/30 backdrop-blur rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-[1.01]">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

