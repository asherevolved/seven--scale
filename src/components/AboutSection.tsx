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

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            We build <span className="text-gradient">pipelines</span>, not just pages.
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            We're a performance-focused agency that delivers design, marketing, and campaigns 
            engineered for business growth. Our data-driven approach ensures every decision 
            moves the needle on your bottom line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <div
              key={index}
              className="text-center animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-bold text-lg glow-primary">
                  {item.step}
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">
                {item.title}
              </h3>
              <p className="text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="font-heading font-semibold text-2xl mb-4">
              Ready to scale your business?
            </h3>
            <p className="text-foreground/80 mb-6">
              Join hundreds of businesses that have transformed their growth with Seven Scale.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-gradient">250+</div>
                <div className="text-sm text-foreground/70">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">98%</div>
                <div className="text-sm text-foreground/70">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">5x</div>
                <div className="text-sm text-foreground/70">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;