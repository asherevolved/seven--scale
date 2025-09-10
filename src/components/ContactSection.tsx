import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import MotionWrapper from "@/components/motion/MotionWrapper";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    services: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Create confetti effect
    const colors = ['#7B2CFF', '#B583FF', '#FFFFFF'];
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
          position: fixed;
          width: 6px;
          height: 6px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          left: ${Math.random() * 100}vw;
          top: -10px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          animation: confetti-fall 3s linear forwards;
        `;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
      }, i * 50);
    }
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", services: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes confetti-fall {
            from {
              transform: translateY(-100vh) rotate(0deg);
              opacity: 1;
            }
            to {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
        `
      }} />
      
      <section id="contact" className="py-24 bg-background relative">
        {/* Gradient wipe transition */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="container mx-auto px-6">
          <MotionWrapper className="text-center mb-20">
            <h2 className="font-heading font-bold text-5xl md:text-7xl mb-8 leading-tight">
              Let's <span className="text-gradient">Scale Together.</span>
            </h2>
            <p className="text-xl md:text-2xl text-text-dim max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Get in touch and let's discuss your growth goals.
            </p>
          </MotionWrapper>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <MotionWrapper>
              <Card className="glass-card h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-3xl">
                    Send us a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form 
                        key="form"
                        onSubmit={handleSubmit} 
                        className="space-y-6"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <motion.div
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Label htmlFor="name" className="text-lg">Name *</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              required
                              className="bg-input/50 border-border/30 focus:border-primary focus:ring-2 focus:ring-primary/20 text-lg py-3"
                            />
                          </motion.div>
                          <motion.div
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Label htmlFor="email" className="text-lg">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              required
                              className="bg-input/50 border-border/30 focus:border-primary focus:ring-2 focus:ring-primary/20 text-lg py-3"
                            />
                          </motion.div>
                        </div>

                        {/* ... keep existing form fields with enhanced styling ... */}
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Label htmlFor="company" className="text-lg">Company</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            className="bg-input/50 border-border/30 focus:border-primary focus:ring-2 focus:ring-primary/20 text-lg py-3"
                          />
                        </motion.div>

                        <div>
                          <Label htmlFor="services" className="text-lg">Services Needed</Label>
                          <Select onValueChange={(value) => handleInputChange("services", value)}>
                            <SelectTrigger className="bg-input/50 border-border/30 focus:border-primary focus:ring-2 focus:ring-primary/20 text-lg py-3">
                              <SelectValue placeholder="Select services" />
                            </SelectTrigger>
                            <SelectContent className="glass-card">
                              <SelectItem value="web-design">Web Design</SelectItem>
                              <SelectItem value="marketing">Marketing</SelectItem>
                              <SelectItem value="social-media">Social Media</SelectItem>
                              <SelectItem value="seo">SEO</SelectItem>
                              <SelectItem value="content">Content Creation</SelectItem>
                              <SelectItem value="all">All Services</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Label htmlFor="message" className="text-lg">Message</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            rows={4}
                            className="bg-input/50 border-border/30 focus:border-primary focus:ring-2 focus:ring-primary/20 text-lg"
                            placeholder="Tell us about your project..."
                          />
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            className="w-full btn-primary text-lg py-4"
                          >
                            Send Message
                          </Button>
                        </motion.div>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        className="text-center py-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-6xl mb-6">✨</div>
                        <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                        <p className="text-text-dim">We'll be in touch within 24 hours.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </MotionWrapper>

            <div className="space-y-8">
              {/* Contact cards with enhanced styling */}
              <MotionWrapper delay={0.2}>
                <Card className="glass-card">
                  <CardContent className="p-8">
                    <h3 className="font-heading font-semibold text-2xl mb-6">
                      Book a Strategy Call
                    </h3>
                    <p className="text-text-dim mb-8 text-lg leading-relaxed">
                      Skip the form and schedule a direct call with our team. We'll discuss your goals and create a custom growth plan.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="w-full bg-accent hover:bg-accent/90 text-lg py-4"
                        onClick={() => window.open("https://calendly.com/sevenscale", "_blank")}
                      >
                        Schedule Call
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </MotionWrapper>

              {/* Additional contact cards with same pattern... */}
              <MotionWrapper delay={0.3}>
                <Card className="glass-card">
                  <CardContent className="p-8">
                    <h3 className="font-heading font-semibold text-2xl mb-6">
                      Quick Contact
                    </h3>
                    <div className="space-y-6">
                      <motion.div 
                        className="flex items-center space-x-4"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                          <span className="text-primary text-xl">✉️</span>
                        </div>
                        <div>
                          <p className="font-semibold text-lg">Email</p>
                          <p className="text-text-dim">sevenscalecompany@gmail.com</p>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center space-x-4"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                          <span className="text-primary text-xl">📞</span>
                        </div>
                        <div>
                          <p className="font-semibold text-lg">Phone</p>
                          <div className="space-y-1">
                            <p className="text-text-dim">+91 7022619124</p>
                            <p className="text-text-dim">+91 8123479401</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </MotionWrapper>

              <MotionWrapper delay={0.4}>
                <Card className="glass-card">
                  <CardContent className="p-8">
                    <h3 className="font-heading font-semibold text-2xl mb-6">
                      What to Expect
                    </h3>
                    <ul className="space-y-3 text-text-dim text-lg">
                      <li className="flex items-center">
                        <span className="text-primary mr-3">•</span>
                        Response within 24 hours
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-3">•</span>
                        Free strategy consultation
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-3">•</span>
                        Custom proposal tailored to your needs
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-3">•</span>
                        No pressure, just honest advice
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;