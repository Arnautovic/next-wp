// Craft Imports
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Next.js
import Image from "next/image";

// Ikone (po želji)
import { WordPressIcon } from "@/components/icons/wordpress";
import { NextJsIcon } from "@/components/icons/nextjs";

// Home stranica
export default function Home() {
  return (
    <Section className="bg-background text-foreground">
      <Container>
        <Hero />
      </Container>
    </Section>
  );
}

// Hero komponenta
const Hero = () => {
  return (
    <div className="text-center space-y-8">
      {/* Ikone WordPress i Next.js */}
      <div className="flex justify-center gap-4">
        <WordPressIcon className="text-primary" width={36} height={36} />
        <NextJsIcon className="text-primary" width={36} height={36} />
      </div>

      {/* Naslov */}
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
        <Balancer>Welcome to ArnautCode — Tailored Web Solutions</Balancer>
      </h1>

      {/* Podnaslov */} 
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        Hello! 👋 I'm <strong>Marko Arnautovic</strong>, a top-rated developer and verified partner on <strong>Upwork</strong> and <strong>Freelancer.com</strong>.
        We specialize in high-performance web development — WordPress, custom plugins, theme development, security, speed optimization, and fixing all bugs.
      </p>

      {/* Usluge */}
      <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
        <ServiceCard
          title="Custom PHP & WordPress"
          desc="From unique plugin logic to deeply customized themes and headless CMS integration."
          img="/demo/php-wordpress.jpg"
        />
        <ServiceCard
          title="Malware Removal & Bug Fixing"
          desc="Urgent issues resolved quickly. We fix what others break — and make it better."
          img="/demo/malware-fix.jpg"
        />
        <ServiceCard
          title="Web Design & Speed Optimization"
          desc="Elegant, blazing-fast websites crafted for performance and conversions."
          img="/demo/speed-design.jpg"
        />
      </div>

      {/* Zaključak */}
      <p className="text-muted-foreground text-base max-w-xl mx-auto mt-10">
        What we do is not just our work; it’s our passion. That’s why we have long-term clients with whom we’ve been collaborating for years. <br />
        <span className="text-foreground font-semibold">If you have an urgent problem, we can fix it very quickly. Whatever you need for the web — we can do it.</span>
      </p>

      {/* CTA dugme */}
      <div className="mt-8">
        <a
          href="#contact"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow hover:scale-[1.03] transition-transform font-semibold"
        >
          FREE CONSULTATIONS
        </a>
      </div>
    </div>
  );
};

// Kartica usluge sa slikom
const ServiceCard = ({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-card hover:shadow-xl transition-shadow">
      <div className="relative h-40 w-full">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{desc}</p>
      </div>
    </div>
  );
};
