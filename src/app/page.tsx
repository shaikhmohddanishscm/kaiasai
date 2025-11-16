import {
  Hero,
  FeaturesSection,
  AboutSection,
  CategoriesSection,
  CraftsSection,
  VideoShowcaseSection,
  BlogSection,
  TestimonialsSection,
  StatsSection,
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
      <StatsSection />
      <BlogSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
