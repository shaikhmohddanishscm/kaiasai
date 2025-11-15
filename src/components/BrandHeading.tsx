import { ReactNode } from 'react';

interface BrandHeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function BrandHeading({
  children,
  level = 1,
  className = '',
}: BrandHeadingProps) {
  const sizes = {
    1: 'text-5xl md:text-6xl',
    2: 'text-4xl md:text-5xl',
    3: 'text-3xl md:text-4xl',
    4: 'text-2xl md:text-3xl',
    5: 'text-xl md:text-2xl',
    6: 'text-lg md:text-xl',
  };

  const classes = `
    font-nunito font-bold text-brand-primary
    ${sizes[level]} ${className}
  `;

  const headingProps = { className: classes };

  switch (level) {
    case 1:
      return <h1 {...headingProps}>{children}</h1>;
    case 2:
      return <h2 {...headingProps}>{children}</h2>;
    case 3:
      return <h3 {...headingProps}>{children}</h3>;
    case 4:
      return <h4 {...headingProps}>{children}</h4>;
    case 5:
      return <h5 {...headingProps}>{children}</h5>;
    case 6:
      return <h6 {...headingProps}>{children}</h6>;
    default:
      return <h1 {...headingProps}>{children}</h1>;
  }
}
