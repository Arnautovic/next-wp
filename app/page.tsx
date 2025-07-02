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

const ToDelete = () => {
  return (
    <main className="space-y-20">
      {/* Hero Sekcija */}
      <section className="text-center space-y-8">
        <div className="flex justify-center gap-4">
          <WordPressIcon className="text-primary" width={40} height={40} />
          <NextJsIcon className="text-primary" width={40} height={40} />
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight max-w-4xl mx-auto">
          <Balancer>Premium WordPress &amp; Web Development</Balancer>
        </h1>

        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
          Hi 👋 I&apos;m <strong>Marko Arnautovic</strong>, a verified and top-rated developer on Upwork and Freelancer.com.
        </p>

        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
          We build custom, blazing-fast solutions — from headless WordPress setups and plugin dev to full malware cleanup and UX optimization.
        </p>

        <p className="text-muted-foreground max-w-2xl mx-auto text-base">
          Trusted by clients worldwide for over a decade. Let&apos;s work together to elevate your online presence.
        </p>

        <div className="pt-6">
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            Get Your Free Consultation
          </a>
        </div>
      </section>

      {/* Usluge */}
      <section className="grid md:grid-cols-3 gap-8">
        <ServiceCard
          title="WordPress & PHP"
          description="Custom plugins, headless CMS, and advanced integrations built for performance and flexibility."
          icon={<Pen className="text-primary" size={30} />}
        />
        <ServiceCard
          title="Bug Fixing & Malware Removal"
          description="Fast resolution of critical issues. We fix broken code and clean up compromised sites."
          icon={<Folder className="text-primary" size={30} />}
        />
        <ServiceCard
          title="Site Speed & UX"
          description="Optimization for speed and user experience that drives engagement and conversions."
          icon={<Diamond className="text-primary" size={30} />}
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

