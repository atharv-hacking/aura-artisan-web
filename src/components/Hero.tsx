import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Alex Thompson
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer crafting beautiful, functional web experiences with modern technologies
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button variant="hero" size="lg" className="group" asChild>
            <a href="mailto:alex.thompson@example.com">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </a>
          </Button>
          <Button variant="outline-hero" size="lg" className="group" asChild>
            <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </a>
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 mt-12 animate-scale-in">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors hover:scale-110 transform duration-300">
            <Github className="h-8 w-8" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors hover:scale-110 transform duration-300">
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="mailto:alex.thompson@example.com" className="text-primary-foreground/80 hover:text-accent transition-colors hover:scale-110 transform duration-300">
            <Mail className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;