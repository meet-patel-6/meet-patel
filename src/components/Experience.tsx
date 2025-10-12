import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      title: "Research & Development Intern",
      company: "FinLogic Technologies",
      location: "Surat, IN",
      period: "Dec 2023 – Jul 2024",
      type: "Full-time",
      description: "Worked on core projects including FinStudio migration from Spring MVC to Spring Boot, developed custom Python libraries for database interaction, and implemented centralized server & DB configuration strategies.",
      achievements: [
        "Developed custom Python library for streamlined database interaction",
        "Migrated FinStudio from Spring MVC to Spring Boot",
        "Designed centralized server & DB configuration strategy",
        "Developed Spring Boot API for PDF/XML report generation",
        "Improved back-end efficiency with SQL optimization"
      ],
      technologies: ["Spring Boot", "Python", "SQL", "PL-SQL", "API Development"]
    },
    {
      title: "Research Internship",
      company: "Vrije Universiteit Brussel",
      location: "Remote",
      period: "May 2023 – Jul 2023",
      type: "Research",
      description: "Built a decentralized application for assessments using Ethereum blockchain with advanced security features and comprehensive testing for vulnerability, latency, and scalability.",
      achievements: [
        "Built decentralized app for assessments using Ethereum blockchain",
        "Implemented AES encryption, hybrid cryptography, and bcrypt hashing",
        "Developed result generation and faculty verification features",
        "Implemented controlled sharing mechanisms",
        "Conducted comprehensive vulnerability, latency, and scalability testing"
      ],
      technologies: ["Ethereum", "Blockchain", "AES Encryption", "JavaScript", "Solidity"],
      github: "https://github.com/meet-thummar"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.experience.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="gradient-card shadow-medium border-0 hover:shadow-strong transition-smooth">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <h3 className="text-2xl font-semibold">{exp.title}</h3>
                      <Badge className="bg-primary text-primary-foreground w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="text-xl text-primary font-medium mb-4">{exp.company}</div>
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      {exp.github && (
                        <a 
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:text-primary-hover transition-smooth"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>{t.experience.viewProject}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{t.experience.achievements}</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">{t.experience.technologies}</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-tech/10 text-tech hover:bg-tech/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;