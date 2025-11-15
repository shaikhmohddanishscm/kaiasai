import { Container } from './Container';
import { Section } from './Section';
import { BrandHeading } from './BrandHeading';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function FeaturedCrafts() {
  const crafts = [
    {
      name: 'Studio Pottery',
      description: 'Wheel-thrown ceramics shaped by skilled hands, each piece unique in form and glaze',
      color: 'bg-brand-accent/10',
      image: 'https://images.unsplash.com/photo-1610701467273-3fd3c652df4c?q=80&w=2070',
    },
    {
      name: 'Kansa Metalwork',
      description: 'Ancient bronze alloy craft, creating vessels that balance beauty and function',
      color: 'bg-brand-primary/10',
      image: 'https://images.unsplash.com/photo-1610701467659-ee5a4e67c541?q=80&w=2070',
    },
    {
      name: 'Longpi Pottery',
      description: 'Traditional black pottery from Manipur, crafted without a potter\'s wheel',
      color: 'bg-brand-secondary/10',
      image: 'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?q=80&w=2070',
    },
    {
      name: 'Suf Embroidery',
      description: 'Intricate mirror work and stitching from Kutch, telling stories in thread',
      color: 'bg-brand-sage/10',
      image: 'https://images.unsplash.com/photo-1610832977866-13f7123a5845?q=80&w=2070',
    },
  ];

  return (
    <Section background="white" padding="lg">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <BrandHeading level={2} className="text-brand-secondary mb-4">
            Traditional Crafts We Celebrate
          </BrandHeading>
          <p className="text-brand-secondary/70 font-nunito text-lg">
            Each craft represents a living tradition, carried forward by master artisans
            who breathe life into materials with ancestral wisdom.
          </p>
        </div>

        {/* Crafts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {crafts.map((craft, index) => (
            <Card
              key={index}
              className="border-2 border-brand-primary/10 hover:border-brand-accent/40 transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={craft.image}
                  alt={craft.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 ${craft.color} opacity-20`}></div>
              </div>

              <CardContent className="pt-6">
                <h3 className="font-nunito font-bold text-xl text-brand-secondary mb-3">
                  {craft.name}
                </h3>
                <p className="text-brand-secondary/70 font-nunito text-sm leading-relaxed">
                  {craft.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-brand-secondary/60 font-nunito-sans italic text-sm max-w-2xl mx-auto">
            From clay and metal to thread and wood—these crafts are more than techniques.
            They are stories of communities, keepers of heritage, and bridges between past and present.
          </p>
        </div>
      </Container>
    </Section>
  );
}
