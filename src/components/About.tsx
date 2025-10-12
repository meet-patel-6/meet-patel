import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Trophy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.about.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.about.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center gradient-card shadow-medium border-0 hover:shadow-strong transition-smooth">
            <div className="w-16 h-16 mx-auto mb-6 gradient-hero rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{t.about.education.title}</h3>
            <p className="text-muted-foreground">
              {t.about.education.text}
            </p>
          </Card>

          <Card className="p-8 text-center gradient-card shadow-medium border-0 hover:shadow-strong transition-smooth">
            <div className="w-16 h-16 mx-auto mb-6 gradient-accent rounded-full flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{t.about.experience.title}</h3>
            <p className="text-muted-foreground">
              {t.about.experience.text}
            </p>
          </Card>

          <Card className="p-8 text-center gradient-card shadow-medium border-0 hover:shadow-strong transition-smooth">
            <div className="w-16 h-16 mx-auto mb-6 bg-tech rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{t.about.achievements.title}</h3>
            <p className="text-muted-foreground">
              {t.about.achievements.text}
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">{t.about.journey.title}</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>{t.about.journey.p1}</p>
              <p>{t.about.journey.p2}</p>
              <p>{t.about.journey.p3}</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 gradient-card rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">{t.about.stats.problems}</div>
              </div>
              <div className="text-center p-6 gradient-card rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-secondary mb-2">0.7%</div>
                <div className="text-sm text-muted-foreground">{t.about.stats.gateRank}</div>
              </div>
              <div className="text-center p-6 gradient-card rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-accent mb-2">6</div>
                <div className="text-sm text-muted-foreground">{t.about.stats.projects}</div>
              </div>
              <div className="text-center p-6 gradient-card rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-tech mb-2">2+</div>
                <div className="text-sm text-muted-foreground">{t.about.stats.experience}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
