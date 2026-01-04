import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast, useToast } from "@/hooks/use-toast";
import { useSocialLinks } from "@/hooks/usePortfolioData";

const ContactSection = () => {
  const { toast } = useToast();
  const { data: socialLinks } = useSocialLinks();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log(result);

      if (!result.success) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "", access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github size={20} />;
      case "linkedin":
        return <Linkedin size={20} />;
      case "email":
        return <Mail size={20} />;
      case "phone":
        return <Phone size={20} />;
      default:
        return <Mail size={20} />;
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">&lt;contact&gt;</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-lg mx-auto">
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-6 rounded-xl bg-card card-glow border-glow">
                <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>

                <div className="space-y-4">
                  {socialLinks?.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        {getSocialIcon(link.platform)}
                      </div>
                      <div>
                        <p className="font-medium">{link.platform}</p>
                        <p className="text-sm text-muted-foreground">
                          {link.url.replace("mailto:", "").replace("tel:", "")}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="p-6 rounded-xl bg-card card-glow border-glow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Madurai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-card card-glow border-glow">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity glow-cyan"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          <p className="text-primary font-mono text-sm text-center mt-16">&lt;/contact&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
