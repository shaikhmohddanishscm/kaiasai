import {
  Hero,
  AboutSection,
  FeaturedCrafts,
  BlogSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <FeaturedCrafts />
      <BlogSection />
      <Footer />
    </div>
  );
}
