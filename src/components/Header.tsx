'use client';

import { Container } from './Container';
import { Logo } from './Logo';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-primary/10">
      <Container size="xl">
        <nav className="flex items-center justify-between py-4 px-4 sm:px-0">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Logo variant="main" width={150} height={50} className="object-contain sm:w-[180px] sm:h-[60px]" />
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
          <button 
            className="md:hidden text-brand-secondary p-2 hover:bg-brand-light rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-brand-primary/10 py-4 px-4 bg-white">
            <ul className="flex flex-col gap-4 font-nunito">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-brand-secondary hover:text-brand-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="block py-2 text-brand-secondary hover:text-brand-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="block py-2 text-brand-secondary hover:text-brand-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="block py-2 text-brand-secondary hover:text-brand-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
