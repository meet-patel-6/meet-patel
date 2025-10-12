import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: t.contact.info.email,
      value: "thummarmeet15@gmail.com",
      href: "mailto:thummarmeet15@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t.contact.info.phone,
      value: "+49 155102 91172",
      href: "tel:+4915510291172"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t.contact.info.location,
      value: "Darmstadt, Germany",
      href: null
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: t.contact.info.linkedin,
      value: "meet-thummar15",
      href: "https://linkedin.com/in/meet-thummar15"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: t.contact.info.github,
      value: "meet-patel-6",
      href: "https://github.com/meet-patel-6"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <Card className="gradient-card shadow-medium border-0 mb-8">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">{t.contact.info.title}</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="p-3 gradient-hero rounded-lg text-white">
                          {info.icon}
                        </div>
                        <div>
                          <div className="font-medium">{info.label}</div>
                          {info.href ? (
                            <a 
                              href={info.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary-hover transition-smooth"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-muted-foreground">{info.value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="gradient-card shadow-medium border-0">
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4">{t.contact.status.title}</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{t.contact.status.available}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{t.contact.status.studying}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>{t.contact.status.research}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Call to Action */}
            <div>
              <Card className="gradient-card shadow-medium border-0 mb-8">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">{t.contact.collaborate.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t.contact.collaborate.text}
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-primary hover:bg-primary-hover text-white"
                      onClick={() => window.open('mailto:thummarmeet15@gmail.com', '_blank')}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {t.contact.collaborate.sendEmail}
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                        variant="outline"
                        onClick={() => window.open('https://linkedin.com/in/meet-thummar15', '_blank')}
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        {t.contact.collaborate.linkedin}
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => window.open('https://github.com/meet-patel-6', '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        {t.contact.collaborate.github}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="gradient-accent text-white shadow-strong border-0">
                <div className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">{t.contact.lookingFor.title}</h3>
                  <div className="space-y-3 text-white/90">
                    <div>{t.contact.lookingFor.role1}</div>
                    <div>{t.contact.lookingFor.role2}</div>
                    <div>{t.contact.lookingFor.role3}</div>
                    <div>{t.contact.lookingFor.role4}</div>
                    <div>{t.contact.lookingFor.role5}</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="gradient-card shadow-medium border-0 max-w-2xl mx-auto">
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">{t.contact.cta.title}</h3>
              <p className="text-muted-foreground mb-6">
                {t.contact.cta.text}
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-hover text-white px-8"
                onClick={() => window.open('mailto:thummarmeet15@gmail.com?subject=Portfolio Contact - Let\'s Connect!', '_blank')}
              >
                {t.contact.cta.button}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;