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
      className="min-h-screen flex items-start justify-center relative overflow-hidden pt-32"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/Hero Section Background.mp4" type="video/mp4" />
        {/* Fallback gradient background if video fails to load */}
        <div className="absolute inset-0 hero-gradient" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="container mx-auto px-6 text-center relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Logo space */}
          <motion.div 
            variants={itemVariants}
            className="mb-16"
          >
            <div className="w-40 h-40 mx-auto rounded-3xl overflow-hidden glow-primary mb-8">
              <img 
                src="/pixelcut-export.png" 
                alt="Seven Scale Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="font-heading font-semibold text-6xl md:text-7xl lg:text-8xl leading-tight mt-8">
              Seven Scale
            </h1>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="font-heading font-semibold text-3xl md:text-5xl lg:text-6xl mb-8 leading-tight"
          >
            Scale Faster. <span className="text-gradient">Smarter.</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mt-8 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Web Design, Marketing, SEO, Content Creation, and Social Media Management—engineered to grow your business.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="btn-primary text-lg px-8 py-4 focus-ring"
              >
                Get a Free Strategy Call
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "var(--surface-glass-hover)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10 focus-ring"
              >
                See Our Packages
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto"
          >
            {[
              { icon: "💻", label: "Web Design" },
              { icon: "🚀", label: "SEO" },
              { icon: "📲", label: "Social Media" },
              { icon: "📝", label: "Content" },
              { icon: "📊", label: "Marketing" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-4 rounded-3xl text-center"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "var(--surface-glass-hover)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;