import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Quote } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

const HeroSection = () => (
  <Section className="py-24 bg-background text-foreground">
    <Container>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Leva strana – tekst */}
        <div>
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            WordPress & Next.js Specialist
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Hi, I&apos;m Marko Arnautovic.
            <br />
            I build blazing-fast websites that perform.
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            With over 12 years of experience, I develop custom WordPress and Next.js solutions for serious businesses.
          </p>
          <Button size="lg" asChild>
            <Link href="#services">Explore My Services</Link>
          </Button>
        </div>

        {/* Desna strana – slika */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/arnautcode-logo-min.png"
            alt="Marko Arnautovic"
            width={400}
            height={400}
            className="rounded-2xl shadow-xl dark:shadow-white/10"
            priority
          />
        </div>
      </div>
    </Container>
  </Section>
);


const AboutSection = () => (
  <Section className="py-20 bg-background text-foreground">
    <Container>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground text-lg">
          I&apos;m Marko Arnautovic, a WordPress developer with over 12 years of experience.
          I specialize in headless WordPress, custom plugin development, and high-performance websites built with Next.js.
        </p>
      </div>
    </Container>
  </Section>
);

const ServicesSection = () => (
  <Section id="services" className="py-20 bg-muted/10 text-foreground">
    <Container>
      <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Custom WordPress Development",
          "Next.js Frontend Integration",
          "Custom Plugin & API Development",
          "WooCommerce Solutions",
          "SEO Optimization",
          "Website Maintenance & Support"
        ].map((service, index) => (
          <div
            key={index}
            className="p-6 bg-background rounded-2xl shadow hover:shadow-lg transition"
          >
            <CheckCircle className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-semibold">{service}</h3>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const TestimonialsSection = () => (
  <Section className="py-20 bg-background text-foreground">
    <Container>
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            name: "Sara J.",
            quote: "Marko is an outstanding developer. Fast, precise, and professional.",
          },
          {
            name: "Ivan D.",
            quote: "We received a lightning-fast website with a modern layout. Highly recommended!",
          },
          {
            name: "Anna L.",
            quote: "Excellent communication, great quality, and quick delivery. Will work again!",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-muted/10 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <Quote className="mb-2 text-muted-foreground" />
            <p className="italic mb-4">{item.quote}</p>
            <p className="font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const CTASection = () => (
  <Section className="py-24 bg-primary text-primary-foreground text-center">
    <Container>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Let&apos;s build your next big project
      </h2>
      <p className="text-lg mb-6">
        Contact me today to get started with a custom, high-performance website.
      </p>
      <Button variant="secondary" size="lg" asChild>
        <Link href="/contact">Get in touch</Link>
      </Button>
    </Container>
  </Section>
);
