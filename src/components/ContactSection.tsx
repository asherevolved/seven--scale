import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    services: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", budget: "", services: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            Let's <span className="text-gradient">Scale Together.</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Ready to transform your business? Get in touch and let's discuss your growth goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="card-gradient border border-border/20 animate-slide-in">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="bg-input/50 border-border/30"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="bg-input/50 border-border/30"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="bg-input/50 border-border/30"
                  />
                </div>

                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger className="bg-input/50 border-border/30">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-plus">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="services">Services Needed</Label>
                  <Select onValueChange={(value) => handleInputChange("services", value)}>
                    <SelectTrigger className="bg-input/50 border-border/30">
                      <SelectValue placeholder="Select services" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-design">Web Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="seo">SEO</SelectItem>
                      <SelectItem value="content">Content Creation</SelectItem>
                      <SelectItem value="all">All Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="bg-input/50 border-border/30"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 glow-primary"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <Card className="glass-card border border-border/20">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-4">
                  Book a Strategy Call
                </h3>
                <p className="text-foreground/80 mb-6">
                  Skip the form and schedule a direct call with our team. We'll discuss your goals and create a custom growth plan.
                </p>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90"
                  onClick={() => window.open("https://calendly.com/sevenscale", "_blank")}
                >
                  Schedule Call
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border border-border/20">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-primary">✉️</span>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-foreground/70">hello@sevenscale.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-primary">💬</span>
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-foreground/70 hover:text-primary"
                        onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                      >
                        +1 (234) 567-8890
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border border-border/20">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Response within 24 hours</li>
                  <li>• Free strategy consultation</li>
                  <li>• Custom proposal tailored to your needs</li>
                  <li>• No pressure, just honest advice</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;