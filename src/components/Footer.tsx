import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold text-foreground mb-2">
              Alex<span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground">
              Building digital experiences with passion
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Alex Thompson. Made with 
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;