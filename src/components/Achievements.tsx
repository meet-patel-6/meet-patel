import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, BookOpen, Users, Copyright, GraduationCap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "GATE Top 0.7% Nationwide",
      description: "Secured a top 0.7 percent position in GATE (Graduate Aptitude Test in Engineering), a national-level computer science graduate examination in India.",
      category: "Academic Excellence",
      icon: <GraduationCap className="w-6 h-6" />,
      year: "2024",
      color: "bg-primary"
    },
    {
      title: "Copyright Holder - Greenity Application",
      description: "Secured Copyright (Intellectual Property Rights) for the Greenity Mobile Application in January 2024, recognizing the innovation and originality of the solution.",
      category: "Intellectual Property",
      icon: <Copyright className="w-6 h-6" />,
      year: "2024",
      color: "bg-accent"
    },
    {
      title: "State-Level Hackathon Winner",
      description: "Led a team of six developers to victory in a state-level hackathon, developing the Greenity Application from scratch within 2 months using the spiral model.",
      category: "Competition",
      icon: <Trophy className="w-6 h-6" />,
      year: "2023",
      color: "bg-secondary"
    },
    {
      title: "TFWS Scholarship Awardee",
      description: "Recipient of the Tuition Fee Waiver Scheme (TFWS) scholarship, where all undergraduate tuition fees were paid by the State Government. Awarded to top 3% students based on academic achievements.",
      category: "Scholarship",
      icon: <Award className="w-6 h-6" />,
      year: "2020-2024",
      color: "bg-tech"
    },
    {
      title: "1000+ Algorithmic Problems Solved",
      description: "Demonstrated consistent problem-solving skills by solving over 1000 algorithmic problems (Data Structures & Algorithms) across various coding platforms.",
      category: "Programming",
      icon: <BookOpen className="w-6 h-6" />,
      year: "Ongoing",
      color: "bg-primary"
    },
    {
      title: "ACM India Winter School Selection",
      description: "Selected among 40 students nationwide to attend ACM India-hosted winter school on Optimization in ML and Operational Research at IIT-Goa campus.",
      category: "Research",
      icon: <Users className="w-6 h-6" />,
      year: "2023",
      color: "bg-accent"
    },
    {
      title: "Software Engineering Volunteer Instructor",
      description: "Volunteered to teach Software Engineering and Flutter Development to international students for two months, demonstrating leadership and knowledge sharing.",
      category: "Teaching",
      icon: <Users className="w-6 h-6" />,
      year: "2023",
      color: "bg-secondary"
    }
  ];

  const stats = [
    { label: "GATE Percentile", value: "99.3%", description: "National Ranking" },
    { label: "Problems Solved", value: "1000+", description: "DSA Challenges" },
    { label: "Team Size Led", value: "6", description: "Hackathon Project" },
    { label: "Research Schools", value: "1", description: "IIT-Goa Selection" }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Achievements & Recognition</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition of excellence in academics, research, and leadership through 
            competitions, scholarships, and professional contributions.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="gradient-card shadow-soft border-0 text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="gradient-card shadow-medium border-0 hover:shadow-strong transition-smooth">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 ${achievement.color} rounded-xl text-white`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{achievement.title}</h3>
                      <Badge variant="outline" className="w-fit">
                        {achievement.year}
                      </Badge>
                    </div>
                    <Badge className="bg-muted text-muted-foreground mb-4">
                      {achievement.category}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="gradient-card shadow-medium border-0 max-w-4xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                These achievements represent milestones in my journey of continuous learning 
                and professional development. I'm always eager to take on new challenges and 
                contribute to innovative projects in AI and technology.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-primary text-primary-foreground px-4 py-2">
                  Problem Solver
                </Badge>
                <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
                  Team Leader
                </Badge>
                <Badge className="bg-accent text-accent-foreground px-4 py-2">
                  Innovation Driver
                </Badge>
                <Badge className="bg-tech text-tech-foreground px-4 py-2">
                  Research Enthusiast
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;