import { motion } from "framer-motion";
import MotionWrapper from "@/components/motion/MotionWrapper";

const AboutSection = () => {
  const process = [
    {
      step: "01",
      title: "Discover",
      description: "We dive deep into your business goals, target audience, and competitive landscape to create a tailored strategy."
    },
    {
      step: "02", 
      title: "Design",
      description: "Our team crafts beautiful, conversion-focused designs that reflect your brand and engage your audience."
    },
    {
      step: "03",
      title: "Deploy",
      description: "We launch your campaigns and website with precision, ensuring everything works flawlessly from day one."
    },
    {
      step: "04",
      title: "Optimize",
      description: "Continuous monitoring and optimization to maximize your ROI and drive sustainable growth."
    }
  ];

  const stats = [
    { value: "250+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5x", label: "Average ROI" }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30 relative">
      {/* Gradient wipe transition */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6">
        <MotionWrapper className="text-center mb-20">
          <h2 className="font-heading font-bold text-5xl md:text-7xl mb-8 leading-tight">
            We build <span className="text-gradient">pipelines</span>, not just pages.
          </h2>
          <p className="text-xl md:text-2xl text-text-dim max-w-4xl mx-auto mb-12 leading-relaxed">
            We're a performance-focused agency that delivers design, marketing, and campaigns 
            engineered for business growth. Our data-driven approach ensures every decision 
            moves the needle on your bottom line.
          </p>
        </MotionWrapper>

        {/* 3D Timeline Process */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {process.map((item, index) => (
            <MotionWrapper
              key={index}
              delay={index * 0.1}
              className="text-center"
            >
              <motion.div
                className="relative mb-8"
                whileHover={{ scale: 1.05, z: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-xl glow-primary"
                  whileHover={{ 
                    rotateY: 10,
                    rotateX: 5,
                    boxShadow: "var(--glow-accent)"
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {item.step}
                </motion.div>
                {index < process.length - 1 && (
                  <div className="hidden xl:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-[-1]" />
                )}
              </motion.div>
              <h3 className="font-heading font-semibold text-2xl md:text-3xl mb-4">
                {item.title}
              </h3>
              <p className="text-text-dim text-lg leading-relaxed">
                {item.description}
              </p>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper>
          <div className="glass-card p-10 md:p-12 rounded-3xl max-w-5xl mx-auto">
            <h3 className="font-heading font-semibold text-3xl md:text-4xl mb-6 text-center">
              Ready to scale your business?
            </h3>
            <p className="text-text-dim text-xl mb-10 text-center leading-relaxed">
              Join hundreds of businesses that have transformed their growth with Seven Scale.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-text-dim font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default AboutSection;