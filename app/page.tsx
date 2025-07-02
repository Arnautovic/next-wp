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
    <main className="space-y-6">
      <Prose>
        <h1>
          <Balancer>Welcome to ArnautCode — Custom WordPress Solutions</Balancer>
        </h1>

        <p>
          Hello! 👋 I'm <strong>Marko Arnautovic</strong>, a top-rated developer and verified partner on <strong>Upwork</strong> and <strong>Freelancer.com</strong>.
        </p>
        <p>
          We specialize in custom <strong>WordPress development</strong>, <strong>PHP solutions</strong>, plugin and theme creation, bug fixing, malware removal, and speed optimization.
        </p>
        <p>
          Whether you're building a new site, need urgent fixes, or want to scale your existing project — we’re here to help.
        </p>
        <p>
          What we do is not just work — it's our passion. That’s why we’ve built long-term relationships with clients around the world.
        </p>
        <p className="font-semibold text-primary">
          ✅ FREE CONSULTATIONS — Let’s fix your web challenges fast!
        </p>
      </Prose>

      <div className="flex justify-center gap-4">
        <WordPressIcon className="text-primary" width={36} height={36} />
        <NextJsIcon className="text-primary" width={36} height={36} />
      </div>

      {/* Možeš da ostaviš ovaj deo kao u originalu */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {/* ... tvoj postojeći grid sa <Link> komponentama */}
      </div>
    </main>
  );
};

