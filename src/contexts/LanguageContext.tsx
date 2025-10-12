import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      achievements: "Achievements",
      contact: "Contact",
      getInTouch: "Get In Touch"
    },
    // Hero Section
    hero: {
      badge: "AI Engineering Student & Software Developer",
      hello: "Hello, I'm",
      name: "Meet",
      surname: "Thummar",
      subtitle: "Turning complex problems into",
      subtitleBold: "elegant solutions...",
      location: "Darmstadt, Germany",
      email: "thummarmeet15@gmail.com",
      description: "M.Sc. student in AI & ML at TU Darmstadt, passionate about developing innovative solutions using machine learning, blockchain technology, and full-stack development.",
      seeWork: "See My Work",
      getInTouch: "Get In Touch"
    },
    // About Section
    about: {
      title: "About Me",
      intro: "Currently pursuing my Master's in AI & ML at TU Darmstadt, I'm driven by the potential of artificial intelligence to solve complex real-world problems. My journey spans from blockchain development to machine learning applications.",
      education: {
        title: "Education",
        text: "M.Sc. in AI & ML at TU Darmstadt, with strong foundations in algorithms, machine learning, and cloud computing from my B.Tech."
      },
      experience: {
        title: "Experience",
        text: "Research & Development experience with Spring Boot, blockchain technology, and database optimization across multiple internships."
      },
      achievements: {
        title: "Achievements",
        text: "Top 0.7% in GATE, state-level hackathon winner, copyright holder, and 1000+ algorithmic problems solved."
      },
      journey: {
        title: "My Journey",
        p1: "My passion for technology began during my undergraduate studies, where I excelled in computer engineering fundamentals. Securing a top 0.7% position in GATE opened doors to advanced studies in AI and Machine Learning.",
        p2: "Through internships at FinLogic Technologies and Vrije Universiteit Brussel, I've gained hands-on experience in full-stack development, blockchain technology, and research methodologies. My projects range from decentralized applications to machine learning models.",
        p3: "Currently at TU Darmstadt, I'm deepening my expertise in Deep Learning for NLP and Statistical Machine Learning, preparing to tackle tomorrow's AI challenges."
      },
      stats: {
        problems: "Problems Solved",
        gateRank: "GATE Rank",
        projects: "Team Projects",
        experience: "Years Experience"
      }
    },
    // Skills Section
    skills: {
      title: "Skills & Expertise",
      subtitle: "A comprehensive overview of my technical skills, tools, and expertise developed through academic projects and professional experience.",
      categories: {
        programming: "Programming Languages",
        aiMl: "AI & Machine Learning",
        tools: "Tools & Frameworks",
        databases: "Databases",
        softSkills: "Soft Skills",
        languages: "Languages"
      },
      techTitle: "Technologies & Specializations",
      academicFocus: {
        title: "Current Academic Focus",
        description: "M.Sc. in AI & ML at TU Darmstadt - Specializing in advanced machine learning techniques",
        focus1: "Deep Learning and NLP",
        focus2: "Statistics",
        focus3: "Open Source Development"
      }
    },
    // Experience Section
    experience: {
      title: "Professional Experience",
      subtitle: "My journey through research and development roles, building expertise in full-stack development, blockchain technology, and AI applications.",
      achievements: "Key Achievements:",
      technologies: "Technologies Used:",
      viewProject: "View Project"
    },
    // Achievements Section
    achievements: {
      title: "Achievements & Recognition",
      subtitle: "Recognition of excellence in academics, research, and leadership through competitions, scholarships, and professional contributions.",
      stats: {
        gatePercentile: "GATE Percentile",
        nationalRanking: "National Ranking",
        problemsSolved: "Problems Solved",
        dsaChallenges: "DSA Challenges",
        teamSize: "Team Size Led",
        hackathon: "Hackathon Project",
        researchSchools: "Research Schools",
        iitSelection: "IIT-Goa Selection"
      },
      categories: {
        academic: "Academic Excellence",
        ip: "Intellectual Property",
        competition: "Competition",
        scholarship: "Scholarship",
        programming: "Programming",
        research: "Research",
        teaching: "Teaching"
      },
      cta: {
        title: "Continuous Learning & Growth",
        text: "These achievements represent milestones in my journey of continuous learning and professional development. I'm always eager to take on new challenges and contribute to innovative projects in AI and technology.",
        badge1: "Problem Solver",
        badge2: "Team Leader",
        badge3: "Innovation Driver",
        badge4: "Research Enthusiast"
      }
    },
    // Projects Section
    projects: {
      title: "Featured Projects",
      subtitle: "A showcase of my technical projects spanning blockchain technology, machine learning, mobile applications, and web development.",
      highlights: "Key Highlights:",
      technologies: "Technologies:",
      features: "Features:",
      viewGithub: "View on GitHub"
    },
    // Contact Section
    contact: {
      title: "Get In Touch",
      subtitle: "I'm always interested in discussing new opportunities, collaborations, or innovative projects in AI and technology. Let's connect!",
      info: {
        title: "Contact Information",
        email: "Email",
        phone: "Phone",
        location: "Location",
        linkedin: "LinkedIn",
        github: "GitHub"
      },
      status: {
        title: "Current Status",
        available: "Available for new opportunities",
        studying: "Currently pursuing M.Sc. at TU Darmstadt",
        research: "Open to research collaborations"
      },
      collaborate: {
        title: "Let's Collaborate",
        text: "Whether you're looking for a dedicated AI engineer, need consultation on machine learning projects, or want to discuss research opportunities, I'd love to hear from you.",
        sendEmail: "Send Email",
        linkedin: "LinkedIn",
        github: "GitHub"
      },
      lookingFor: {
        title: "What I'm Looking For",
        role1: "🚀 AI/ML Engineering Roles",
        role2: "🔬 Research Opportunities",
        role3: "💻 Full-Stack Development Projects",
        role4: "🤝 Open Source Collaborations",
        role5: "📚 Knowledge Sharing & Mentoring"
      },
      cta: {
        title: "Ready to Start a Conversation?",
        text: "I respond to all messages within 24 hours. Let's discuss how we can work together!",
        button: "Start Conversation"
      }
    },
    // Footer Section
    footer: {
      intro: "AI Engineering student at TU Darmstadt, passionate about machine learning, blockchain technology, and building innovative solutions that make a difference.",
      quickLinks: "Quick Links",
      connect: "Connect With Me",
      linkedinProfile: "LinkedIn Profile",
      githubRepo: "GitHub Repository",
      openTo: "Open to collaboration and new opportunities in AI, ML, and software development.",
      copyright: "Meet Thummar. All rights reserved. | Built with passion for innovation.",
      madeWith: "Made with React & TypeScript",
      backToTop: "Back to Top",
      email: "Email",
      call: "Call"
    }
  },
  de: {
    // Navigation
    nav: {
      about: "Über mich",
      experience: "Erfahrung",
      projects: "Projekte",
      skills: "Fähigkeiten",
      achievements: "Erfolge",
      contact: "Kontakt",
      getInTouch: "Kontakt aufnehmen"
    },
    // Hero Section
    hero: {
      badge: "KI-Ingenieurstudent & Softwareentwickler",
      hello: "Hallo, ich bin",
      name: "Meet",
      surname: "Thummar",
      subtitle: "Komplexe Probleme in",
      subtitleBold: "elegante Lösungen verwandeln...",
      location: "Darmstadt, Deutschland",
      email: "thummarmeet15@gmail.com",
      description: "M.Sc.-Student in KI & ML an der TU Darmstadt, leidenschaftlich an der Entwicklung innovativer Lösungen mit maschinellem Lernen, Blockchain-Technologie und Full-Stack-Entwicklung interessiert.",
      seeWork: "Meine Arbeit ansehen",
      getInTouch: "Kontakt aufnehmen"
    },
    // About Section
    about: {
      title: "Über mich",
      intro: "Derzeit absolviere ich meinen Master in KI & ML an der TU Darmstadt. Ich bin vom Potenzial der künstlichen Intelligenz zur Lösung komplexer realer Probleme angetrieben. Meine Reise erstreckt sich von der Blockchain-Entwicklung bis zu maschinellen Lernanwendungen.",
      education: {
        title: "Ausbildung",
        text: "M.Sc. in KI & ML an der TU Darmstadt, mit starken Grundlagen in Algorithmen, maschinellem Lernen und Cloud Computing aus meinem B.Tech."
      },
      experience: {
        title: "Erfahrung",
        text: "Forschungs- und Entwicklungserfahrung mit Spring Boot, Blockchain-Technologie und Datenbankoptimierung über mehrere Praktika hinweg."
      },
      achievements: {
        title: "Erfolge",
        text: "Top 0,7% bei GATE, Gewinner eines Hackathons auf Landesebene, Urheberrechtsinhaber und über 1000 gelöste algorithmische Probleme."
      },
      journey: {
        title: "Meine Reise",
        p1: "Meine Leidenschaft für Technologie begann während meines Grundstudiums, wo ich in den Grundlagen der Computerentwicklung herausragte. Eine Position unter den besten 0,7% bei GATE öffnete Türen zu fortgeschrittenen Studien in KI und maschinellem Lernen.",
        p2: "Durch Praktika bei FinLogic Technologies und der Vrije Universiteit Brussel habe ich praktische Erfahrungen in der Full-Stack-Entwicklung, Blockchain-Technologie und Forschungsmethoden gesammelt. Meine Projekte reichen von dezentralen Anwendungen bis hin zu maschinellen Lernmodellen.",
        p3: "Derzeit an der TU Darmstadt vertiefe ich mein Fachwissen im Deep Learning für NLP und statistisches maschinelles Lernen, um die KI-Herausforderungen von morgen zu bewältigen."
      },
      stats: {
        problems: "Gelöste Probleme",
        gateRank: "GATE-Rang",
        projects: "Team-Projekte",
        experience: "Jahre Erfahrung"
      }
    },
    // Skills Section
    skills: {
      title: "Fähigkeiten & Expertise",
      subtitle: "Ein umfassender Überblick über meine technischen Fähigkeiten, Tools und Fachkenntnisse, die durch akademische Projekte und berufliche Erfahrung entwickelt wurden.",
      categories: {
        programming: "Programmiersprachen",
        aiMl: "KI & maschinelles Lernen",
        tools: "Tools & Frameworks",
        databases: "Datenbanken",
        softSkills: "Soft Skills",
        languages: "Sprachen"
      },
      techTitle: "Technologien & Spezialisierungen",
      academicFocus: {
        title: "Aktueller akademischer Fokus",
        description: "M.Sc. in KI & ML an der TU Darmstadt - Spezialisierung auf fortgeschrittene Techniken des maschinellen Lernens",
        focus1: "Deep Learning und NLP",
        focus2: "Statistik",
        focus3: "Open-Source-Entwicklung"
      }
    },
    // Experience Section
    experience: {
      title: "Berufserfahrung",
      subtitle: "Meine Reise durch Forschungs- und Entwicklungsrollen, Aufbau von Expertise in Full-Stack-Entwicklung, Blockchain-Technologie und KI-Anwendungen.",
      achievements: "Wichtigste Erfolge:",
      technologies: "Verwendete Technologien:",
      viewProject: "Projekt ansehen"
    },
    // Achievements Section
    achievements: {
      title: "Erfolge & Anerkennung",
      subtitle: "Anerkennung für Exzellenz in Akademie, Forschung und Führung durch Wettbewerbe, Stipendien und berufliche Beiträge.",
      stats: {
        gatePercentile: "GATE-Perzentil",
        nationalRanking: "Nationale Rangliste",
        problemsSolved: "Gelöste Probleme",
        dsaChallenges: "DSA-Herausforderungen",
        teamSize: "Geleitete Teamgröße",
        hackathon: "Hackathon-Projekt",
        researchSchools: "Forschungsschulen",
        iitSelection: "IIT-Goa-Auswahl"
      },
      categories: {
        academic: "Akademische Exzellenz",
        ip: "Geistiges Eigentum",
        competition: "Wettbewerb",
        scholarship: "Stipendium",
        programming: "Programmierung",
        research: "Forschung",
        teaching: "Lehre"
      },
      cta: {
        title: "Kontinuierliches Lernen & Wachstum",
        text: "Diese Erfolge stellen Meilensteine in meiner Reise des kontinuierlichen Lernens und der beruflichen Entwicklung dar. Ich bin immer bereit, neue Herausforderungen anzunehmen und zu innovativen Projekten in KI und Technologie beizutragen.",
        badge1: "Problemlöser",
        badge2: "Teamleiter",
        badge3: "Innovationstreiber",
        badge4: "Forschungsbegeisterter"
      }
    },
    // Projects Section
    projects: {
      title: "Featured-Projekte",
      subtitle: "Eine Präsentation meiner technischen Projekte, die Blockchain-Technologie, maschinelles Lernen, mobile Anwendungen und Webentwicklung umfassen.",
      highlights: "Wichtige Highlights:",
      technologies: "Technologien:",
      features: "Funktionen:",
      viewGithub: "Auf GitHub ansehen"
    },
    // Contact Section
    contact: {
      title: "Kontakt aufnehmen",
      subtitle: "Ich bin immer daran interessiert, neue Möglichkeiten, Kooperationen oder innovative Projekte in KI und Technologie zu diskutieren. Lassen Sie uns in Kontakt treten!",
      info: {
        title: "Kontaktinformationen",
        email: "E-Mail",
        phone: "Telefon",
        location: "Standort",
        linkedin: "LinkedIn",
        github: "GitHub"
      },
      status: {
        title: "Aktueller Status",
        available: "Verfügbar für neue Möglichkeiten",
        studying: "Derzeit M.Sc. an der TU Darmstadt",
        research: "Offen für Forschungskooperationen"
      },
      collaborate: {
        title: "Lassen Sie uns zusammenarbeiten",
        text: "Ob Sie einen engagierten KI-Ingenieur suchen, Beratung zu Projekten des maschinellen Lernens benötigen oder Forschungsmöglichkeiten besprechen möchten, ich würde mich freuen, von Ihnen zu hören.",
        sendEmail: "E-Mail senden",
        linkedin: "LinkedIn",
        github: "GitHub"
      },
      lookingFor: {
        title: "Was ich suche",
        role1: "🚀 KI/ML-Ingenieurpositionen",
        role2: "🔬 Forschungsmöglichkeiten",
        role3: "💻 Full-Stack-Entwicklungsprojekte",
        role4: "🤝 Open-Source-Kooperationen",
        role5: "📚 Wissensaustausch & Mentoring"
      },
      cta: {
        title: "Bereit für ein Gespräch?",
        text: "Ich antworte auf alle Nachrichten innerhalb von 24 Stunden. Lassen Sie uns besprechen, wie wir zusammenarbeiten können!",
        button: "Gespräch beginnen"
      }
    },
    // Footer Section
    footer: {
      intro: "KI-Ingenieurstudent an der TU Darmstadt, leidenschaftlich an maschinellem Lernen, Blockchain-Technologie und der Entwicklung innovativer Lösungen, die einen Unterschied machen.",
      quickLinks: "Schnelllinks",
      connect: "Verbinden Sie sich mit mir",
      linkedinProfile: "LinkedIn-Profil",
      githubRepo: "GitHub-Repository",
      openTo: "Offen für Zusammenarbeit und neue Möglichkeiten in KI, ML und Softwareentwicklung.",
      copyright: "Meet Thummar. Alle Rechte vorbehalten. | Mit Leidenschaft für Innovation gebaut.",
      madeWith: "Erstellt mit React & TypeScript",
      backToTop: "Zurück nach oben",
      email: "E-Mail",
      call: "Anrufen"
    }
  },
  fr: {
    // Navigation
    nav: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      achievements: "Réalisations",
      contact: "Contact",
      getInTouch: "Prendre contact"
    },
    // Hero Section
    hero: {
      badge: "Étudiant en ingénierie IA et développeur logiciel",
      hello: "Bonjour, je suis",
      name: "Meet",
      surname: "Thummar",
      subtitle: "Transformer des problèmes complexes en",
      subtitleBold: "solutions élégantes...",
      location: "Darmstadt, Allemagne",
      email: "thummarmeet15@gmail.com",
      description: "Étudiant en M.Sc. en IA & ML à TU Darmstadt, passionné par le développement de solutions innovantes utilisant l'apprentissage automatique, la technologie blockchain et le développement full-stack.",
      seeWork: "Voir mon travail",
      getInTouch: "Prendre contact"
    },
    // About Section
    about: {
      title: "À propos de moi",
      intro: "Actuellement en Master en IA & ML à TU Darmstadt, je suis motivé par le potentiel de l'intelligence artificielle pour résoudre des problèmes réels complexes. Mon parcours s'étend du développement blockchain aux applications d'apprentissage automatique.",
      education: {
        title: "Éducation",
        text: "M.Sc. en IA & ML à TU Darmstadt, avec de solides fondations en algorithmes, apprentissage automatique et cloud computing de mon B.Tech."
      },
      experience: {
        title: "Expérience",
        text: "Expérience en recherche et développement avec Spring Boot, technologie blockchain et optimisation de bases de données à travers plusieurs stages."
      },
      achievements: {
        title: "Réalisations",
        text: "Top 0,7% à GATE, vainqueur d'un hackathon au niveau de l'État, détenteur de droits d'auteur et plus de 1000 problèmes algorithmiques résolus."
      },
      journey: {
        title: "Mon parcours",
        p1: "Ma passion pour la technologie a commencé pendant mes études de premier cycle, où j'ai excellé dans les fondamentaux de l'ingénierie informatique. Obtenir une position dans le top 0,7% à GATE a ouvert des portes vers des études avancées en IA et apprentissage automatique.",
        p2: "Grâce à des stages chez FinLogic Technologies et Vrije Universiteit Brussel, j'ai acquis une expérience pratique en développement full-stack, technologie blockchain et méthodologies de recherche. Mes projets vont des applications décentralisées aux modèles d'apprentissage automatique.",
        p3: "Actuellement à TU Darmstadt, j'approfondis mon expertise en Deep Learning pour le NLP et l'apprentissage automatique statistique, me préparant à relever les défis de l'IA de demain."
      },
      stats: {
        problems: "Problèmes résolus",
        gateRank: "Rang GATE",
        projects: "Projets d'équipe",
        experience: "Années d'expérience"
      }
    },
    // Skills Section
    skills: {
      title: "Compétences et expertise",
      subtitle: "Un aperçu complet de mes compétences techniques, outils et expertise développés à travers des projets académiques et une expérience professionnelle.",
      categories: {
        programming: "Langages de programmation",
        aiMl: "IA & apprentissage automatique",
        tools: "Outils & frameworks",
        databases: "Bases de données",
        softSkills: "Compétences interpersonnelles",
        languages: "Langues"
      },
      techTitle: "Technologies et spécialisations",
      academicFocus: {
        title: "Focus académique actuel",
        description: "M.Sc. en IA & ML à TU Darmstadt - Spécialisation dans les techniques avancées d'apprentissage automatique",
        focus1: "Deep Learning et NLP",
        focus2: "Statistiques",
        focus3: "Développement open source"
      }
    },
    // Experience Section
    experience: {
      title: "Expérience professionnelle",
      subtitle: "Mon parcours à travers des rôles de recherche et développement, développant une expertise en développement full-stack, technologie blockchain et applications IA.",
      achievements: "Réalisations clés:",
      technologies: "Technologies utilisées:",
      viewProject: "Voir le projet"
    },
    // Achievements Section
    achievements: {
      title: "Réalisations et reconnaissance",
      subtitle: "Reconnaissance de l'excellence en académie, recherche et leadership à travers des compétitions, bourses et contributions professionnelles.",
      stats: {
        gatePercentile: "Percentile GATE",
        nationalRanking: "Classement national",
        problemsSolved: "Problèmes résolus",
        dsaChallenges: "Défis DSA",
        teamSize: "Taille de l'équipe dirigée",
        hackathon: "Projet hackathon",
        researchSchools: "Écoles de recherche",
        iitSelection: "Sélection IIT-Goa"
      },
      categories: {
        academic: "Excellence académique",
        ip: "Propriété intellectuelle",
        competition: "Compétition",
        scholarship: "Bourse",
        programming: "Programmation",
        research: "Recherche",
        teaching: "Enseignement"
      },
      cta: {
        title: "Apprentissage continu et croissance",
        text: "Ces réalisations représentent des jalons dans mon parcours d'apprentissage continu et de développement professionnel. Je suis toujours prêt à relever de nouveaux défis et à contribuer à des projets innovants en IA et technologie.",
        badge1: "Résolveur de problèmes",
        badge2: "Leader d'équipe",
        badge3: "Moteur d'innovation",
        badge4: "Passionné de recherche"
      }
    },
    // Projects Section
    projects: {
      title: "Projets en vedette",
      subtitle: "Une vitrine de mes projets techniques couvrant la technologie blockchain, l'apprentissage automatique, les applications mobiles et le développement web.",
      highlights: "Points forts clés:",
      technologies: "Technologies:",
      features: "Fonctionnalités:",
      viewGithub: "Voir sur GitHub"
    },
    // Contact Section
    contact: {
      title: "Prendre contact",
      subtitle: "Je suis toujours intéressé par la discussion de nouvelles opportunités, collaborations ou projets innovants en IA et technologie. Connectons-nous!",
      info: {
        title: "Informations de contact",
        email: "E-mail",
        phone: "Téléphone",
        location: "Localisation",
        linkedin: "LinkedIn",
        github: "GitHub"
      },
      status: {
        title: "Statut actuel",
        available: "Disponible pour de nouvelles opportunités",
        studying: "Actuellement en M.Sc. à TU Darmstadt",
        research: "Ouvert aux collaborations de recherche"
      },
      collaborate: {
        title: "Collaborons",
        text: "Que vous recherchiez un ingénieur IA dévoué, ayez besoin de consultation sur des projets d'apprentissage automatique, ou souhaitiez discuter d'opportunités de recherche, j'aimerais avoir de vos nouvelles.",
        sendEmail: "Envoyer un e-mail",
        linkedin: "LinkedIn",
        github: "GitHub"
      },
      lookingFor: {
        title: "Ce que je recherche",
        role1: "🚀 Postes d'ingénieur IA/ML",
        role2: "🔬 Opportunités de recherche",
        role3: "💻 Projets de développement full-stack",
        role4: "🤝 Collaborations open source",
        role5: "📚 Partage de connaissances et mentorat"
      },
      cta: {
        title: "Prêt à commencer une conversation?",
        text: "Je réponds à tous les messages dans les 24 heures. Discutons de la façon dont nous pouvons travailler ensemble!",
        button: "Commencer la conversation"
      }
    },
    // Footer Section
    footer: {
      intro: "Étudiant en ingénierie IA à TU Darmstadt, passionné par l'apprentissage automatique, la technologie blockchain et la création de solutions innovantes qui font la différence.",
      quickLinks: "Liens rapides",
      connect: "Connectez-vous avec moi",
      linkedinProfile: "Profil LinkedIn",
      githubRepo: "Dépôt GitHub",
      openTo: "Ouvert à la collaboration et aux nouvelles opportunités en IA, ML et développement logiciel.",
      copyright: "Meet Thummar. Tous droits réservés. | Construit avec passion pour l'innovation.",
      madeWith: "Créé avec React & TypeScript",
      backToTop: "Retour en haut",
      email: "E-mail",
      call: "Appeler"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
