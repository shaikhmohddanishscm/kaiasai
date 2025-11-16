import { Container } from './Container';
import { BrandHeading } from './BrandHeading';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    text: 'The terracotta dinnerware set from ikai Asai has completely transformed our dining experience. Each piece is a work of art that brings warmth to our table.',
    rating: 5,
  },
  {
    name: 'Arjun Patel',
    location: 'Delhi',
    text: 'I gifted the Kansa metalware to my parents, and they absolutely love it! The craftsmanship is exceptional, and the health benefits are wonderful.',
    rating: 5,
  },
  {
    name: 'Meera Reddy',
    location: 'Bangalore',
    text: 'As someone who appreciates handcrafted products, ikai Asai never disappoints. The attention to detail and the stories behind each piece make them truly special.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-brand-light">
      <Container size="lg">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <BrandHeading level={2} className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">
            Stories from Our Community
          </BrandHeading>
          <p className="text-brand-secondary/80 font-nunito text-base sm:text-lg max-w-2xl mx-auto">
            Discover what our customers are saying about their ikai Asai experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-primary"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-brand-accent"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-brand-secondary/80 font-nunito leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-brand-primary/20 pt-4">
                <p className="font-nunito font-bold text-brand-secondary">
                  {testimonial.name}
                </p>
                <p className="font-nunito-sans text-sm text-brand-primary">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
