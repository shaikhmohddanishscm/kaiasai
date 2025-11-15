import { brandConfig } from '@/config/brand';
import { ReactNode } from 'react';

interface BrandButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function BrandButton({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  type = 'button',
}: BrandButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center px-6 py-3 rounded-lg
    font-nunito font-bold text-base transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const variants = {
    primary: `
      bg-brand-primary text-white hover:bg-brand-secondary
      focus:ring-brand-primary
    `,
    secondary: `
      bg-brand-secondary text-white hover:bg-brand-primary
      focus:ring-brand-secondary
    `,
    outline: `
      border-2 border-brand-primary text-brand-primary
      hover:bg-brand-primary hover:text-white
      focus:ring-brand-primary
    `,
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
