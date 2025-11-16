import { Container } from './Container';

const stats = [
  {
    number: '500+',
    label: 'Artisan Partners',
    color: 'brand-primary',
  },
  {
    number: '15+',
    label: 'Traditional Crafts',
    color: 'brand-accent',
  },
  {
    number: '10K+',
    label: 'Happy Customers',
    color: 'brand-teal',
  },
  {
    number: '12',
    label: 'States Represented',
    color: 'brand-sage',
  },
];

export function StatsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-brand-secondary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-brand-dark opacity-30"></div>
      <Container size="lg" className="relative z-10 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`font-nunito font-bold text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2 text-${stat.color}`}>
                {stat.number}
              </div>
              <div className="font-nunito text-white/90 text-xs sm:text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <p className="font-nunito-sans italic text-white/80 text-base sm:text-lg max-w-3xl mx-auto">
            Connecting communities, preserving heritage, and bringing the beauty of Indian craftsmanship 
            into homes across the world
          </p>
        </div>
      </Container>
    </section>
  );
}
