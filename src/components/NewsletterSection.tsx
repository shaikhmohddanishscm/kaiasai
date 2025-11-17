import { Container } from './Container';
import { BrandHeading } from './BrandHeading';
import { BrandButton } from './BrandButton';

export function NewsletterSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-brand-primary text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-accent rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-dark rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <Container size="md" className="relative z-10 px-4">
        <div className="text-center">
          <BrandHeading level={2} className="mb-3 sm:mb-4 text-white text-2xl sm:text-3xl md:text-4xl">
            Stay Connected with Ikai Asai
          </BrandHeading>
          <p className="font-nunito text-base sm:text-lg mb-6 sm:mb-8 text-white/90 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive updates on new collections, artisan stories, 
            and special offers celebrating Indian craftsmanship.
          </p>

          {/* Newsletter Form */}
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 sm:px-6 py-3 sm:py-4 rounded-lg text-brand-secondary font-nunito focus:outline-none focus:ring-2 focus:ring-brand-accent text-sm sm:text-base min-h-12"
              required
            />
            <BrandButton 
              variant="secondary" 
              type="submit"
              className="bg-white text-brand-primary hover:bg-brand-light hover:text-brand-primary px-6 sm:px-8 py-3 sm:py-4 whitespace-nowrap min-h-12"
            >
              Subscribe
            </BrandButton>
          </form>

          <p className="font-nunito-sans text-xs sm:text-sm text-white/70 mt-3 sm:mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Container>
    </section>
  );
}
