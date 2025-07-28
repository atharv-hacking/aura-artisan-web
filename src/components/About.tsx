import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices and industry standards."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces with attention to detail and user experience."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless user interaction."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience building web applications. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              My Journey
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Started as a computer science student, I quickly fell in love with web development. 
              Over the years, I've worked with startups and established companies, helping them 
              bring their digital visions to life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or enjoying a good cup of coffee while sketching out ideas 
              for my next project.
            </p>
          </div>
          
          <div className="grid gap-6 animate-scale-in">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card-gradient border-border/50 hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-skill-gradient rounded-lg shadow-glow">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-card-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;