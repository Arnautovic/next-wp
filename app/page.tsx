import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}

const Hero = () => (
  <Section className="py-32 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-[3fr_2fr] gap-12 items-center"
      >
        <div>
          <p className="text-sm uppercase tracking-widest mb-4">
            WordPress & Next.js Specialist
          </p>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Hi, I’m Marko Arnautovic.<br />
            I build blazing‑fast websites.
          </h1>
          <p className="text-lg max-w-xl mb-8 opacity-90">
            With over 12 years of experience, I specialize in headless WordPress,
            custom plugins, and performance-driven Next.js sites.
          </p>
          <Button size="lg" asChild className="shadow-lg">
            <Link href="#services">
              Explore Services <ArrowRight className="ml-2 inline" />
            </Link>
          </Button>
        </div>

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/markoarnautovic.png"
            alt="Marko Arnautovic"
            width={400}
            height={400}
            className="rounded-full shadow-2xl"
            priority
          />
        </motion.div>
      </motion.div>
    </Container>
  </Section>
);

const About = () => (
  <Section className="py-24 bg-white text-gray-800">
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center space-y-4"
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg">
          I’m a WordPress developer with 12+ years of experience in
          headless architecture, custom plugin development, and performant
          Next.js deployments.
        </p>
      </motion.div>
    </Container>
  </Section>
);

const Services = () => (
  <Section id="services" className="py-24 bg-gray-50 text-gray-900">
    <Container>
      <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Custom WordPress Development",
          "Next.js Frontend Integration",
          "Plugin & API Creation",
          "WooCommerce Solutions",
          "SEO Optimization",
          "Ongoing Maintenance"
        ].map((svc) => (
          <Card
            key={svc}
            asChild
            className="hover:scale-105 transition-transform"
          >
            <CardContent className="flex flex-col items-center p-6">
              <CheckCircle size={36} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-center">{svc}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  </Section>
);

const Testimonials = () => (
  <Section className="py-24 bg-white text-gray-800">
    <Container>
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Sara J.", quote: "Fast, precise, and professional." },
          { name: "Ivan D.", quote: "Lightning-fast sites, modern layouts." },
          { name: "Anna L.", quote: "Great communication and quality." }
        ].map((t) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 shadow-md">
              <CardHeader>
                <Quote className="text-gray-400" />
              </CardHeader>
              <CardContent>
                <p className="italic mb-4">“{t.quote}”</p>
                <p className="font-semibold text-right">— {t.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  </Section>
);

const CTA = () => (
  <Section className="py-32 bg-blue-600 text-white text-center">
    <Container>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-4xl font-bold">
          Let’s build your next big project
        </h2>
        <p className="text-lg max-w-xl mx-auto">
          Reach out today for custom, high-performance web solutions.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </motion.div>
    </Container>
  </Section>
);
