import { Container } from './Container';
import { Section } from './Section';
import { BrandHeading } from './BrandHeading';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function BlogSection() {
  const articles = [
    {
      category: 'Craft Stories',
      title: 'Studio Pottery: Where Clay Meets Poetry',
      excerpt: 'Discover the ancient art of wheel-thrown ceramics, where skilled artisans transform humble clay into objects of beauty, each piece bearing the unique imprint of its maker.',
      date: 'October 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1610701467273-3fd3c652df4c?q=80&w=2070',
    },
    {
      category: 'Craft Stories',
      title: 'Kansa: The Ancient Alloy of Wellbeing',
      excerpt: 'Journey into the world of bronze metalwork, where traditional craftsmen create vessels that have graced Indian tables for millennia, believed to balance body and spirit.',
      date: 'September 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1610701467659-ee5a4e67c541?q=80&w=2070',
    },
    {
      category: 'Craft Stories',
      title: 'Longpi Pottery: Manipur\'s Black Gold',
      excerpt: 'Experience the unique tradition of Longpi pottery, crafted without a potter\'s wheel, where earth and serpentine stone merge to create vessels of timeless elegance.',
      date: 'November 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?q=80&w=2070',
    },
  ];

  return (
    <Section background="light" padding="lg">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <BrandHeading level={2} className="text-brand-secondary mb-4">
            Stories & Inspiration
          </BrandHeading>
          <p className="text-brand-secondary/70 font-nunito text-lg">
            Thoughtful reflections on design, craftsmanship, and the art of living beautifully.
            Discover how handcrafted objects elevate everyday moments.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300 border-brand-primary/10 overflow-hidden"
            >
              {/* Featured Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Decorative Top Border */}
              <div className="h-1 bg-gradient-to-r from-brand-accent via-brand-primary to-brand-sage"></div>

              <CardHeader className="space-y-3 pb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-accent font-nunito-sans font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-brand-secondary/50 font-nunito">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-nunito font-bold text-xl text-brand-secondary group-hover:text-brand-primary transition-colors leading-tight">
                  {article.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-brand-secondary/70 font-nunito text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-brand-primary/10">
                  <span className="text-xs text-brand-secondary/50 font-nunito">
                    {article.date}
                  </span>
                  <Button
                    variant="link"
                    className="text-brand-primary hover:text-brand-accent p-0 h-auto font-nunito text-sm"
                  >
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors px-10"
          >
            View All Articles
          </Button>
        </div>
      </Container>
    </Section>
  );
}
