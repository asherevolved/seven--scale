import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6">
            Scale Faster.{" "}
            <span className="text-gradient">Smarter.</span>
            <br />
            With Seven Scale.
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            Web Design, Marketing, SEO, Content Creation, and Social Media Management—engineered to grow your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 glow-primary animate-glow-pulse"
            >
              Get a Free Strategy Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="text-lg px-8 py-4 border-primary/30 text-foreground hover:bg-primary/10"
            >
              See Our Packages
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-2xl mx-auto">
            {[
              { icon: "🌐", label: "Web Design" },
              { icon: "📈", label: "SEO" },
              { icon: "📱", label: "Social Media" },
              { icon: "✍️", label: "Content" },
              { icon: "📊", label: "Marketing" },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl text-center animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-sm text-foreground/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;