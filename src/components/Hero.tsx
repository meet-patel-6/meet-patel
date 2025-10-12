import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, MapPin, Code, Brain, Cpu, Database } from "lucide-react";
import profileImage from "@/assets/meet.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              {t.hero.badge}
            </div>
            
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {t.hero.hello} <span className="text-primary">{t.hero.name}</span>
                <br />
                <span className="text-secondary">{t.hero.surname}</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-4 text-muted-foreground font-light">
                {t.hero.subtitle}
                <br />
                <span className="text-foreground">{t.hero.subtitleBold}</span>
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{t.hero.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{t.hero.email}</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold"
                onClick={() => scrollToSection('projects')}
              >
                <Code className="w-5 h-5 mr-2" />
                {t.hero.seeWork}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                {t.hero.getInTouch}
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center animate-fade-in">
            {/* Rotating border */}
            <div className="relative">
              <div className="w-96 h-96 rounded-full gradient-accent p-1">
                <div className="w-full h-full rounded-full bg-background p-6">
                  <img 
                    src={profileImage} 
                    alt="Meet Thummar - AI Engineering Student" 
                    className="w-full h-full rounded-full object-cover shadow-strong"
                  />
                </div>
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-full p-3 shadow-medium animate-float">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute top-1/4 -left-6 bg-card border border-border rounded-full p-3 shadow-medium animate-float" style={{ animationDelay: '1s' }}>
                <Code className="w-6 h-6 text-secondary" />
              </div>
              <div className="absolute bottom-1/4 -right-8 bg-card border border-border rounded-full p-3 shadow-medium animate-float" style={{ animationDelay: '2s' }}>
                <Database className="w-6 h-6 text-accent" />
              </div>
              <div className="absolute -bottom-2 -left-4 bg-card border border-border rounded-full p-3 shadow-medium animate-float" style={{ animationDelay: '3s' }}>
                <Cpu className="w-6 h-6 text-tech" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            className="w-8 h-8 text-muted-foreground cursor-pointer hover:text-foreground transition-smooth" 
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;