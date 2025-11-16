import { Container } from './Container';
import { BrandHeading } from './BrandHeading';

export function VideoShowcaseSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-brand-secondary relative overflow-hidden">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-brand-dark/20"></div>
      
      <Container size="lg" className="relative z-10 px-4">
        <div className="text-center mb-8 sm:mb-12">
          <BrandHeading level={2} className="mb-3 sm:mb-4 text-white text-2xl sm:text-3xl md:text-4xl">
            Craftsmanship in Motion
          </BrandHeading>
          <p className="text-white/90 font-nunito text-base sm:text-lg max-w-2xl mx-auto">
            Witness the artistry and dedication behind every handcrafted piece
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-brand-accent/30">
            {/* Video Element */}
            <video
              className="w-full h-auto"
              controls
              playsInline
              preload="metadata"
              poster="/video/80df6667a77d4b76b61ce68da3ad6b60.mp4#t=0.1"
            >
              <source src="/video/80df6667a77d4b76b61ce68da3ad6b60.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-brand-accent"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-brand-accent"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-brand-accent"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-brand-accent"></div>
          </div>

          {/* Caption */}
          <div className="mt-6 text-center">
            <p className="font-nunito-sans italic text-white/80 text-sm sm:text-base">
              Experience the journey from raw materials to exquisite handcrafted masterpieces
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
