// Craft Imports
import { Section, Container, Prose } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Next.js Imports
import Link from "next/link";

// Icons
import { Pen, File, User, Tag, Diamond, Folder } from "lucide-react";
import { WordPressIcon } from "@/components/icons/wordpress";
import { NextJsIcon } from "@/components/icons/nextjs";

// Hero Section
export default function Home() {
  return (
    <Section>
      <Container>
        <Hero />
        <GridLinks />
      </Container>
    </Section>
  );
}

// Modern Hero Section with Typography & Icons
const Hero = () => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <div className="flex justify-center gap-4 mb-4">
        <WordPressIcon className="text-primary" width={36} height={36} />
        <NextJsIcon className="text-primary" width={36} height={36} />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        <Balancer>
          Build Modern WordPress Sites with Next.js
        </Balancer>
      </h1>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
    </div>
  );
};

// Grid of Links with Icons and Animation
const GridLinks = () => {
  const links = [
    {
      title: "Posts",
      description: "All posts from your WordPress",
      href: "/posts",
      icon: <Pen size={28} />,
    },
    {
      title: "Pages",
      description: "Custom pages from your WordPress",
      href: "/pages",
      icon: <File size={28} />,
    },
    {
      title: "Authors",
      description: "List of all WordPress authors",
      href: "/posts/authors",
      icon: <User size={28} />,
    },
    {
      title: "Tags",
      description: "Explore content by tags",
      href: "/posts/tags",
      icon: <Tag size={28} />,
    },
    {
      title: "Categories",
      description: "Discover WordPress categories",
      href: "/posts/categories",
      icon: <Diamond size={28} />,
    },
    {
      title: "Documentation",
      description: "How to use next-wp effectively",
      href: "https://github.com/9d8dev/next-wp/blob/main/README.md",
      icon: <Folder size={28} />,
      external: true,
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link, idx) => {
        const Wrapper = link.external ? "a" : Link;
        return (
          <Wrapper
            key={idx}
            href={link.href}
            className="border border-muted p-5 rounded-2xl bg-accent/40 hover:bg-accent/60 transition-all duration-200 hover:scale-[1.02] flex flex-col gap-4 shadow-sm"
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            <div className="text-primary">{link.icon}</div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{link.title}</h3>
              <p className="text-muted-foreground text-sm">
                {link.description}
              </p>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
};
