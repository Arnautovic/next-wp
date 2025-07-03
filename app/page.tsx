import { Section, Container, Prose } from "@/components/craft";
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
      <BlogPreview />
      <CTASection />
    </>
  );
}

const HeroSection = () => (
  <Section className="text-center py-24 bg-gradient-to-b from-gray-50 to-white">
    <Container>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Marko Arnautovic Web developer
      </h1>
      <p className="text-xl text-muted-foreground mb-6">
        Brzina. SEO. Dizajn. Sve što vaš projekat treba – mi razvijamo.
      </p>
      <Button size="lg">
        <Link href="#usluge" className="flex items-center gap-2">
          Pogledaj usluge <ArrowRight size={16} />
        </Link>
      </Button>
    </Container>
  </Section>
);

const AboutSection = () => (
  <Section className="py-20 bg-white">
    <Container>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">O nama</h2>
        <p className="text-muted-foreground text-lg">
          Sa preko 12 godina iskustva u WordPress razvoju, radimo na projektima
          koji zahtevaju preciznost, brzinu i sigurnost. Specijalizovani za
          headless arhitekture i napredne funkcionalnosti.
        </p>
      </div>
    </Container>
  </Section>
);

const ServicesSection = () => (
  <Section id="usluge" className="py-20 bg-gray-50">
    <Container>
      <h2 className="text-3xl font-bold text-center mb-12">Naše usluge</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Custom WordPress razvoj",
          "Next.js frontend integracija",
          "Plugin & API razvoj",
          "WooCommerce rešenja",
          "SEO optimizacija",
          "Održavanje & podrška"
        ].map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <CheckCircle className="text-green-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold">{service}</h3>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const TestimonialsSection = () => (
  <Section className="py-20 bg-white">
    <Container>
      <h2 className="text-3xl font-bold text-center mb-12">Šta klijenti kažu</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            name: "Sara J.",
            quote: "Marko je neverovatan developer. Sve je bilo brzo, precizno i profesionalno.",
          },
          {
            name: "Ivan D.",
            quote: "Dobili smo sajt koji radi savršeno i izgleda moderno. Sve preporuke!",
          },
          {
            name: "Anna L.",
            quote: "Odlična komunikacija, sjajan kvalitet i brzina isporuke. Vraćamo se opet!",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
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

const BlogPreview = () => (
  <Section className="py-20 bg-gray-50">
    <Container>
      <h2 className="text-3xl font-bold text-center mb-12">Najnoviji članci</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((id) => (
          <div key={id} className="bg-white rounded-xl p-6 shadow hover:shadow-md">
            <Image
              src={`https://source.unsplash.com/random/800x600?sig=${id}`}
              alt="Post"
              width={600}
              height={400}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Naslov članka {id}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Kratak opis članka koji dolazi iz WordPress-a.
            </p>
            <Link href={`/blog/post-${id}`} className="text-blue-600 text-sm">
              Pročitaj više →
            </Link>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const CTASection = () => (
  <Section className="py-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
    <Container>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Spreman za sledeći projekat?
      </h2>
      <p className="text-lg mb-6">
        Kontaktirajte nas danas i zajedno ćemo napraviti nešto sjajno.
      </p>
      <Button variant="secondary" size="lg" asChild>
        <Link href="/kontakt">Pošalji poruku</Link>
      </Button>
    </Container>
  </Section>
);
