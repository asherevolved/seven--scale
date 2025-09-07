import { motion } from "framer-motion";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: "📘", label: "Facebook", href: "#" },
    { icon: "🐦", label: "Twitter", href: "#" },
    { icon: "📷", label: "Instagram", href: "#" },
    { icon: "💼", label: "LinkedIn", href: "#" }
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border/20 py-20 relative">
      {/* Gradient wipe transition */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center glow-primary overflow-hidden">
                <img 
                  src="/528334144_17859556563461698_4631769525587610485_n-removebg-preview (1).png" 
                  alt="Seven Scale Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-bold text-2xl">Seven Scale</span>
            </div>
            <p className="text-text-dim mb-6 text-lg leading-relaxed">
              Scale Faster. Smarter. With Seven Scale.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center hover:bg-primary/30 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <span className="text-primary text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-semibold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", section: "hero" },
                { label: "Services", section: "services" },
                { label: "About", section: "about" },
                { label: "Contact", section: "contact" }
              ].map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.section)}
                    className="text-text-dim hover:text-foreground transition-colors text-lg focus-ring"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-semibold text-xl mb-6">Services</h3>
            <ul className="space-y-3 text-text-dim text-lg">
              {[
                "Web Design",
                "Digital Marketing", 
                "SEO Optimization",
                "Content Creation",
                "Social Media"
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-semibold text-xl mb-6">Contact Info</h3>
            <div className="space-y-4 text-text-dim text-lg">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="font-medium">Email</p>
                <p>hello@sevenscale.com</p>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="font-medium">Phone</p>
                <p>+1 (234) 567-8890</p>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p>Available 24/7 for consultations</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border/20 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-text-dim text-lg">
            © 2024 Seven Scale. All rights reserved. Built with precision and passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;