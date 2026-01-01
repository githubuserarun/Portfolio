import { Code, Database, Server, Zap } from "lucide-react";
import { useAboutContent } from "@/hooks/usePortfolioData";

const highlights = [
  { icon: Code, label: "Clean Code" },
  { icon: Server, label: "Microservices" },
  { icon: Database, label: "Database Design" },
  { icon: Zap, label: "Performance" },
];

const AboutSection = () => {
  const { data: about, isLoading } = useAboutContent();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">&lt;about&gt;</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image/Visual */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-2xl border border-primary/20 rotate-6" />
                <div className="absolute inset-0 rounded-2xl border border-secondary/20 -rotate-6" />
                
                {/* Main content box */}
                <div className="relative rounded-2xl bg-card p-8 card-glow border-glow h-full flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    {highlights.map((item, index) => (
                      <div
                        key={item.label}
                        className="p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-all duration-300 group"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <item.icon className="w-8 h-8 text-primary mb-2 group-hover:animate-pulse" />
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-gradient">1+</p>
                      <p className="text-xs text-muted-foreground">Years Exp</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gradient">10+</p>
                      <p className="text-xs text-muted-foreground">Projects</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gradient">5+</p>
                      <p className="text-xs text-muted-foreground">Tech Stack</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                {about?.subtitle || "Full Stack (MERN) Developer"}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {about?.description || 
                  "I am an enthusiastic Full Stack Developer with hands-on experience in building scalable microservices for crypto exchange platforms. Proficient in MERN stack with strong expertise in React, Node.js, and both SQL and NoSQL databases."}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3">
                {[about?.highlight_1, about?.highlight_2, about?.highlight_3]
                  .filter(Boolean)
                  .map((highlight, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
              </div>

              {/* Tech focus */}
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <p className="text-sm font-mono text-muted-foreground">
                  <span className="text-primary">const</span> focus = [
                  <span className="text-secondary">"Crypto Exchanges"</span>,{" "}
                  <span className="text-secondary">"Microservices"</span>,{" "}
                  <span className="text-secondary">"Real-time Apps"</span>
                  ];
                </p>
              </div>
            </div>
          </div>

          <p className="text-primary font-mono text-sm text-center mt-16">&lt;/about&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
