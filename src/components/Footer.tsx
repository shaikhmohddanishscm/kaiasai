import { Container } from './Container';
import { Logo } from './Logo';
import { brandConfig } from '@/config/brand';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary text-white">
      {/* Main Footer */}
      <Container size="xl" className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="white" width={250} height={85} />
            <p className="text-white/70 font-nunito text-sm leading-relaxed max-w-md">
              An artisanal design house celebrating Indian craftsmanship through stories,
              design, and thoughtful curation. Where tradition meets contemporary living.
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="font-nunito font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3 font-nunito text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-brand-accent transition-colors">
                  Our Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-accent transition-colors">
                  Craft Traditions
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-accent transition-colors">
                  Artisan Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-nunito font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3 font-nunito text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-brand-accent transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-accent transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-accent transition-colors">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-brand-accent transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container size="xl" className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50 font-nunito">
            <p>
              © {currentYear} {brandConfig.name}. Crafted with care.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-brand-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-brand-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
