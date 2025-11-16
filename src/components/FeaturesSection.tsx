import { Container } from './Container';
import { BrandHeading } from './BrandHeading';

const features = [
  {
    icon: '🏺',
    title: 'Handcrafted Heritage',
    description: 'Every piece is meticulously handcrafted by skilled artisans, preserving centuries-old Indian craft traditions.',
    color: 'brand-primary',
  },
  {
    icon: '🌿',
    title: 'Sustainable & Eco-Friendly',
    description: 'Made from natural materials with traditional techniques that honor both craft and environment.',
    color: 'brand-sage',
  },
  {
    icon: '✨',
    title: 'Contemporary Design',
    description: 'Traditional craftsmanship meets modern aesthetics, creating timeless pieces for contemporary living.',
    color: 'brand-teal',
  },
  {
    icon: '🎨',
    title: 'Artisan Stories',
    description: 'Each product carries the story of its maker, connecting you to the rich tapestry of Indian artisanship.',
    color: 'brand-accent',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-brand-light">
      <Container size="lg">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <BrandHeading level={2} className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">
            Why Choose ikai Asai
          </BrandHeading>
          <p className="text-brand-secondary/80 font-nunito text-base sm:text-lg max-w-2xl mx-auto">
            Discover the perfect blend of tradition and modernity in every handcrafted piece
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-5 sm:p-6 rounded-lg bg-white hover:shadow-lg transition-all duration-300 border border-brand-primary/10 hover:border-brand-primary/30"
            >
              <div className={`text-4xl sm:text-5xl mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className={`font-nunito font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-brand-secondary/70 font-nunito text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
