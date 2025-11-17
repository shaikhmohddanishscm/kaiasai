import { Container } from './Container';
import { Section } from './Section';
import { BrandHeading } from './BrandHeading';
import Image from 'next/image';

export function AboutSection() {
  const craftRegions = [
    {
      region: 'Kutch, Gujarat',
      crafts: 'Suf embroidery, Tangliya weave, Block printing',
    },
    {
      region: 'Meghalaya',
      crafts: 'Longpi pottery, Traditional weaving',
    },
    {
      region: 'Manipur',
      crafts: 'Black clay pottery, Bamboo craft',
    },
  ];

  return (
    <Section background="light" padding="lg">
      <Container size="lg">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <BrandHeading level={2} className="text-brand-secondary">
              The Art of Living
            </BrandHeading>

            <div className="space-y-4 text-brand-secondary/80 font-nunito leading-relaxed">
              <p className="text-lg">
                Ikai Asai is an artisanal design house rooted in the rich tapestry of Indian craftsmanship.
                We work directly with skilled artisans and craft clusters across India, bridging centuries-old
                traditions with contemporary aesthetics.
              </p>

              <p>
                Every piece tells a story of hands that shaped clay into poetry, of threads woven with ancestral
                wisdom, of metal transformed through time-honored techniques. We believe in celebrating the makers,
                honoring their craft, and bringing their artistry into modern homes.
              </p>

              <p>
                Our mission extends beyond objects. Through our stories, we invite you into a world where everyday
                living becomes an art form, where handcrafted beauty elevates moments, and where tradition finds
                new expression in contemporary spaces.
              </p>
            </div>
          </div>

          {/* Craft Regions */}
          <div className="space-y-6">
            {/* Video */}
            <div className="relative rounded-lg overflow-hidden mb-8 shadow-lg border-2 border-brand-primary/20">
              <video
                className="w-full h-auto"
                controls
                playsInline
                muted
                loop
                preload="metadata"
              >
                <source src="/video/80df6667a77d4b76b61ce68da3ad6b60.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <h3 className="font-nunito font-bold text-xl text-brand-primary mb-8">
              Our Craft Partnerships
            </h3>

            <div className="space-y-6">
              {craftRegions.map((item, index) => (
                <div
                  key={index}
                  className="border-l-4 border-brand-accent pl-6 py-3 bg-white/50 rounded-r-lg"
                >
                  <h4 className="font-nunito font-bold text-brand-secondary mb-2">
                    {item.region}
                  </h4>
                  <p className="text-sm text-brand-secondary/70 font-nunito">
                    {item.crafts}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-brand-primary/20">
              <p className="text-sm text-brand-secondary/60 font-nunito-sans italic">
                From studio pottery to Kansa metalwork, from terracotta to intricate embroidery—
                each tradition we work with represents generations of mastery.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
