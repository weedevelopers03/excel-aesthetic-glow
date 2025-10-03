import { Award, Heart, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Practitioners",
    description: "Board-certified professionals with years of experience in medical aesthetics.",
  },
  {
    icon: Sparkles,
    title: "Latest Technology",
    description: "State-of-the-art equipment including Icon® aesthetic system and TempSure™ Envi.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Customized treatment plans tailored to your unique beauty goals.",
  },
  {
    icon: Shield,
    title: "Safe & Trusted",
    description: "FDA-approved treatments in a comfortable, welcoming environment.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Excellence in
            <span className="block text-gradient">Medical Aesthetics</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Excel Aesthetics in Miami is a full-service medical aesthetic center offering non-surgical 
            treatments to enhance natural beauty. By making patients feel comfortable and welcome, 
            we invoke a sense of calmness and trust for better overall care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground/70 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Location Info */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-lg bg-muted/30 border border-border">
          <h3 className="text-2xl font-display font-bold mb-4">Visit Our Miami Location</h3>
          <p className="text-foreground/70 mb-2">
            15490 Northwest 7th Avenue, Suite 210
          </p>
          <p className="text-foreground/70 mb-4">
            Miami, FL 33169
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href="tel:+13053103160" className="text-primary hover:text-accent transition-colors font-medium">
              (305) 310-3160
            </a>
            <span className="hidden sm:block text-foreground/30">•</span>
            <a href="mailto:excelaesthetics1@gmail.com" className="text-primary hover:text-accent transition-colors font-medium">
              excelaesthetics1@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
