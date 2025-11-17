'use client';

import { Container } from './Container';
import { Logo } from './Logo';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-primary/10">
      <Container size="xl">
        <nav className="flex items-center justify-between py-4 px-4 sm:px-0">
          {/* Logo - Left */}
          <Link href="/" className="shrink-0">
            <Logo variant="main" width={150} height={50} className="object-contain sm:w-[180px] sm:h-[60px]" />
          </Link>

          {/* Navigation Links - Center */}
          <ul className="hidden md:flex items-center gap-8 font-nunito absolute left-1/2 -translate-x-1/2">
            <li>
              <Link
                href="/"
                className="text-brand-secondary hover:text-brand-primary transition-colors font-medium text-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="text-brand-secondary hover:text-brand-primary transition-colors font-medium text-sm"
              >
                Stories
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="text-brand-secondary hover:text-brand-primary transition-colors font-medium text-sm"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-brand-secondary hover:text-brand-primary transition-colors font-medium text-sm"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Icon - Right */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden md:block text-brand-secondary hover:text-brand-primary transition-colors p-2"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>

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
          </div>
        </nav>

        {/* Search Bar */}
        {searchOpen && (
          <div className="hidden md:block border-t border-brand-primary/10 py-4 px-4 bg-white">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, crafts, stories..."
                  className="w-full px-4 py-2 pr-10 border border-gray-200 focus:border-brand-primary focus:outline-none text-sm font-nunito"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-secondary/50 hover:text-brand-secondary"
                  aria-label="Close search"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

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
              <li className="pt-4 border-t border-brand-primary/10">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-200 focus:border-brand-primary focus:outline-none text-sm font-nunito"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-brand-secondary/50"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
