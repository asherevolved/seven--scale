const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary/50 border-t border-border/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-heading font-bold text-xl">Seven Scale</span>
            </div>
            <p className="text-foreground/70 mb-4">
              Scale Faster. Smarter. With Seven Scale.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <span className="text-primary">📘</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <span className="text-primary">🐦</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <span className="text-primary">📷</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <span className="text-primary">💼</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("hero")}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>Web Design</li>
              <li>Digital Marketing</li>
              <li>SEO Optimization</li>
              <li>Content Creation</li>
              <li>Social Media</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 text-foreground/70">
              <p>hello@sevenscale.com</p>
              <p>+1 (234) 567-8890</p>
              <p>Available 24/7 for consultations</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 text-center">
          <p className="text-foreground/70">
            © 2024 Seven Scale. All rights reserved. Built with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;