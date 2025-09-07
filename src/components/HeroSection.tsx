import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useMotionPreference } from "@/hooks/useMotion";

const HeroSection = () => {
  const prefersReducedMotion = useMotionPreference();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background with CSS gradients instead of 3D */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 opacity-30">
          {/* Floating hexagon shapes */}
          {!prefersReducedMotion && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 border-2 border-primary/20"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${20 + (i % 2) * 30}%`,
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </>
          )}
        </div>
        
        {/* Central logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-5xl font-bold glow-primary"
            animate={!prefersReducedMotion ? {
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0]
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            SS
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-30">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight"
          >
            Scale Faster.{" "}
            <span className="text-gradient">Smarter.</span>
            <br />
            With Seven Scale.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-text-dim mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Web Design, Marketing, SEO, Content Creation, and Social Media Management—engineered to grow your business.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="btn-primary text-xl px-10 py-6 focus-ring"
              >
                Get a Free Strategy Call
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="text-xl px-10 py-6 border-white/30 text-white hover:bg-white/10 focus-ring"
              >
                See Our Packages
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: "🌐", label: "Web Design" },
              { icon: "📈", label: "SEO" },
              { icon: "📱", label: "Social Media" },
              { icon: "✍️", label: "Content" },
              { icon: "📊", label: "Marketing" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-2xl text-center float"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  ...(prefersReducedMotion && { animation: 'none' })
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "var(--surface-glass-hover)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-sm font-medium text-text-dim">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;