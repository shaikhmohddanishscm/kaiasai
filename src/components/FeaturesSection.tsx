'use client';

import { Container } from './Container';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const collections = [
  {
    title: 'Dinnerware',
    description: 'Handcrafted plates, bowls, and serving pieces',
    image: '/images/dinnerware-new.jpg',
    link: '#dinnerware'
  },
  {
    title: 'Serveware',
    description: 'Elegant serving bowls, trays, and platters',
    image: '/images/serveware-new.jpg',
    link: '#serveware'
  },
  {
    title: 'Drinkware',
    description: 'Traditional cups, tumblers, and vessels',
    image: '/images/drinkware-new.jpg',
    link: '#drinkware'
  },
  {
    title: 'Terracotta Collection',
    description: 'Fine terracotta handcrafted by gifted artisans',
    image: '/images/terracotta.jpg',
    link: '#terracotta'
  },
  {
    title: 'Kansa Craftsmanship',
    description: 'Healing metal of Ayurveda in pure bronze',
    image: '/images/kansa-kaam_1d5c06ee-f0a8-4150-a30d-a8d4c8f858ed.jpg',
    link: '#kansa'
  },
  {
    title: 'Studio Pottery',
    description: 'Contemporary ceramic pieces by skilled artisans',
    image: '/images/studio-pottery.jpg',
    link: '#pottery'
  },
  {
    title: 'Tangaliya Weave',
    description: 'Beautifully woven runners, mats, and napkins',
    image: '/images/tangliya-weave.jpg',
    link: '#tangaliya'
  },
  {
    title: 'Glasswork Heritage',
    description: 'Centuries-old glass blowing traditions',
    image: '/images/glasswork-new.webp',
    link: '#glasswork'
  },
  {
    title: 'Special Edition',
    description: 'Exclusive handcrafted masterpieces',
    image: '/images/specialedition.jpg',
    link: '#special'
  }
];

export function FeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(collections.length / itemsPerPage);
  
  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setIsAutoPlaying(false);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="text-center mb-12 md:mb-16 px-4">
        <h2 className="font-nunito font-light text-2xl md:text-3xl text-brand-secondary mb-3">
          Explore Our Collections
        </h2>
        <p className="text-brand-secondary/60 font-nunito text-sm max-w-xl mx-auto">
          Discover handcrafted pieces for every corner of your home
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {collections
                      .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                      .map((collection, index) => (
                        <Link key={index} href={collection.link}>
                          <div className="group cursor-pointer">
                            {/* Image */}
                            <div className="relative aspect-square overflow-hidden mb-4">
                              <Image
                                src={collection.image}
                                alt={collection.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              {/* Subtle overlay */}
                              <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }}
                              ></div>
                            </div>
                            
                            {/* Content */}
                            <div className="text-center space-y-2">
                              <h3 className="font-nunito font-light text-base md:text-lg text-brand-secondary leading-tight group-hover:text-brand-primary transition-colors">
                                {collection.title}
                              </h3>
                              
                              <p className="text-brand-secondary/60 font-nunito text-xs leading-relaxed">
                                {collection.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white border border-gray-200 hover:border-brand-primary transition-colors shadow-sm"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white border border-gray-200 hover:border-brand-primary transition-colors shadow-sm"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-brand-primary w-8' 
                  : 'bg-gray-300 hover:bg-brand-primary/50'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
