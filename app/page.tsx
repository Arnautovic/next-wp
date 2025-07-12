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
  <Section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
    <Container>
      <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
        {/* Leva strana – tekst */}
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-widest font-medium opacity-80">
            WordPress & Next.js Specialist
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I&apos;m Marko Arnautovic.
            <br />
            I build blazing-fast websites that perform.
          </h1>
          <p className="text-lg opacity-90 max-w-xl">
            With over 12 years of experience, I develop custom WordPress and Next.js solutions for businesses that demand excellence.
          </p>
          <Button size="lg" asChild className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 transition">
            <Link href="#services">
              Explore My Services
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>

        {/* Desna strana – slika */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/markoarnautovic.png"
            alt="Marko Arnautovic"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
            priority
          />
        </div>
      </div>
    </Container>
  </Section>
);

const AboutSection = () => (
  <Section className="py-20 bg-white text-gray-800">
    <Container>
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg opacity-90">
          I&apos;m Marko Arnautovic, a WordPress developer with over 12 years of experience. I specialize in headless WordPress, custom plugin development, and high-performance Next.js sites.
        </p>
      </div>
    </Container>
  </Section>
);

const ServicesSection = () => (
  <Section id="services" className="py-20 bg-gray-50 text-gray-900">
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
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transform transition"
          >
            <CheckCircle className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold">{service}</h3>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const TestimonialsSection = () => (
  <Section className="py-20 bg-white text-gray-800">
    <Container>
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Sara J.", quote: "Marko is an outstanding developer. Fast, precise, and professional." },
          { name: "Ivan D.", quote: "We received a lightning-fast website with a modern layout. Highly recommended!" },
          { name: "Anna L.", quote: "Excellent communication, great quality, and quick delivery. Will work again!" }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <Quote className="mb-2 opacity-60" />
            <p className="italic mb-4">“{item.quote}”</p>
            <p className="font-semibold text-right">— {item.name}</p>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const CTASection = () => (
  <Section className="py-24 bg-blue-600 text-white text-center">
    <Container>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Let&apos;s build your next big project
      </h2>
      <p className="text-lg mb-6 opacity-90">
        Contact me today to get started with a custom, high-performance website.
      </p>
      <Button variant="secondary" size="lg" asChild className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 transition">
        <Link href="/contact">Get in touch</Link>
      </Button>
    </Container>
  </Section>
);
