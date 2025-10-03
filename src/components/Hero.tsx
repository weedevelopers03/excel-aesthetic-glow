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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl pt-20">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Premier Medical Aesthetics in Miami</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 slide-up">
            <span className="block text-foreground">Enhance Your</span>
            <span className="block text-gradient">Natural Beauty</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl slide-up" style={{ animationDelay: "0.2s" }}>
            Experience world-class non-surgical aesthetic treatments in a luxurious setting. 
            Our expert practitioners deliver exceptional results with the latest technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 slide-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6 group"
            >
              Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">10+</div>
              <div className="text-sm text-foreground/60 mt-1">Years Experience</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">5000+</div>
              <div className="text-sm text-foreground/60 mt-1">Happy Clients</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">15+</div>
              <div className="text-sm text-foreground/60 mt-1">Treatments</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
