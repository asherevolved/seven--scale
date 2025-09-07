import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TiltCard from "@/components/motion/TiltCard";
import MotionWrapper from "@/components/motion/MotionWrapper";

const ServicesSection = () => {
  const packages = [
    {
      title: "Business Package",
      description: "Complete web presence with performance tracking",
      features: [
        "Website (up to 6 pages), responsive design & analytics",
        "On-page + technical SEO, keyword plan (20–30)",
        "2 campaign builds per month (landing page + ads)",
        "Monthly growth audit & roadmap review"
      ],
      highlight: false
    },
    {
      title: "Marketing Package",
      description: "Comprehensive marketing strategy and execution",
      features: [
        "SEO strategy + keyword plan",
        "6 SEO-optimized blog posts/month",
        "Content calendar planning",
        "2 performance campaigns/month",
        "Analytics dashboard + monthly strategy call"
      ],
      highlight: true
    },
    {
      title: "Social Media Package",
      description: "Complete social media management and growth",
      features: [
        "Instagram page management",
        "20 posts/month",
        "8 reels/short videos/month",
        "Captions + scheduling",
        "Monthly social report"
      ],
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
    <section id="services" className="py-24 bg-background relative">
      {/* Gradient wipe transition */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-6">
        <MotionWrapper className="text-center mb-20">
          <h2 className="font-heading font-bold text-5xl md:text-7xl mb-8 leading-tight">
            Everything you need to grow—
            <span className="text-gradient">bundled the right way.</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-dim max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully crafted packages or combine them for maximum impact.
          </p>
        </MotionWrapper>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <MotionWrapper 
              key={index}
              delay={index * 0.1}
              className="h-full"
            >
              <TiltCard className="h-full">
                <Card
                  className={`glass-card h-full ${
                    pkg.highlight 
                      ? "ring-2 ring-primary glow-primary" 
                      : ""
                  } transition-all duration-300`}
                >
                  <CardHeader className="pb-4">
                    {pkg.highlight && (
                      <div className="bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold py-1 px-3 rounded-full text-center mb-4">
                        Most Popular
                      </div>
                    )}
                    <CardTitle className="font-heading text-2xl md:text-3xl">
                      {pkg.title}
                    </CardTitle>
                    <CardDescription className="text-text-dim text-lg">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center text-lg"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <span className="text-primary mr-4 text-xl">✓</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className={`w-full py-3 text-lg focus-ring ${
                          pkg.highlight 
                            ? "btn-primary" 
                            : "bg-secondary hover:bg-secondary/90"
                        }`}
                      >
                        Contact us for pricing
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </TiltCard>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper className="text-center">
          <h3 className="font-heading font-semibold text-3xl md:text-4xl mb-10">
            Optional Add-ons
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <MotionWrapper
                key={index}
                delay={index * 0.05}
              >
                <motion.div
                  className="glass-card p-6 rounded-2xl text-center"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "var(--surface-glass-hover)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-lg font-medium">{addon}</p>
                </motion.div>
              </MotionWrapper>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default ServicesSection;