import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-display font-bold tracking-wider mb-4">
              <span className="text-primary">EXCEL</span>
              <span className="text-foreground"> AESTHETICS</span>
            </div>
            <p className="text-foreground/60 mb-6 max-w-md text-sm leading-relaxed">
              Premier medical aesthetics center in Miami, offering world-class non-surgical treatments 
              to enhance your natural beauty.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 border border-border/50 hover:border-primary hover:text-primary flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-border/50 hover:border-primary hover:text-primary flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-normal mb-6 uppercase tracking-wide text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-normal mb-6 uppercase tracking-wide text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-foreground/60">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <span className="text-sm leading-relaxed">15490 NW 7th Ave, Suite 210<br />Miami, FL 33169</span>
              </li>
              <li className="flex items-center space-x-2 text-foreground/60">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:+13053103160" className="text-sm hover:text-primary transition-colors">
                  (305) 310-3160
                </a>
              </li>
              <li className="flex items-center space-x-2 text-foreground/60">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="mailto:excelaesthetics1@gmail.com" className="text-sm hover:text-primary transition-colors">
                  excelaesthetics1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/50">
          <p>© {new Date().getFullYear()} Excel Aesthetics Miami. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
