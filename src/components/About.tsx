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
    <section id="about" className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-normal mb-6 uppercase tracking-tight">
            <span className="text-foreground">Excellence in</span>{" "}
            <span className="text-primary">Medical Aesthetics</span>
          </h2>
          <p className="text-base text-foreground/60 leading-relaxed">
            Excel Aesthetics in Miami is a full-service medical aesthetic center offering non-surgical 
            treatments to enhance natural beauty. By making patients feel comfortable and welcome, 
            we invoke a sense of calmness and trust for better overall care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-8 bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-display font-normal mb-3 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Location Info */}
        <div className="mt-20 text-center max-w-2xl mx-auto p-10 bg-card border border-border/50">
          <h3 className="text-2xl font-display font-normal mb-6 uppercase tracking-wide">Visit Our Miami Location</h3>
          <p className="text-foreground/60 mb-2 text-sm">
            15490 Northwest 7th Avenue, Suite 210
          </p>
          <p className="text-foreground/60 mb-6 text-sm">
            Miami, FL 33169
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href="tel:+13053103160" className="text-primary hover:text-primary/80 transition-colors">
              (305) 310-3160
            </a>
            <span className="hidden sm:block text-foreground/30">•</span>
            <a href="mailto:excelaesthetics1@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
              excelaesthetics1@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
