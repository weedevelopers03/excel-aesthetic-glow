import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import botoxImage from "@/assets/botox-service.jpg";
import fillersImage from "@/assets/fillers-service.jpg";
import laserImage from "@/assets/laser-service.jpg";
import bodyImage from "@/assets/body-service.jpg";

const services = [
  {
    title: "Botox & Dysport",
    description: "Smooth away lines and wrinkles with expert injectable treatments for a refreshed, youthful appearance.",
    image: botoxImage,
    features: ["Forehead Lines", "Crow's Feet", "Frown Lines"],
  },
  {
    title: "Dermal Fillers",
    description: "Restore volume and enhance facial contours with premium hyaluronic acid fillers for natural-looking results.",
    image: fillersImage,
    features: ["Lip Enhancement", "Cheek Augmentation", "Facial Contouring"],
  },
  {
    title: "Laser Hair Removal",
    description: "Achieve smooth, hair-free skin with our advanced Icon® laser technology for lasting results.",
    image: laserImage,
    features: ["Full Body", "Face & Neck", "Bikini Area"],
  },
  {
    title: "Body Contouring",
    description: "Sculpt and refine your silhouette with non-invasive body contouring treatments.",
    image: bodyImage,
    features: ["Fat Reduction", "Skin Tightening", "Cellulite Treatment"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-normal mb-6 uppercase tracking-tight">
            <span className="text-foreground">Our Premium</span>{" "}
            <span className="text-primary">Services</span>
          </h2>
          <p className="text-base text-foreground/60 leading-relaxed">
            Discover our comprehensive range of non-surgical aesthetic treatments designed to enhance your natural beauty.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-card border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-display font-normal mb-4 uppercase tracking-wide group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/60 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground/50">
                      <div className="w-1 h-1 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary/80 transition-colors uppercase text-xs tracking-wider"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-xs font-semibold px-8"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
