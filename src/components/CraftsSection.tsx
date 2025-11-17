import { Container } from './Container';
import { BrandHeading } from './BrandHeading';
import { BrandButton } from './BrandButton';

const crafts = [
  {
    name: 'Terracotta',
    region: 'Maharashtra',
    description: 'Fine terracotta handcrafted by gifted craftsmen, channeling the creative energy of nature\'s elements.',
    color: 'brand-primary',
    image: '/images/terracotta.jpg',
  },
  {
    name: 'Kansa',
    region: 'Orissa',
    description: 'Healing metal of Ayurveda, crafted from pure bronze in a 4:1 proportion of copper to tin.',
    color: 'brand-dark',
    image: '/images/kansa-kaam_1d5c06ee-f0a8-4150-a30d-a8d4c8f858ed.jpg',
  },
  {
    name: 'Longpi',
    region: 'Manipur',
    description: 'Distinguished by its surreal black glow, crafted by hand-patting clay with an age-old low-firing process.',
    color: 'brand-secondary',
    image: '/images/studio-pottery.jpg',
  },
  {
    name: 'Glasswork',
    region: 'Firozabad',
    description: 'Centuries-old glass blowing traditions creating contemporary glassware through mouth-blown techniques.',
    color: 'brand-teal',
    image: '/images/glasswork-new.webp',
  },
];

export function CraftsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="text-center mb-12 md:mb-16 px-4">
        <h2 className="font-nunito font-light text-2xl md:text-3xl text-brand-secondary mb-3">
          Celebrating Indian Crafts
        </h2>
        <p className="text-brand-secondary/60 font-nunito text-sm max-w-xl mx-auto">
          Each craft tells a story of heritage, skill, and timeless beauty passed down through generations
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {crafts.map((craft, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={craft.image}
                  alt={craft.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'}}></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-brand-accent font-nunito text-xs tracking-wider uppercase mb-1">
                  {craft.region}
                </p>
                <h3 className="font-nunito font-light text-xl mb-2">
                  {craft.name}
                </h3>
                <p className="text-white/80 font-nunito text-xs leading-relaxed">
                  {craft.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
