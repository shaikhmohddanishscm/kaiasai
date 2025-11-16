import { Container } from './Container';
import { BrandHeading } from './BrandHeading';
import { BrandButton } from './BrandButton';

const crafts = [
  {
    name: 'Terracotta',
    region: 'Maharashtra',
    description: 'Fine terracotta handcrafted by gifted craftsmen, channeling the creative energy of nature\'s elements.',
    color: 'brand-primary',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800',
  },
  {
    name: 'Kansa',
    region: 'Orissa',
    description: 'Healing metal of Ayurveda, crafted from pure bronze in a 4:1 proportion of copper to tin.',
    color: 'brand-dark',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800',
  },
  {
    name: 'Longpi',
    region: 'Manipur',
    description: 'Distinguished by its surreal black glow, crafted by hand-patting clay with an age-old low-firing process.',
    color: 'brand-secondary',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800',
  },
  {
    name: 'Glasswork',
    region: 'Firozabad',
    description: 'Centuries-old glass blowing traditions creating contemporary glassware through mouth-blown techniques.',
    color: 'brand-teal',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800',
  },
];

export function CraftsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <Container size="lg">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <BrandHeading level={2} className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">
            Celebrating Indian Crafts
          </BrandHeading>
          <p className="text-brand-secondary/80 font-nunito text-base sm:text-lg max-w-2xl mx-auto">
            Each craft tells a story of heritage, skill, and timeless beauty passed down through generations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4">
          {crafts.map((craft, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={craft.image}
                  alt={craft.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'}}></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <p className="text-brand-accent font-nunito-sans italic text-xs sm:text-sm mb-1 sm:mb-2">
                  {craft.region}
                </p>
                <h3 className="font-nunito font-bold text-xl sm:text-2xl mb-1 sm:mb-2">
                  {craft.name}
                </h3>
                <p className="text-white/90 font-nunito text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4">
                  {craft.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-${craft.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <BrandButton variant="outline" className="px-8 py-4 text-lg">
            Explore All Crafts
          </BrandButton>
        </div>
      </Container>
    </section>
  );
}
