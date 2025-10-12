import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Brain, Wrench, Users, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();
  const skillCategories = [
    {
      category: t.skills.categories.programming,
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "SQL", level: 88 }
      ]
    },
    {
      category: t.skills.categories.aiMl,
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "NumPy", level: 92 },
        { name: "Pandas", level: 90 },
        { name: "Matplotlib", level: 85 }
      ]
    },
    {
      category: t.skills.categories.tools,
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Spring Boot", level: 88 },
        { name: "Flask", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Git", level: 90 }
      ]
    },
    {
      category: t.skills.categories.databases,
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "PL-SQL", level: 85 }
      ]
    },
    {
      category: t.skills.categories.softSkills,
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 88 },
        { name: "Adaptability", level: 92 },
        { name: "Quick Learning", level: 95 }
      ]
    },
    {
      category: t.skills.categories.languages,
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "English", level: 95 },
        { name: "Hindi", level: 100 },
        { name: "German", level: 40 }
      ]
    }
  ];

  const technologies = [
    "Deep Learning", "NLP", "Blockchain", "Ethereum", "Solidity", "API Development",
    "Cloud Computing", "Microservices", "Real-time Systems", "Data Preprocessing",
    "Time Series Analysis", "Cryptography", "AES Encryption", "Streamlit",
    "Mobile Development", "Browser Extensions", "Spring MVC", "REST APIs"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.skills.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card shadow-medium border-0 hover:shadow-strong transition-smooth">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 gradient-hero rounded-lg text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i}
                      variant="outline"
                      className="px-3 py-1.5 text-sm"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">{t.skills.techTitle}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Academic Focus */}
        <div className="mt-16">
          <Card className="gradient-card shadow-medium border-0">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">{t.skills.academicFocus.title}</h3>
              <p className="text-muted-foreground mb-6">
                {t.skills.academicFocus.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-accent text-accent-foreground px-4 py-2">
                  {t.skills.academicFocus.focus1}
                </Badge>
                <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
                  {t.skills.academicFocus.focus2}
                </Badge>
                <Badge className="bg-tech text-tech-foreground px-4 py-2">
                  {t.skills.academicFocus.focus3}
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;