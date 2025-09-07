import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const packages = [
    {
      title: "Business Package",
      description: "Complete web presence with performance tracking",
      features: [
        "Website (up to 6 pages)",
        "Responsive design",
        "Analytics setup",
        "Basic SEO optimization",
        "Campaign builds",
        "Monthly audits"
      ],
      price: "Starting at $2,999",
      highlight: false
    },
    {
      title: "Marketing Package",
      description: "Comprehensive marketing strategy and execution",
      features: [
        "SEO strategy & implementation",
        "Weekly blog posts",
        "Content calendar",
        "Performance campaigns",
        "Bi-weekly strategy calls",
        "Competitor analysis"
      ],
      price: "Starting at $1,999/mo",
      highlight: true
    },
    {
      title: "Social Media Package",
      description: "Complete social media management and growth",
      features: [
        "Management for 3 platforms",
        "Daily posts & stories",
        "Reels & video content",
        "Custom captions",
        "Monthly performance reports",
        "Community management"
      ],
      price: "Starting at $899/mo",
      highlight: false
    }
  ];

  const addOns = [
    "Extra landing pages",
    "Additional reels & videos",
    "Advanced analytics dashboard",
    "Email marketing campaigns",
    "Backlink outreach",
    "Paid advertising management"
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            Everything you need to grow—
            <span className="text-gradient">bundled the right way.</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Choose from our carefully crafted packages or combine them for maximum impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`card-gradient border border-border/20 ${
                pkg.highlight 
                  ? "ring-2 ring-primary glow-primary scale-105" 
                  : ""
              } transition-all duration-300 hover:scale-105 animate-slide-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="font-heading text-2xl">
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  {pkg.description}
                </CardDescription>
                <div className="text-3xl font-bold text-gradient">
                  {pkg.price}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-primary mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    pkg.highlight 
                      ? "bg-primary hover:bg-primary/90 glow-primary" 
                      : "bg-secondary hover:bg-secondary/90"
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="font-heading font-semibold text-2xl mb-6">
            Optional Add-ons
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-sm">{addon}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;