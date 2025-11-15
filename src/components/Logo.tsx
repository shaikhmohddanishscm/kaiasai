import Image from 'next/image';
import { brandConfig } from '@/config/brand';

interface LogoProps {
  variant?: 'main' | 'white' | 'standard' | 'variant2' | 'variant3' | 'jpg';
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function Logo({
  variant = 'main',
  width = 200,
  height = 80,
  className = '',
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={brandConfig.logos[variant]}
      alt={`${brandConfig.name} logo`}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
