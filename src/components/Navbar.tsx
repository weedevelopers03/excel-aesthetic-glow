import { useState, useEffect } from "react";
import { Menu, X, Phone, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/98 backdrop-blur-lg border-b border-border/50" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="text-2xl font-display font-bold tracking-wider">
              <span className="text-primary">EXCEL</span>
              <span className="text-foreground"> AESTHETICS</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm tracking-wide text-foreground/70 hover:text-primary transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact & Book Button */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+13053103160" className="flex items-center text-foreground/70 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">0 800 123 1234</span>
            </a>
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-xs font-semibold px-6"
            >
              Book a Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-md border-t border-border/50">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors px-4 py-2 uppercase text-sm tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <a href="tel:+13053103160" className="flex items-center text-foreground/80 hover:text-primary mb-4">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">0 800 123 1234</span>
                </a>
                <Button 
                  variant="default" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-xs font-semibold"
                >
                  Book a Visit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
