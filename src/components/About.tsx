import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Currently pursuing my Master's in AI & ML at TU Darmstadt, I'm driven by the potential 
            of artificial intelligence to solve complex real-world problems. My journey spans from 
            blockchain development to machine learning applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center gradient-card shadow-medium border-0 hover:shadow-strong transition-smooth">
            <div className="w-16 h-16 mx-auto mb-6 gradient-hero rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <p className="text-muted-foreground">
              M.Sc. in AI & ML at TU Darmstadt, with strong foundations in algorithms, 
              machine learning, and cloud computing from my B.Tech.
            </p>
          </Card>

          <Card className="p-8 text-center gradient-card shadow-medium border-0 hover:shadow-strong transition-smooth">
            <div className="w-16 h-16 mx-auto mb-6 gradient-accent rounded-full flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <p className="text-muted-foreground">
              Research & Development experience with Spring Boot, blockchain technology, 
              and database optimization across multiple internships.
            </p>
          </Card>

          <Card className="p-8 text-center gradient-card shadow-medium border-0 hover:shadow-strong transition-smooth">
            <div className="w-16 h-16 mx-auto mb-6 bg-tech rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <p className="text-muted-foreground">
              Top 0.7% in GATE, state-level hackathon winner, copyright holder, 
              and 1000+ algorithmic problems solved.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My passion for technology began during my undergraduate studies, where I excelled 
                in computer engineering fundamentals. Securing a top 0.7% position in GATE opened 
                doors to advanced studies in AI and Machine Learning.
              </p>
              <p>
                Through internships at FinLogic Technologies and Vrije Universiteit Brussel, I've 
                gained hands-on experience in full-stack development, blockchain technology, and 
                research methodologies. My projects range from decentralized applications to 
                machine learning models.
              </p>
              <p>
                Currently at TU Darmstadt, I'm deepening my expertise in Deep Learning for NLP 
                and Statistical Machine Learning, preparing to tackle tomorrow's AI challenges.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 gradient-card rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
              <div className="text-center p-6 gradient-card rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-secondary mb-2">0.7%</div>
                <div className="text-sm text-muted-foreground">GATE Rank</div>
              </div>
              <div className="text-center p-6 gradient-card rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-accent mb-2">6</div>
                <div className="text-sm text-muted-foreground">Team Projects</div>
              </div>
              <div className="text-center p-6 gradient-card rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-tech mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;