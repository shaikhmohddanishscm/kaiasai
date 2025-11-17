import {
  Hero,
  FeaturesSection,
  AboutSection,
  CategoriesSection,
  CraftsSection,
  VideoShowcaseSection,
  BlogSection,
  TestimonialsSection,
  NewsletterSection,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeaturesSection />
      <AboutSection />
      <CategoriesSection />
      <CraftsSection />
      <VideoShowcaseSection />
      <BlogSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
