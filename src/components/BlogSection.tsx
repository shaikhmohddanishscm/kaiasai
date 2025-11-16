import { Container } from './Container';
import { Section } from './Section';
import { BrandHeading } from './BrandHeading';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import blogsData from '../../public/blogs.json';

// Helper function to create URL-friendly slug
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function BlogSection() {
  // Get first 3 blogs
  const articles = blogsData.slice(0, 3);

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
          {articles.map((article, index) => {
            const slug = createSlug(article.title);
            return (
              <Link key={index} href={`/blogs/${slug}`}>
                <Card className="group hover:shadow-lg transition-shadow duration-300 border-brand-primary/10 overflow-hidden h-full cursor-pointer">
                  {/* Featured Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={article.image_url}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Decorative Top Border */}
                  <div className="h-1 bg-linear-to-r from-brand-accent via-brand-primary to-brand-sage"></div>

                  <CardHeader className="space-y-3 pb-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-brand-accent font-nunito-sans font-bold uppercase tracking-wider">
                        Craft Stories
                      </span>
                      <span className="text-brand-secondary/50 font-nunito">
                        {article.date}
                      </span>
                    </div>

                    <h3 className="font-nunito font-bold text-xl text-brand-secondary group-hover:text-brand-primary transition-colors leading-tight">
                      {article.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-brand-secondary/70 font-nunito text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-brand-primary/10">
                      <span className="text-xs text-brand-secondary/50 font-nunito">
                        {article.author}
                      </span>
                      <span className="text-brand-primary group-hover:text-brand-accent font-nunito text-sm">
                        Read More →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/blogs">
            <Button
              size="lg"
              variant="outline"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors px-10"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
