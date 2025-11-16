import { Container } from './Container';
import { Logo } from './Logo';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-primary/10">
      <Container size="xl">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <Logo variant="main" width={180} height={60} className="object-contain" />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 font-nunito">
            <li>
              <Link
                href="/"
                className="text-brand-secondary hover:text-brand-primary transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="text-brand-secondary hover:text-brand-primary transition-colors font-medium"
              >
                Stories
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="text-brand-secondary hover:text-brand-primary transition-colors font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-brand-secondary hover:text-brand-primary transition-colors font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-brand-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </nav>
      </Container>
    </header>
  );
}
