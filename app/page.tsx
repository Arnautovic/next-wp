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



      <section className="pt-20">
  <div className="container mx-auto px-4 text-center space-y-10">
    <h2 className="text-3xl font-bold">What Our Clients Say</h2>

    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          name: "Sarah L.",
          role: "eCommerce Founder",
          text: "Marko exceeded our expectations. Our WordPress store is faster and cleaner than ever. Truly a partner we trust.",
        },
        {
          name: "David M.",
          role: "Agency Owner",
          text: "Quick, professional, and proactive! He cleaned malware and optimized the site speed in no time. Highly recommended!",
        },
        {
          name: "Ana R.",
          role: "Marketing Manager",
          text: "Reliable, responsive, and talented — exactly what we needed for our custom plugin project. 10/10!",
        },
      ].map((testimonial, i) => (
        <div
          key={i}
          className="bg-background border border-border p-6 rounded-2xl text-left shadow-md hover:shadow-lg transition-all"
        >
          {/* Google logo */}
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium text-sm text-muted-foreground">Google Review</span>
          </div>

          {/* Zvezdice */}
          <div className="flex gap-1 text-yellow-400 mb-3">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.387 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.387 2.46c-.783.57-1.838-.196-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
          </div>

          {/* Tekst */}
          <p className="text-muted-foreground mb-4">&ldquo;{testimonial.text}&rdquo;</p>

          {/* Autor */}
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
      ))}
    </div>
  </div>
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

