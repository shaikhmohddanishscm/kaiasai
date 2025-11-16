import { Container } from '@/components/Container';
import { BrandHeading } from '@/components/BrandHeading';
import Image from 'next/image';
import Link from 'next/link';
import blogsData from '../../../public/blogs.json';

// Helper function to create URL-friendly slug
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function BlogsPage() {
  const blogs = blogsData;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-brand-light">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <BrandHeading level={1} className="text-brand-secondary mb-6">
              Stories & Inspiration
            </BrandHeading>
            <p className="text-lg text-brand-secondary/70 font-nunito leading-relaxed">
              Thoughtful reflections on design, craftsmanship, and the art of living beautifully.
              Discover how handcrafted objects elevate everyday moments.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => {
              const slug = createSlug(blog.title);
              const isFeatured = index === 0;

              return (
                <Link
                  key={index}
                  href={`/blogs/${slug}`}
                  className={`group block bg-white hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    isFeatured ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden ${isFeatured ? 'h-96' : 'h-64'}`}>
                    <Image
                      src={blog.image_url}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className={`p-6 ${isFeatured ? 'lg:p-8' : ''}`}>
                    {/* Title */}
                    <h2
                      className={`font-nunito font-bold text-brand-secondary group-hover:text-brand-primary transition-colors leading-tight mb-4 ${
                        isFeatured ? 'text-2xl lg:text-3xl' : 'text-xl'
                      }`}
                    >
                      {blog.title}
                    </h2>

                    {/* Divider */}
                    <div className="w-16 h-0.5 bg-brand-primary mb-4"></div>

                    {/* Excerpt */}
                    <p
                      className={`text-brand-secondary/70 font-nunito leading-relaxed mb-4 ${
                        isFeatured ? 'text-base' : 'text-sm line-clamp-3'
                      }`}
                    >
                      {blog.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-brand-secondary/50 font-nunito">
                      <span>{blog.date}</span>
                      <span className="text-brand-primary group-hover:translate-x-1 transition-transform">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
