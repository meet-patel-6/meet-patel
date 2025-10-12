import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: "Greenity Application",
      category: "Mobile Application",
      description: "A state-level hackathon winning application that connects citizens and municipal corporations to improve urban greenery. Led a team of six developers with full code integration responsibility.",
      highlights: [
        "Won state-level hackathon competition",
        "Led team of 6 developers",
        "Complete development in 2 months using spiral model",
        "Secured Copyright (Intellectual Property Rights) in Jan 2024",
        "Role-based authentication system",
        "Real-time database integration"
      ],
      technologies: ["Mobile Development", "Real-time Database", "Authentication", "Team Leadership"],
      features: ["Role-based Authentication", "Real-time Updates", "Municipal Integration", "Urban Planning"],
      icon: <Award className="w-6 h-6" />,
      status: "Copyright Secured"
    },
    {
      title: "Decentralized Assessment Platform",
      category: "Blockchain Application",
      description: "Built during research internship at VUB, this Ethereum-based platform provides secure, decentralized assessments with advanced cryptography and faculty verification systems.",
      highlights: [
        "Ethereum blockchain implementation",
        "Advanced security with AES & hybrid cryptography",
        "Faculty verification system",
        "Comprehensive vulnerability testing",
        "Scalability and latency optimization",
        "Controlled sharing mechanisms"
      ],
      technologies: ["Ethereum", "Solidity", "AES Encryption", "Blockchain", "Cryptography"],
      features: ["Decentralized Storage", "Secure Assessments", "Faculty Verification", "Result Generation"],
      icon: <ExternalLink className="w-6 h-6" />,
      status: "Research Project",
      github: "https://github.com/meet-thummar"
    },
    {
      title: "Movie Recommender System",
      category: "Machine Learning",
      description: "An intelligent movie recommendation system trained on IMDB dataset with an interactive frontend built using Streamlit and integrated with TMDB API for movie posters.",
      highlights: [
        "Trained on comprehensive IMDB dataset",
        "Interactive Streamlit frontend",
        "TMDB API integration for movie posters",
        "Recommendation algorithm optimization",
        "User-friendly interface design"
      ],
      technologies: ["Python", "Machine Learning", "Streamlit", "TMDB API", "Data Analysis"],
      features: ["Personalized Recommendations", "Movie Posters", "Interactive UI", "IMDB Data"],
      icon: <Github className="w-6 h-6" />,
      status: "Completed"
    },
    {
      title: "Next Block Reward Predictor",
      category: "Blockchain Analytics",
      description: "A machine learning model using Random Forest Regressor to predict Ethereum block rewards based on historical blockchain data from Etherscan API.",
      highlights: [
        "Random Forest Regressor implementation",
        "Etherscan API data collection",
        "Time series analysis and preprocessing",
        "Blockchain data pattern recognition",
        "Predictive model optimization"
      ],
      technologies: ["Python", "Random Forest", "Etherscan API", "Time Series", "Data Preprocessing"],
      features: ["Reward Prediction", "Historical Analysis", "API Integration", "ML Algorithms"],
      icon: <ExternalLink className="w-6 h-6" />,
      status: "Research"
    },
    {
      title: "Text-to-Speech Browser Extension",
      category: "Web Extension",
      description: "A browser extension that reads selected text aloud from webpages, available in both English and German versions for accessibility and language learning.",
      highlights: [
        "Multi-language support (English & German)",
        "Browser extension development",
        "Text selection and speech synthesis",
        "User accessibility features",
        "Cross-browser compatibility"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Web APIs", "Browser Extension"],
      features: ["Text-to-Speech", "Multi-language", "Accessibility", "Easy Integration"],
      icon: <Users className="w-6 h-6" />,
      status: "Published"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.projects.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="gradient-card shadow-medium border-0 hover:shadow-strong transition-smooth group">
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 gradient-hero rounded-lg text-white">
                      {project.icon}
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <Badge className={`
                    ${project.status === 'Copyright Secured' ? 'bg-accent text-accent-foreground' : ''}
                    ${project.status === 'Research Project' ? 'bg-secondary text-secondary-foreground' : ''}
                    ${project.status === 'Completed' ? 'bg-tech text-tech-foreground' : ''}
                    ${project.status === 'Research' ? 'bg-primary text-primary-foreground' : ''}
                    ${project.status === 'Published' ? 'bg-green-500 text-white' : ''}
                  `}>
                    {project.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{t.projects.highlights}</h4>
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 4).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{t.projects.technologies}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{t.projects.features}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <Badge key={i} className="bg-tech/10 text-tech text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.github && (
                  <div className="mt-auto pt-4">
                    <Button 
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t.projects.viewGithub}
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;