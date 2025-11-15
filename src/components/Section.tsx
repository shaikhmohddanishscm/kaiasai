import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'light' | 'white' | 'primary' | 'dark';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const backgroundClasses = {
  light: 'bg-brand-light',
  white: 'bg-white',
  primary: 'bg-brand-primary text-white',
  dark: 'bg-brand-secondary text-white',
};

const paddingClasses = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-32',
  xl: 'py-24 md:py-40',
};

export function Section({ children, className, background = 'white', padding = 'md' }: SectionProps) {
  return (
    <section className={cn(backgroundClasses[background], paddingClasses[padding], className)}>
      {children}
    </section>
  );
}
