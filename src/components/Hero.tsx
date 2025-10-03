import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury aesthetics treatment" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl pt-20">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-normal leading-tight mb-8 slide-up">
            <span className="block text-foreground uppercase tracking-tight">Multi-Award</span>
            <span className="block text-foreground uppercase tracking-tight">Winning</span>
            <span className="block text-primary uppercase tracking-tight mt-2">Cosmetic Clinic</span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-foreground/60 mb-10 max-w-xl leading-relaxed slide-up" style={{ animationDelay: "0.2s" }}>
            5-Star Medispa bringing the latest treatments, carried out by the most experienced aesthetic practitioners in the industry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 slide-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-sm px-8 py-6"
            >
              Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border border-foreground/30 text-foreground hover:bg-foreground/10 uppercase tracking-wider text-sm px-8 py-6"
            >
              Find Your Procedure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
