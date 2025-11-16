import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { Container } from './Container';
import { brandConfig } from '@/config/brand';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070"
          alt="Indian pottery and crafts"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-light/80 to-white/85"></div>
      </div>

      <Container size="lg" className="text-center relative z-10 px-4">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
          {/* Logo */}
          <Logo variant="main" width={280} height={98} priority className="object-contain sm:w-[350px] sm:h-[122px] md:w-[400px] md:h-[140px]" />

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-brand-primary font-nunito-sans italic max-w-2xl px-4">
            {brandConfig.tagline}
          </p>

          {/* Main Heading */}
          <h1 className="font-nunito font-light text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-brand-secondary max-w-4xl leading-tight px-4">
            Celebrating Indian Craftsmanship Through Stories & Design
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-brand-secondary/80 font-nunito max-w-2xl leading-relaxed px-4">
            An artisanal design house connecting traditional Indian craft with contemporary living.
            Discover stories of handcrafted beauty from Kutch to Meghalaya.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto px-4">
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 sm:px-8 py-6 sm:py-4 text-base sm:text-lg min-h-12"
            >
              Explore Stories
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary/10 px-6 sm:px-8 py-6 sm:py-4 text-base sm:text-lg min-h-12"
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
