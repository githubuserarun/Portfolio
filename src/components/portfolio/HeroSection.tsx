import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAboutContent, useSocialLinks } from "@/hooks/usePortfolioData";

const HeroSection = () => {
  const { data: about } = useAboutContent();
  const { data: socialLinks } = useSocialLinks();
  const [typedText, setTypedText] = useState("");
  const roles = ["Full Stack Developer", "Crypto Application Developer", "React.js Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentRole.length) {
            setTypedText(currentRole.slice(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(typedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex, roles]);

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github size={20} />;
      case "linkedin":
        return <Linkedin size={20} />;
      case "email":
        return <Mail size={20} />;
      default:
        return <Mail size={20} />;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(185 80% 50% / 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(185 80% 50% / 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient glow-text">{about?.title || "Arunkumar R"}</span>
          </h1>

          {/* Typing effect */}
          <div className="h-12 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground font-mono">
              <span className="text-primary">&lt;</span>
              {typedText}
              <span className="animate-blink text-primary">|</span>
              <span className="text-primary">/&gt;</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {about?.subtitle || "Building scalable microservices for crypto exchange platforms with expertise in MERN stack"}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-all glow-cyan px-8"
            >
              <a href="#projects">View My Work</a>
            </Button>
            {about?.resume_url && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 px-8"
              >
                <a href={about.resume_url} download="Arun_mern_dev.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2" size={18} />
                  Download CV
                </a>
              </Button>
            )}
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            {socialLinks?.slice(0, 3).map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:glow-cyan"
              >
                {getSocialIcon(link.platform)}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
