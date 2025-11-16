import { Container } from './Container';
import { BrandHeading } from './BrandHeading';
import Link from 'next/link';

const categories = [
  {
    name: 'Dinnerware',
    description: 'Handcrafted plates, bowls, and serving pieces',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600',
    color: 'brand-primary',
    href: '#dinnerware',
  },
  {
    name: 'Serveware',
    description: 'Elegant serving bowls, trays, and platters',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=600',
    color: 'brand-accent',
    href: '#serveware',
  },
  {
    name: 'Barware',
    description: 'Exquisite decanters, glasses, and accessories',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600',
    color: 'brand-teal',
    href: '#barware',
  },
  {
    name: 'Table Linen',
    description: 'Beautifully woven runners, mats, and napkins',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=600',
    color: 'brand-sage',
    href: '#table-linen',
  },
  {
    name: 'Décor',
    description: 'Artistic vases, planters, and home accents',
    image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=600',
    color: 'brand-dark',
    href: '#decor',
  },
  {
    name: 'Drinkware',
    description: 'Traditional cups, tumblers, and vessels',
    image: 'https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?q=80&w=600',
    color: 'brand-secondary',
    href: '#drinkware',
  },
];

export function CategoriesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <Container size="lg">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <BrandHeading level={2} className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">
            Explore Our Collections
          </BrandHeading>
          <p className="text-brand-secondary/80 font-nunito text-base sm:text-lg max-w-2xl mx-auto">
            Discover handcrafted pieces for every corner of your home
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)'}}></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-4 sm:p-6">
                <h3 className="font-nunito font-bold text-xl sm:text-2xl text-white mb-1 sm:mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                  {category.name}
                </h3>
                <p className="font-nunito text-white/90 text-xs sm:text-sm">
                  {category.description}
                </p>
                
                {/* Hover arrow */}
                <div className="mt-3 sm:mt-4 flex items-center text-brand-accent font-nunito font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">Explore</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
