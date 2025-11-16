import { Container } from '@/components/Container';
import { ScrollToTop } from '@/components/ScrollToTop';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import blogsData from '../../../../public/blogs.json';

// Helper function to create URL-friendly slug
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: createSlug(blog.title),
  }));
}

// Helper to format content into sections
function formatContent(content: string) {
  // Split content by double line breaks to create paragraphs
  const paragraphs = content.split('\n\n').filter((p) => p.trim());
  
  return paragraphs.map((para, index) => {
    // Check if it's a heading (contains colon and is short)
    if (para.includes(':') && para.length < 100 && !para.includes('.')) {
      return { type: 'heading', content: para, index };
    }
    // Check if it's a list item
    if (para.match(/^-\s/)) {
      return { type: 'list', content: para, index };
    }
    return { type: 'paragraph', content: para, index };
  });
}

export default async function BlogDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const blog = blogsData.find((b) => createSlug(b.title) === slug);

  if (!blog) {
    notFound();
  }

  const formattedContent = formatContent(blog.content);
  const midPoint = Math.floor(formattedContent.length / 2);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src={blog.image_url}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Article Header */}
      <Container size="lg" className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-nunito font-light text-3xl md:text-4xl lg:text-5xl text-brand-secondary mb-4 leading-tight">
            {blog.title}
          </h1>
          <p className="text-sm text-brand-secondary/60 font-nunito italic mb-2">
            {blog.date} | {blog.author}
          </p>
        </div>
      </Container>

      {/* Article Content */}
      <Container size="xl" className="pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {formattedContent.slice(0, midPoint).map((section) => {
                if (section.type === 'heading') {
                  return (
                    <h2
                      key={section.index}
                      className="font-nunito font-bold text-2xl text-brand-secondary mt-8 mb-4"
                    >
                      {section.content}
                    </h2>
                  );
                }
                if (section.type === 'list') {
                  return (
                    <ul key={section.index} className="list-none space-y-2 ml-6">
                      {section.content.split('\n').map((item, i) => (
                        <li key={i} className="text-brand-secondary/80 font-nunito text-base leading-relaxed">
                          {item.replace(/^-\s/, '• ')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={section.index}
                    className="text-brand-secondary/80 font-nunito text-base leading-relaxed"
                  >
                    {section.content}
                  </p>
                );
              })}
            </div>

            {/* Side Image Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="sticky top-8">
                <div className="relative h-96 w-full overflow-hidden rounded-sm">
                  <Image
                    src={blog.image_url}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-brand-secondary/50 font-nunito mt-2 italic">
                  Photograph courtesy of Ikai Asai
                </p>
              </div>
            </div>
          </div>

          {/* Full Width Quote Section */}
          {blog.title.includes('Pottery') || blog.title.includes('Design') ? (
            <div className="my-16 py-12 px-8 bg-brand-light">
              <blockquote className="text-center max-w-3xl mx-auto">
                <p className="font-nunito-sans italic text-2xl md:text-3xl text-brand-secondary leading-relaxed">
                  "Design is not an exhibition of your capacity. You have to work within what is given"
                </p>
                <footer className="text-sm text-brand-secondary/60 font-nunito mt-4">
                  — Artisan Philosophy
                </footer>
              </blockquote>
            </div>
          ) : null}

          {/* Continuation of Content */}
          <div className="max-w-4xl mx-auto space-y-6 mt-12">
            {formattedContent.slice(midPoint).map((section) => {
              if (section.type === 'heading') {
                return (
                  <h2
                    key={section.index}
                    className="font-nunito font-bold text-2xl text-brand-secondary mt-8 mb-4"
                  >
                    {section.content}
                  </h2>
                );
              }
              if (section.type === 'list') {
                return (
                  <ul key={section.index} className="list-none space-y-2 ml-6">
                    {section.content.split('\n').map((item, i) => (
                      <li key={i} className="text-brand-secondary/80 font-nunito text-base leading-relaxed">
                        {item.replace(/^-\s/, '• ')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={section.index}
                  className="text-brand-secondary/80 font-nunito text-base leading-relaxed"
                >
                  {section.content}
                </p>
              );
            })}
          </div>

          {/* Back to Blogs */}
          <div className="text-center mt-16 pt-12 border-t border-brand-primary/20">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-accent font-nunito text-sm font-bold uppercase tracking-wider transition-colors"
            >
              ← Back to All Stories
            </Link>
          </div>
        </div>
      </Container>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
