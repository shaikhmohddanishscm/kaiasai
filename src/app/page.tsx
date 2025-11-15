import { brandConfig } from "@/config/brand";
import { Logo, BrandHeading, BrandButton } from "@/components";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-12 py-32 px-8">
        <Logo variant="main" width={350} height={120} priority className="object-contain" />
        
        <div className="flex flex-col items-center gap-6 text-center">
          <BrandHeading level={1}>
            Welcome to {brandConfig.name}
          </BrandHeading>
          
          <p className="max-w-2xl text-xl leading-relaxed text-brand-secondary font-nunito">
            Your brand identity is fully integrated with consistent fonts, colors, and logos throughout this project.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <BrandButton variant="primary">
            Get Started
          </BrandButton>
          <BrandButton variant="outline">
            Learn More
          </BrandButton>
        </div>
      </main>
    </div>
  );
}
