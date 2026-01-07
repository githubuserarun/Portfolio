import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useSocialLinks } from "@/hooks/usePortfolioData";

const Footer = () => {
  const { data: socialLinks } = useSocialLinks();

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      case "email":
        return <Mail size={18} />;
      default:
        return <Mail size={18} />;
    }
  };

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-gradient">
            AR
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks?.slice(0, 3).map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                {getSocialIcon(link.platform)}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Developed by Arun
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
