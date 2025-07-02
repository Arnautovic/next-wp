// Craft Imports
import { Section, Container, Prose } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Ikone
import { WordPressIcon } from "@/components/icons/wordpress";
import { NextJsIcon } from "@/components/icons/nextjs";

export default function Home() {
  return (
    <Section>
      <Container>
        <Intro />
      </Container>
    </Section>
  );
}

const Intro = () => {
  return (
    <main className="space-y-10">
      <div className="flex justify-center gap-4">
        <WordPressIcon className="text-primary" width={36} height={36} />
        <NextJsIcon className="text-primary" width={36} height={36} />
      </div>

      <Prose>
        <h1>
          <Balancer>Welcome to ArnautCode</Balancer>
        </h1>

        <p className="text-lg text-muted-foreground">
          Hello! 👋 I'm <strong>Marko Arnautovic</strong>, a top-rated web developer and verified partner on <strong>Upwork</strong> and <strong>Freelancer.com</strong>.
        </p>

        <p>
          We specialize in <strong>custom PHP solutions</strong>, <strong>WordPress plugin and theme development</strong>, <strong>eCommerce</strong> websites, and <strong>site speed optimization</strong>.
          Whether it’s fixing bugs, cleaning malware, or building tailored features — we handle it all.
        </p>

        <p>
          What we do is not just our work; it’s our passion. That’s why we have long-term clients we’ve been collaborating with for years.
        </p>

        <p>
          <strong>If you have an urgent problem, we can fix it fast.</strong> Whatever you need for the web — we can do it.
        </p>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow hover:scale-[1.03] transition-transform font-semibold"
          >
            FREE CONSULTATIONS
          </a>
        </div>
      </Prose>
    </main>
  );
};
