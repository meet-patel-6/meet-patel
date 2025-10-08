import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Meet Thummar</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI Engineering student at TU Darmstadt, passionate about machine learning, 
              blockchain technology, and building innovative solutions that make a difference.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('mailto:thummarmeet15@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('tel:+4915510291172', '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Achievements", href: "#achievements" },
                { label: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <button
                  onClick={() => document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="space-y-3 mb-6">
              <a 
                href="https://linkedin.com/in/meet-thummar15"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
              <a 
                href="https://github.com/meet-patel-6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Github className="w-5 h-5" />
                <span>GitHub Repository</span>
              </a>
            </div>
            <p className="text-muted-foreground/80 text-sm">
              Open to collaboration and new opportunities in AI, ML, and software development.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Meet Thummar. All rights reserved. | Built with passion for innovation.
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-muted-foreground text-sm">
              Made with React & TypeScript
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;